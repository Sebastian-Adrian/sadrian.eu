import {createApp} from 'vue'
import {MotionPlugin} from "@vueuse/motion";
import App from './App.vue'
import './assets/style/style.scss';
import mitt from "mitt";
import {Waypoint} from 'vue-waypoint'

const app = createApp(App);
app.use(MotionPlugin);
app.use(Waypoint);
const mittEmitter = mitt();
app.config.globalProperties.$mitt = mittEmitter;
app.mount('#app');



