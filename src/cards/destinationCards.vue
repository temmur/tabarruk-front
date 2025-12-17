<template>
  <div class="w-full overflow-hidden cursor-pointer relative">
    <div
        class="flex animate-scroll"
        @mouseenter="paused = true"
        @mouseleave="paused = false"
        :class="{ 'pause-animation': paused }"
    >
      <div
          v-for="(card, index) in loopedCards"
          :key="index"
          class="flex-none bg-gray-300 border border-white rounded-lg p-2 flex items-center w-[400px] h-[100px] mr-4">
        <img :src="card.image" :alt="card.title" class="w-20 h-20 object-cover rounded-lg" />
        <div class="ml-5 flex flex-col justify-center gap-2">
          <p class="text-[10px] text-gray-600 font-medium leading-tight">{{ card.subtitle }}</p>
          <p class="text-2xl text-white font-semibold mt-1 leading-tight">{{ card.title }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import { ref } from 'vue';

const cards = ref([
  { id: 1, image: 'https://tabarrukziyorat.uz/media/destination_images/Axtam_Sahoba_Adhamsahoba.jpg', title: 'Ahtansob', subtitle: 'Toshkent region, Uzbekistan' },
  { id: 2, image: 'https://tabarrukziyorat.uz/media/destination_images/IMG_6383.jpg', title: 'Abiwerd Peshtak', subtitle: 'Mary province, Turkmenistan' },
  { id: 3, image: 'https://tabarrukziyorat.uz/media/destination_images/Рисунок3_W24FO57.jpg', title: 'Amir Ahmad Bukhari Mosque', subtitle: 'Istanbul, Turkey' },
  { id: 4, image: 'https://tabarrukziyorat.uz/media/destination_images/maxresdefault.jpg', title: 'Ancient settlement Balasagun', subtitle: 'Zhambyl region, Kazakhstan' },
  { id: 5, image: 'https://tabarrukziyorat.uz/media/destination_images/c4818299c0b1420401ae51135793a987_4.jpg', title: 'Abdurrahman Arnavut’s tomb', subtitle: 'Veszprém, Hungary' },
  { id: 6, image: 'https://tabarrukziyorat.uz/media/destination_images/e72a32a4e5fa6016ced565677acfc453.jpg', title: 'Akyrtas palace complex', subtitle: 'Zhambyl region, Kazakhstan' },
  { id: 7, image: 'https://tabarrukziyorat.uz/media/destination_images/Screenshot_20190819-152258_Google.jpg', title: 'Ancient citadel of Shymkent', subtitle: 'Shymkent city, Kazakhstan' },
  { id: 8, image: 'https://tabarrukziyorat.uz/media/destination_images/3_zL7Uu07.jpg', title: 'Ancient city of Otrar', subtitle: 'Turkestan region, Kazakhstan' },
  { id: 9, image: 'https://tabarrukziyorat.uz/media/destination_images/wn1kiDadyug.jpg', title: 'Ancient settlement Ancient Taraz', subtitle: 'Zhambyl region, Kazakhstan' },
  { id: 10, image: 'https://tabarrukziyorat.uz/media/destination_images/image_2025-01-20_16-49-26.jpg', title: 'Ancient settlement Auliye-bastau', subtitle: 'Zhambyl region, Kazakhstan' }
]);

const loopedCards = ref([...cards.value, ...cards.value]);

const paused = ref(false);
</script>

<style scoped>
@keyframes scroll {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

.animate-scroll {
  display: flex;
  width: max-content;
  animation: scroll 150s linear infinite;
}

.pause-animation {
  animation-play-state: paused;
  transition: transform 0.3s, box-shadow 0.3s;
}

.pause-animation :hover{
  transform: scale(0.9);
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1),
  0 4px 6px rgba(0, 0, 0, 0.1);
}
</style>
