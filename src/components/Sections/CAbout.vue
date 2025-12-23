<template>
  <section class="px-6 md:px-20 py-16 text-white bg-[url('/images/bg-vector.svg')] bg-cover bg-center">
    <div class="container grid grid-cols-1 md:grid-cols-2 gap-10">

      <div>
        <h2 class=" text-2xl md:text-4xl font-bold mb-4 border-b-2 border-red-500 pb-2">
          Biz haqimizda
        </h2>

        <p :class="[
            'subtitle',
'md:text-xl leading-relaxed text-gray-300'
]">
          Maqolalar, fotosuratlar va videolar tanlovi orqali turkiy mamlakatlarning
          qimmatli, tarixiy va merosi joylarini o‘rganing. <br> Qadimgi xarobalar, hayratlanarli masjidlar, o'rta asr qal'alari va murakkab koshinlar go'zalligini kashf eting.
        </p>

        <div class="supporter-container mt-8">
          <div class="supporter-item " v-for="(item, i) in supporters" :key="i" >
            <div class="group relative flex  items-center gap-3 w-[150px]">

              <img :src="item.img" alt="logo" class='object-cover'
/>

  <div 
    class="
    black opacity-100
     md:opacity-0
    md:group-hover:block
    md:group-hover:opacity-100
      group-hover:opacity-100
      group-hover:inline-block
      group-hover:w-full
      transition-opacity 
      duration-300 
       items-center justify-between
      text-white text-[8px] md:text-[10px] font-semibold
      max-w-[200px]
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
  gap: 10px;
}

.supporter-item {
  border-radius: 14px;
  display: flex;
  align-items: center;
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
.subtitle{
  font-size:clamp(10px,13px,18px);
}
</style>
