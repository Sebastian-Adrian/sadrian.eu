require('dotenv').config({
    path: require('path').resolve(__dirname, '.env')
});

const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const path = require('path');
const { Octokit } = require('octokit');
const cors = require('cors');

const app = express();
const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: process.env.SMTP_SECURE,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
    }
});

app.use(cors());
app.use(bodyParser.json());
// 1) Frontend ausliefern
app.use(express.static(path.join(__dirname, 'dist')));

app.get('/', (req, res) => {
    res.sendFile(__dirname + 'dist/index.html');
});

// GitHub API Route
app.get('/api/github/repos', async (req, res) => {
    try {
        if (!process.env.GITHUB_KEY) {
            throw new Error('GitHub API Key fehlt in den Umgebungsvariablen');
        }

        const octokit = new Octokit({ 
            auth: process.env.GITHUB_KEY,
            log: console // Aktiviert Debug-Logging
        });
        
        // Repositories abrufen
        const response = await octokit.request('GET /user/repos', {
            affiliation: 'owner',
            headers: {
                'X-GitHub-Api-Version': '2022-11-28'
            }
        });
        
        const reposData = response.data;

        // Sprachen für jedes Repo abrufen
        await Promise.all(
            reposData.map(async (repo) => {
                try {
                    const languagesResponse = await octokit.request(
                        `GET /repos/${repo.owner.login}/${repo.name}/languages`,
                        {
                            headers: {
                                'X-GitHub-Api-Version': '2022-11-28'
                            }
                        }
                    );
                    repo.languages = languagesResponse.data;
                } catch (error) {
                    console.error(`Fehler beim Abrufen der Sprachen für ${repo.name}:`, error);
                }
            })
        );

        res.json(reposData);
    } catch (error) {
        console.error('Fehler beim Abrufen der GitHub-Daten:', error);
        res.status(500).json({ error: 'Interner Server-Fehler' });
    }
});

// E-Mail-Versandroute
app.post('/api/send-email', async (req, res) => {
    const {email, contact_name, subject, message} = req.body

    const mailOptions = {
        to: process.env.SMTP_USER,
        from: contact_name,
        subject: subject,
        html: `
        <p>${message}</p>
        <table>
            <tr>
                <td>Name:</td><td>${contact_name}</td>
            </tr>
            <tr>
                <td>E-Mail:</td><td>${email}</td>
            </tr>
       </table>`
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log('E-Mail erfolgreich gesendet');
        res.sendStatus(200);
    } catch (error) {
        console.error('Fehler beim Senden der E-Mail', error);
        res.status(500).send('Fehler beim Senden der E-Mail');
    }
});

// Express-Server starten
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server läuft auf Port ${port}`);
}); 