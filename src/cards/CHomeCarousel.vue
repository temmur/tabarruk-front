<template>
     <div
          class="flex animate-scroll relative -top-20 overflow-hidden!"
          @mouseenter="paused = true"
          @mouseleave="paused = false"
          :class="{ 'pause-animation': paused }"
      >
        <div
            v-for="(card, index) in loopedCards"
            :key="index"
            :class="[
                'card',
                'flex-none backdrop-blur-xl bg-gray-500/40 border border-gray-500 hover:border-white rounded-lg shadow-lg p-2 flex items-center w-[400px] h-[100px] mr-4\n'+
'               transform transition-transform duration-500 hover:shadow-2xl'
            ]"
        >
          <img :src="card.image" alt="Destination" class="w-20 h-20 object-cover rounded-lg" />
          <div class="ml-5 flex flex-col justify-center md:gap-2">
            <p class="text-[10px] text-gray-300 font-medium leading-tight">{{ card.subtitle }}</p>
            <p class="text-[15px] text-white font-semibold leading-tight">{{ card.title }}</p>
          </div>
        </div>
      </div>
</template>
<script setup lang="ts">
import {ref} from 'vue'

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

<style>
.card{
  width: clamp(200px, 30vw, 400px);
  min-height:clamp(80px, 12vw, 100px);
  padding:clamp(8px,2vw,12px);
  border-radius:clamp(8px,1.2vw,12px);
}
</style>