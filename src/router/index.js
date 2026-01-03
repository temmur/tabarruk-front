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
import PCountriesSingle from '@/views/Countries/PIndex.vue'
import Privacy from '@/views/Privacy.vue'
import NewsSingle from "@/views/NewsSingle.vue";



const routes = [
    {
        path: '/',
        component: LDefaultLayout,
        children: [
            { path: '', name: 'Home', component: Home },
            {path: 'country/:id', name: 'countriesSingle',
                component:PCountriesSingle,
                props: true
            },
            {path: '/playground',
                name: 'Playground',
                component: ()=> import('@/views/PPlayground.vue')},
                  {
    path: '/news/:id',
    name: 'news-detail',
    component: NewsSingle,
  },
            { path: 'countries', name: 'Countries', component: Countries },
            { path: 'map', name: 'Map', component: Map },
            { path: 'religions', name: 'Religions', component: Religions },
            { path: 'help', name: 'Help', component: Help },
            { path: 'faq', name: 'Faq', component: Faq },
            {path:'privacy', name:'Privacy', component:Privacy},
        ]
    }
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,


})
router.beforeEach((to, from, next) => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
    next()
})
export default router;

