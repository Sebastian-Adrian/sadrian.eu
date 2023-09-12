import {createRouter, createWebHistory} from "vue-router";
import App from "@/App.vue";
import { config} from "vue-email/compiler";
import nodemailer from "nodemailer";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: App
    },
]
const router = createRouter({
    history: createWebHistory(process.env.BASE_UEL),
    routes
})

const vueEmail = config('./emails')

router.post('/api/sendmail', async (req, res) => {

    const template = await vueEmail.render("template_contact.vue", {
        props: {
            url: 'https://sadrian.eu',
        },
    });

    const transporter = nodemailer.createTransport({
        host: process.env.HOST || 'smtp.strato.de',
        port: 587,
        secure: true,
        auth: {
            user: 'mail@sadrian.eu',
            pass: 'AssiPerX033',
        },
    });

    const options = {
        from: 'mail@sadrian.eu',
        to: 'mail@sadrian.eu',
        subject: 'hello world',
        html: template,
    };
    await transporter.sendMail(options);
    return res.json({ message: "Email sent" });
});

export default router