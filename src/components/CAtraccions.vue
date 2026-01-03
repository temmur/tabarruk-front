<template>
  <div class="bg-slate-900 min-h-screen p-6 ">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">

      <div
          v-for="card in cards"
          :key="card.title"
          class="relative h-72 rounded-2xl overflow-hidden cursor-pointer group"
      >
        <!-- Image -->
        <img
            :src="card.image"
            class="w-full h-full object-cover group-hover:scale-110 transition duration-500"
        />

        <!-- Overlay -->
        <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

        <!-- Title -->
        <div class="absolute bottom-5 left-5 right-5 text-white text-xl font-semibold">
          {{ card.title }}
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
const cards = [
  {
    title: "Ko‘hna Xovos me’moriy majmuasi",
    image: "/img/img1.jpg",
  },
  {
    title: "Orifjonboy masjidi",
    image: "/img/img2.jpg",
  },
  {
    title: "Ayteki bobo ziyoratgohi",
    image: "/img/img3.jpg",
  },
]
</script>
