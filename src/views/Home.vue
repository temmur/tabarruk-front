<template>
  <div class="overflow-hidden">
    <CBanner/>
    <CHomeCarousel/>
    <div class="-mt-5">
      <CAbout/>
    </div>
    <div class="mt-20">
      <TravelStats/>
    <CountriesCard :countries = "countries"/>
      <NewsCards :cards="cards"/>
      <InstagramCard/>
    </div>
  <Particles :items="institutions" :repeat-count="999" />
  </div>
</template>

<script setup lang="ts">
import { cards, } from '@/data/DCardsData.js';
import {countries} from '@/data/DCountriesData'
import CBanner from "@/components/CBanner.vue";
import TravelStats from "@/cards/TravelStats.vue";
import CountriesCard from '@/components/Sections/CountriesCard.vue'
import NewsCards from "@/cards/newsCards.vue";
import InstagramCard from "@/components/InstagramCard.vue";
import Particles from "@/components/PartnerCarusel.vue";
import CAbout from "@/components/Sections/CAbout.vue";
import CHomeCarousel from "@/cards/CHomeCarousel.vue";
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