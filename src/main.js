import {createApp} from 'vue'
import {MotionPlugin} from "@vueuse/motion";
import App from './App.vue'
import './assets/style.css';
import router from "@/router";
import {VueEmailPlugin} from "vue-email";
import vueEmail from "vue-email/dist/runtime/templates/vue-email.mjs";

const app = createApp(App);
app.use(MotionPlugin);
app.use(router);
app.mount('#app');