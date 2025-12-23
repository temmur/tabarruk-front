<template>
  <section class="w-full px-6 py-12">
    <div class="text-center mb-9">
      <h3 class="font-serif text-white mb-3 text-3xl font-bold font-italic underline underline-offset-[8px] decoration-red-500">News</h3>
      <p class="font-medium mr-5 text-white">Latest news about Turkic countries</p>
    </div>
    <div class="flex flex-col md:flex-row md:ml-65 gap-[10px] ml-[5px]  max-w-5xl mx-auto cursor-pointer ">
      <div class="md:col-span-1">
        <div class="bg-gray-800/40 hover:bg-gray-700/40 backdrop-blur-5xl rounded-xl p-4 flex gap-4 justify-center items-center text-white w-full md:w-[440px]  h-full md:h-[320px]
">
          <img :src="props.cards[0].image" class="w-30 md:w-60 h-40 md:h-70 ml-2 object-cover rounded-xl"/>
          <div class="flex flex-col  h-full py-1">
            <p class="font-bold text-[13px] md:text-[22px] leading-tight mb-8 line-clamp-2">{{ props.cards[0].title }}</p>
            <p class="text-[10px] text-gray-400">{{ props.cards[0].date }}</p>
          </div>
        </div>
      </div>

      <div class="md:col-span-2 flex flex-col cursor-pointer gap-3
bg-[url('/images/bg-vector.svg')]
 bg-right-top bg-default
">
        <div
            v-for="(card,idx) in props.cards.slice(1)"
            :key="idx"
            class="bg-gray-800/40 rounded-xl backdrop-blur-5xl hover:bg-gray-700/40 flex items-center gap-2 text-white w-full md:w-[480px] h-full md:h-[155px]

"
        >
          <img :src="card.image" class="w-27 ml-3 h-30 object-cover rounded-xl" />
          <div class="flex flex-col">

            <p class="text-lg font-small mt-2 leading-tight line-clamp-2">{{ card.title }}</p>
            <p class="text-[12px] sm:text-[13px] md:text-[14px] text-gray-300  mt-3 leading-tight line-clamp-2">{{ card.desc }}</p>
            <p class="text-[10px] sm:text-[11px] md:text-[12px] text-gray-400">{{ card.date }}</p>
          </div>
          </div>
        <div class="flex justify-end mt-4">
          <CButtons variant="blue" class="w-full max-w-50 h-full max-h-30 pt-2 pb-2 bg-gray-600">
            Barcha yangiliklar ➜
          </CButtons>
        </div>

      </div>
    </div>

  </section>

</template>
<script setup lang="ts">
import CButtons from "@/components/CButtons.vue";

interface Card{
  image:string,
  title:string,
  desc?:string,
  date:string,
}
const props = defineProps<{
  cards:Card[]
}>()

</script>

