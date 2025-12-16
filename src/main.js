// src/main.js
import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/icomoon/style.css'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';

// Import the icons you’ll use anywhere in the project
import { faYoutube, faInstagram, faTwitter, faTelegram } from '@fortawesome/free-brands-svg-icons';
import { faHouse, faFlag } from '@fortawesome/free-solid-svg-icons';
import 'remixicon/fonts/remixicon.css';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { createPinia } from 'pinia';
import  i18n  from './i18n';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

library.add(faBars, faXmark);

library.add(faYoutube, faInstagram, faTwitter, faTelegram, faHouse, faFlag, faChevronDown);

const app = createApp(App);

// Register globally
app.component('FontAwesomeIcon', FontAwesomeIcon);
app.use(createPinia())
app.use(router)
app.use(i18n)
app.mount('#app')

