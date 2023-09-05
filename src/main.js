import {createApp} from 'vue'
import {MotionPlugin} from "@vueuse/motion";
import {Octokit} from "octokit";
import App from './App.vue'
import './assets/style.css';

const app = createApp(App);
app.use(MotionPlugin);
app.mount('#app');