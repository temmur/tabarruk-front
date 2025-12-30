<template>
  <header class="hidden md:block w-full"
  :class="[isScrolled ? 'bg-[#090B1E]/95 shadow-md':'', hasBorder ? ' border-b border-gray-600 shadow-md':'border-transparent']"
  >
  <div class="container mx-auto flex items-center justify-between p-4">
    <CLogo/>

    <div class="flex flex-row items-center gap-5 text-white">
      <CNavbar />
      <span class="border-l h-8"></span>
      <CLanguageSwitcher class="cursor-pointer"/>
      <span class="border-l h-8"></span>
      <CSearchInput/>
    </div>
  </div>
  </header>
</template>
<script setup lang="ts">
import CLogo from "@/Common/CLogo.vue";
import CLanguageSwitcher from "@/Common/CLanguageSwitcher.vue";
import CSearchInput from "@/Common/CSearchInput.vue";
import CNavbar from "@/Common/CNavbar.vue"
defineProps({
  isScrolled: Boolean,
  hasBorder: Boolean
})
</script>