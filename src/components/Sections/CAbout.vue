<template>
  <section class="px-6 md:px-20 py-16 text-white">
    <div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

      <div>
        <h2 class="text-4xl font-bold mb-4 border-b-2 border-red-500 pb-2">
          Biz haqimizda
        </h2>

        <p class="text-lg leading-relaxed text-gray-300">
          Maqolalar, fotosuratlar va videolar tanlovi orqali turkiy mamlakatlarning
          qimmatli, tarixiy va merosi joylarini o‘rganing...
        </p>

        <div class="supporter-container mt-8">
          <div class="supporter-item" v-for="(item, i) in supporters" :key="i">
            
            <!-- <img :src="item.img" alt="logo" class="group" />

            <div class="group:hover">
              {{ item.text }}
            </div> -->
            <div class="group inline-block relative flex! items-center">
  <img :src="item.img" alt="logo" class="object-cover" />

  <div 
    class="
      opacity-0 
      group-hover:opacity-100 
      hidden
      group-hover:block
      group-hover:w-full
      transition-opacity 
      duration-300 
      flex items-center justify-center 
      text-white text-lg font-semibold 
      bg-black/50
    "
  >
    {{ item.text }}
  </div>
</div>
          </div>
        </div>

      </div>

      <CImages />

    </div>
  </section>
</template>

<script setup>
import CImages from "./CImages.vue";

const supporters = [
  {
    img: "https://tabarrukziyorat.uz/media/supporter/lg_3.png",
    text: "O‘zbekiston Respublikasi Ekologiya, atrof-muhitni muhofaza qilish va iqlim o‘zgarishi vazirligi huzuridagi Turizm qo‘mitasi"
  },
  {
    img: "https://tabarrukziyorat.uz/media/supporter/OTS_OVAL_LOGO_RGB_31_12_2024_mNW2jGL.png",
    text: "Turkiy davlatlar tashkiloti"
  }
];
</script>

<style scoped>
.supporter-container {
  display: flex;
  gap: 20px;
}

.supporter-item {
  border-radius: 14px;
  padding: 15px 20px;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: 0.35s ease;
}

.logo {
  width: 75px;
  height: 75px;
  object-fit: contain;
  transition: 0.35s ease;
}

.text-overlay {
  font-size: 15px;
  color: #e5e7eb;
  opacity: 0;
  transition: opacity 0.35s ease;
  
}
 
</style>
