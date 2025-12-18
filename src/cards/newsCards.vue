<template>
  <section class="w-full px-6 py-12 container ">
    <div class="text-center mb-9">
      <h3 class="font-serif text-white mb-3 text-3xl font-bold font-italic underline underline-offset-[8px] decoration-red-500">News</h3>
      <p class="font-medium mr-5 text-white">Latest news about Turkic countries</p>
    </div>
    <div class="flex flex-cols-1  md:flex-cols-3 justify-between gap-6 max-w-5xl mx-auto cursor-pointer ">
      <div class="md:col-span-1">
        <div class="bg-gray-800/40 hover:bg-gray-700/40 backdrop-blur-5xl rounded-xl p-4 flex gap-4 justify-center items-center text-white w-[620px] h-[320px]
">
          <img :src="props.cards[0].image" class="w-60 h-70 object-cover rounded-xl"/>
          <div class="flex flex-col justify-between h-full py-1">
            <p class="font-bold text-xl leading-tight mb-8">{{ props.cards[0].title }}</p>
            <p class="text-[14px] text-gray-400">{{ props.cards[0].date }}</p>
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
            class="bg-gray-800/40 rounded-xl backdrop-blur-5xl hover:bg-gray-700/40 flex items-center gap-2 text-white w-[480px] h-[155px]

"
        >
          <img :src="card.image" class="w-27 ml-3 h-30 object-cover rounded-xl" />
          <div class="flex flex-col">

            <p class="text-lg font-medium mt-2 leading-tight">{{ card.title }}</p>
            <p class="text-[14px] text-gray-300  mt-3 leading-tight ">{{ card.desc }}</p>
            <p class="text-[13px] text-gray-400">{{ card.date }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
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

