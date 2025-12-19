<template>
  <div class="relative w-full">
    <button
        @click="prev"
        class="absolute left-2 top-1/2 -translate-y-1/2 z-30 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full backdrop-blur-md transition"
        :disabled="currentIndex === 0"
    >
      ←
    </button>

    <div class="overflow-hidden w-full px-4">
      <div
          class="flex gap-4 transition-transform duration-500 will-change-transform"
          :style="{ transform: `translateX(-${currentIndex * step}px)` }"
      >
        <div
            v-for="(item, index) in images"
            :key="index"
            class='shrink-0 transition-all duration-300'
            :style="{
            width: hovered === index
              ? expandedWidth + 'px'
              : compressedWidth + 'px'
          }"
        >
          <img
              :src="item.src"
              :alt="item.alt"
              :class="[
                  'images',
                  'w-full h-[320px] object-cover rounded-2xl shadow-lg transition-all duration-300']"
              @mouseenter="hovered = index"
              @mouseleave="hovered = null"
              draggable="false"
          />
        </div>
      </div>
    </div>

    <button
        @click="next"
        class="absolute right-2 top-1/2 -translate-y-1/2 z-30 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full backdrop-blur-md transition"
        :disabled="currentIndex >= maxIndex"
    >
      →
    </button>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const expandedWidth = 260;
const compressedWidth = 90;

const gap = 16;
const step = compressedWidth + gap;

const images = [
  { src: "https://tabarrukziyorat.uz/media/about_images/3_2.jpg", alt: "1" },
  { src: "https://tabarrukziyorat.uz/media/about_images/Bibi_Heybet_Moscue_Baku.jpg", alt: "2" },
  { src: "https://tabarrukziyorat.uz/media/about_images/360853067c4d8795c582b23331211444.jpg", alt: "3" },
  { src: "https://tabarrukziyorat.uz/media/about_images/121_jw0k2hA.jpg", alt: "4" },
  { src: "https://tabarrukziyorat.uz/media/about_images/%D0%91%D0%B0%D1%88%D0%BD%D1%8F_%D0%91%D1%83%D1%80%D0%B0%D0%BD%D0%B0_%D0%BD%D0%B0_%D1%84%D0%BE%D0%BD%D0%B5_%D0%9A%D0%B8%D1%80%D0%B3%D0%B8%D0%B7%D1%81%D0%BA%D0%BE%D0%B3%D0%BE_%D1%85%D1%80%D0%B5%D0%B1%D1%82%D0%B0.jpg", alt: "5" },
  { src: "https://tabarrukziyorat.uz/media/about_images/bab934ce84126091e0c0e693da2b79ed_tP64opb.jpg", alt: "6" },
  { src: "https://tabarrukziyorat.uz/media/about_images/d86b7d8d59d523b20842a2f1f9722f66.jpg", alt: "7" },
];

const hovered = ref(null);
const currentIndex = ref(0);

const visibleCount = 4;

const maxIndex = computed(() => {
  return Math.max(0, images.length - visibleCount);
});

function next() {
  if (currentIndex.value < maxIndex.value) currentIndex.value++;
}

function prev() {
  if (currentIndex.value > 0) currentIndex.value--;
}
</script>

<style scoped>
button:disabled {
  opacity: 0.4;
}
img {
  will-change: transform;
  user-select: none;
}

@media(max-width: 315px){
.images{
  height:70vh;
  width:10vh;
}
}

</style>
