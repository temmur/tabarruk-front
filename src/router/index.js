import {createRouter, createWebHistory} from 'vue-router';
//page
import LDefaultLayout from "@/layouts/LDefaultLayout.vue";

//views
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Countries from '@/views/Countries.vue'
import Map from '@/views/Map.vue'
import Religions from '@/views/Religions.vue'
import Help from '@/views/Help.vue'
import Faq from '@/views/Faq.vue'

const routes = [
    {
        path: '/',
        component: LDefaultLayout,
        children: [
            { path: '', name: 'Home', component: Home },
            { path: 'about', name: 'About', component: About },
            { path: 'countries', name: 'Countries', component: Countries },
            { path: 'map', name: 'Map', component: Map },
            { path: 'religions', name: 'Religions', component: Religions },
            { path: 'help', name: 'Help', component: Help },
            { path: 'faq', name: 'Faq', component: Faq },
        ]
    }
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})


export default router;
