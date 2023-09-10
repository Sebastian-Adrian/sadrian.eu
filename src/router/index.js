import {createRouter, createWebHistory} from "vue-router";
import App from "@/App.vue";

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


export default router