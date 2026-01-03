<template>
  <div class="size-max flex w-full min-w-[500px] items-center gap-2 rounded-xl p-5 decoration-blue-50 border border-gray-500 backdrop-blur-md bg-gray-600/20 ">
    <div v-for="(el, idx) in data"
         :key="idx"
         class="flex items-center"
    >
   <div>
     <div class="flex items-center gap-2 pr-3 hover:bg-active">
       <i class="icon-user-heart bg-red-500 p-2 rounded-md text-2xl gap-2"></i>
       <p class="flex items-center gap-2 text-2xl">{{ el.statistic }} 37 mln</p>

     </div>

     <p class="text-gray-400 text-2xl">{{ el.title }} Aholi soni</p>
   </div>
      <div class="w-px min-h-[70px] bg-gradient-to-b from-transparent via-white to-transparent"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  data: string[];
}>()
</script>
