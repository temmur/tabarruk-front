<template>
<CBanner/>
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
          class="flex-none bg-gray-300 border border-white rounded-lg shadow-lg p-2 flex items-center w-[400px] h-[100px] mr-4
               transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl"
      >
        <img :src="card.image" alt="Destination" class="w-20 h-20 object-cover rounded-lg" />
        <div class="ml-5 flex flex-col justify-center gap-2">
          <p class="text-[10px] text-gray-600 font-medium leading-tight">{{ card.subtitle }}</p>
          <p class="text-2xl text-white font-semibold mt-1 leading-tight">{{ card.title }}</p>
        </div>
      </div>
    </div>
  </div>
  <div class="space-x-4 flex text-white items-center">
   <CButtons text="More About Us " variant="blue">

<template #suffix>➜</template>
   </CButtons>

    <CButtons variant="red">
<template #prefix>🌐</template>
      Explore
    </CButtons>

  </div>
</template>



<script setup>
import { ref, onMounted,onBeforeUnmount } from 'vue';
import ExploreButton from "@/Buttons/ExploreButton.vue";
import AboutButton from "@/Buttons/AboutButton.vue";
import CButtons from "@/components/CButtons.vue";
import CBanner from "@/components/CBanner.vue";

const cards = ref([
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


const loopedCards = ref([...cards.value, ...cards.value]);

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