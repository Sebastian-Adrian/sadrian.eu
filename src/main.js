import {createApp} from 'vue'
import {MotionPlugin} from "@vueuse/motion";
import {Octokit} from "octokit";
import App from './App.vue'
import './assets/style.css';

const app = createApp(App);
app.use(MotionPlugin);
app.mount('#app');

const octokit = new Octokit({auth: `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`});

const repos =
    await octokit.request('GET /user/repos', {
        affiliation: 'owner',
        headers: {
            'X-GitHub-Api-Version': '2022-11-28'
        }
    })

console.log(repos)