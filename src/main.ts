import { createApp } from 'vue';
import {
    createMemoryHistory,
    createRouter,
    type RouteRecordRaw,
} from 'vue-router';

import App from './App.vue';

import {
    AudioView,
    ContactView,
    HomeView,
    ShopView,
    TattoosView,
    VisualsView,
} from './components/pages';

import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

const routes: RouteRecordRaw[] = [
    { path: '/audio', component: AudioView },
    { path: '/contact', component: ContactView },
    { path: '/', component: HomeView },
    { path: '/shop', component: ShopView },
    { path: '/tattoos', component: TattoosView },
    { path: '/visuals', component: VisualsView },
];

const router = createRouter({
    history: createMemoryHistory(),
    routes,
});

createApp(App).use(router).mount('#app');
