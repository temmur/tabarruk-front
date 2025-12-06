<script setup>
import InstagramCard from "./components/InstagramCard.vue"
import Particles from "./components/PartnerCarusel.vue"

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


<template>
  <div>
    <router-view/>
    <InstagramCard/>
    <Particles :items="institutions" :repeat-count="4" />
  </div>
</template>
