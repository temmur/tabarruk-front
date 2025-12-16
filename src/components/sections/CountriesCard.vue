<template>
  <section class="w-full py-12  flex flex-col items-center">
    <!-- Title -->
    <h2 class="text-4xl text-white font-semibold text-center mb-2 font-serif  underline underline-offset-[13px] decoration-red-500 decoration-2 capitalize">how many countries?</h2>
    <!-- Subtitle -->
    <p class="text-center text-white mb-8">All countries that we represent</p>

    <!-- Countries grid -->
    <div class="container grid grid-cols-4 gap-4 text-center">
      <div
          v-for="(country, index) in props.countries"
          :key="index"
          class="relative z-10 w-full grid items-center p-2 pb-8 rounded-lg opacity-90 cursor-pointer
          hover:brightness-130
          transition-all duration-300 hover:bg-gray-700
          before:content-[''] before:absolute hover:before:bg-white before:left-1/2 before:-translate-x-1/2
          before:bottom-0 before:h-[2.5px]  before:w-7 hover:before:w-75 overflow-hidden
          before:transition-all before:duration-300"
      >
       <img
            :src="country.image"
            :alt="country.name"
            class="w-20 h-20 rounded-full  backdrop-blur-md border-gray-600 border-4 object-cover mb-2 flex mx-auto"
        />
        <span class="text-sm font-medium text-white">{{ country.name }}</span>
        <span class="text-[12px] font-medium text-gray-500">{{country.desc}}</span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Country{
  name:string,
  image: string,
  desc:string
}
const props = defineProps<{
  countries:Country[]
}>()
</script>