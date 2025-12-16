<template>
  <div class="overflow-hidden">
    <CBanner/>
    <CHomeCarousel/>
          <CAbout/>
      <TravelStats/>
    <CountriesCard :countries = "countries"/>
      <New+sCards :cards="cards"/>
      <InstagramCard/>
    </div>
  <Particles :items="institutions" :repeat-count="999" />
</template>

<script setup lang="ts">
import { ref, onMounted,onBeforeUnmount } from 'vue';
import CButtons from "@/components/CButtons.vue";
import CHomeCarousel from '@/cards/CHomeCarousel.vue';
import CBanner from "@/components/CBanner.vue";
import TravelStats from "@/cards/TravelStats.vue";
import CountriesCard from '../components/sections/CountriesCard.vue'
import NewsCards from "@/cards/newsCards.vue";
import DestinationCards from "@/cards/destinationCards.vue";

import CAbout from '@/components/Sections/CAbout.vue';
import InstagramCard from "@/components/InstagramCard.vue";
import Particles from "@/components/PartnerCarusel.vue";


const institutions = [
  {
    id: 1,
    title: "O'zbekiston Respublikasi Prezident Administratsiyasi",
    logo: '/img/admin.svg',
  },
  {
    id: 2,
    title: 'Turizm qo‘mitasi',
    logo: '/img/tourism.svg',
  },
  {
    id: 3,
    title: 'Ekologiya vazirligi',
    logo: '/img/eco.svg',
  },
  {
    id: 4,
    title: 'Favqulodda vaziyatlar vazirligi',
    logo: '/images/Vector (6).svg',
  },
]

const cards = ref(
    [
      {image:'https://tabarrukziyorat.uz/media/news/2881_turkic-ski-cup-to-take-place-on-18-february-2025-at-amirsoy-ski-resort-uzbekistan_f.jpg', title:'Turkic Ski Cup to take place on 18 February 2025 at Amirsoy Ski...', date:'2025-02-11'},
      {image:'https://tabarrukziyorat.uz/media/news/3107371.280b8123ff0ad60be67f8166274746b1.jpg', title:'Interview with Ambassador Kubanychbek Omuraliev', desc:'Interview with Ambassador Kubanychbek Omuraliev, Secretary General of the OT...', date:'2025-02-03'},
      {image:'https://tabarrukziyorat.uz/media/news/photo_2024-10-03_15-31-00.jpg', title:'As part of the "Tabarruk Ziyorat" project, a presentation of the platfor...', desc:'In order to implement the decree of the President of the Republic of Uzbekist...', date:'2024-03-11'},
    ]
)
const countries =[
  { name: "Uzbekistan", image: "https://tabarrukziyorat.uz/media/country_flags/Uzbekistan.svg", desc:"175 destinations" },
  { name: "Turkey", image: "https://tabarrukziyorat.uz/media/country_flags/Turkey_lzgDBoT.svg",desc:"150 destinations" },
  { name: "Turkmenistan", image: "https://tabarrukziyorat.uz/media/country_flags/Turkmenistan.svg",desc:"20 destinations"  },
  { name: "Azerbaijan", image: "https://tabarrukziyorat.uz/media/country_flags/Azerbaijan.svg" ,desc:"0 destinations" },
  { name: "Kazakhstan", image: "https://tabarrukziyorat.uz/media/country_flags/Kazakhstan.svg",desc:"51 destinations"  },
  { name: "Kyrgyzstan", image: "https://tabarrukziyorat.uz/media/country_flags/Kyrgyzstan.svg" ,desc:"19 destinations" },
  { name: "Hungary", image: "https://tabarrukziyorat.uz/media/country_flags/Hungary.svg" ,desc:"14 destinations" },
]





const carouselCards = ref([
  { id: 1, image: 'https://tabarrukziyorat.uz/media/destination_images/Axtam_Sahoba_Adhamsahoba.jpg', title: 'Ahtansob', subtitle: 'Toshkent region, Uzbekistan', visible: false },
  { id: 2, image: 'https://tabarrukziyorat.uz/media/destination_images/IMG_6383.jpg', title: 'Abiwerd Peshtak', subtitle: 'Mary province, Turkmenistan', visible: false },
  { id: 3, image: 'https://tabarrukziyorat.uz/media/destination_images/Рисунок3_W24FO57.jpg', title: 'Amir Ahmad Bukhari Mosque', subtitle: 'Istanbul, Turkey', visible: false },
  { id: 4, image: 'https://tabarrukziyorat.uz/media/destination_images/maxresdefault.jpg', title: 'Ancient settlement Balasagun', subtitle: 'Zhambyl region, Kazakhstan' },
  { id: 5, image: 'https://tabarrukziyorat.uz/media/destination_images/c4818299c0b1420401ae51135793a987_4.jpg', title: 'Abdurrahman Arnavut’s tomb', subtitle: 'Veszprém, Hungary' },
  { id: 6, image: 'https://tabarrukziyorat.uz/media/destination_images/e72a32a4e5fa6016ced565677acfc453.jpg', title: 'Akyrtas palace complex', subtitle: 'Zhambyl region, Kazakhstan' },
  { id: 7, image: 'https://tabarrukziyorat.uz/media/destination_images/Screenshot_20190819-152258_Google.jpg', title: 'Ancient citadel of Shymkent', subtitle: 'Shymkent city, Kazakhstan' },
  { id: 8, image: 'https://tabarrukziyorat.uz/media/destination_images/3_zL7Uu07.jpg', title: 'Ancient city of Otrar', subtitle: 'Turkestan region, Kazakhstan' },
  { id: 9, image: 'https://tabarrukziyorat.uz/media/destination_images/wn1kiDadyug.jpg', title: 'Ancient settlement Ancient Taraz', subtitle: 'Zhambyl region, Kazakhstan' },
  { id: 10, image: 'https://tabarrukziyorat.uz/media/destination_images/image_2025-01-20_16-49-26.jpg', title: 'Ancient settlement Auliye-bastau', subtitle: 'Zhambyl region, Kazakhstan' }

]);


const loopedCards = ref([...carouselCards.value, ...carouselCards.value]);

const paused = ref(false);


</script>


<style scoped>

@keyframes scroll {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); } /* because of duplicated cards */
}

.animate-scroll {
  display: flex;
  width: max-content;
  animation: scroll 150s linear infinite; /* slower */
}

/* Pause animation on hover */
.pause-animation {
  animation-play-state: paused;
}
.hero {
  position: relative;
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  color: #fff;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

.hero-bg {
  position: absolute;
  opacity: 1;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
}

.hero-overlay {
  position: absolute;
  z-index: 100;
  inset: 0;
  background: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.2),
      rgba(0, 0, 0, 0.2),
      rgba(0, 0, 0, 0.2)
  );
}

.hero-inner {
  position: relative;
  z-index: 2;
  height: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;
}

.hero-text {
  max-width: 800px;
  margin: 0 auto;
  font-size:20px;
}

.hero-location {
  font-size: 24px;
  margin-bottom:6px;
  opacity: 0.9;
  margin: 0 auto;
}

.hero-title {
  font-size: 94px;
  font-weight: 700;
  margin-bottom: 24px;
}

.hero-desc {
  font-size: 25px;
  line-height: 1.6;
  margin-bottom: 32px;
}

.hero-btn {
  background: #ff4b5c;
  color: #fff;
  border: none;
  padding: 14px 32px;
  border-radius: 999px;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.2s ease;
}

.hero-btn:hover {
  background: #ff3345;
}

.hero-counter {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: -80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  font-size: 16px;
}

.hero-counter-number {
  font-size: 16px;
  font-weight: 400;
  margin-bottom: -30px;
  margin-top: -30px;
  letter-spacing: 0.15em;
}

.hero-counter-line {
  width: 2px;
  height: 140px;
  background-color: rgba(255, 255, 255, 0.7);
}

@media (max-width: 768px) {
  .hero-inner {
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }

  .hero-counter {
    position: absolute;
    right: 16px;
    top: 50%;
    transform: translateY(-50%);
  }

  .hero-title {
    font-size: 42px;
  }
}

</style>
