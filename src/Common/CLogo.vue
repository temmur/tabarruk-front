<template>
  <RouterLink to="/" class="flex items-center gap-2 ml-5">
    <img src="/src/assets/logos/tabarrukZiyoratLogo.jpg"  alt="Profile" class="w-12 h-12 rounded-full object-cover"/>
    <div  class="flex flex-col">
      <span class="mr-1 text-white font-semibold">The blessed pilgrimage</span>
      <span class="text-white text-[6px]">The tourism committee under Ministry of ecology, environmental</span>
      <span class="text-white text-[6px]"> protection and climate change of the Republic of Uzbekistan</span>
    </div>
  </RouterLink>
</template>

<script setup>
import{RouterLink} from 'vue-router'
</script>