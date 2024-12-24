import { createApp } from 'vue';
import {
    createMemoryHistory,
    createRouter,
    type RouteRecordRaw,
} from 'vue-router';

import App from './App.vue';
import AudioView from './components/AudioView.vue';
import ContactView from './components/ContactView.vue';
import HomeView from './components/HomeView.vue';
import ShopView from './components/ShopView.vue';
import TatoosView from './components/TatoosView.vue';
import VisualsView from './components/VisualsView.vue';

import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

const routes: RouteRecordRaw[] = [
    { path: '/audio', component: AudioView },
    { path: '/contact', component: ContactView },
    { path: '/', component: HomeView },
    { path: '/shop', component: ShopView },
    { path: '/tattoos', component: TatoosView },
    { path: '/visuals', component: VisualsView },
];

const router = createRouter({
    history: createMemoryHistory(),
    routes,
});

createApp(App).use(router).mount('#app');
