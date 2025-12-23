<template>
  <DesktopHeader
      ref="header"
      class="fixed top-0 left-0 w-full z-50 transition-all duration-300 py-4"
      :class="[
  isScrolled ? 'bg-[#090B1E]/95  shadow-md' : '',
  hasBorder ? 'border-b border-gray-600 shadow-md' : 'border-transparent'
]"
  />

      <MobileHeader
         :isOpen ="isOpen"
         @toggle="isOpen = !isOpen"
         />

    <NavbarSkeleton v-if="loading"/>


</template>

<script setup>

import {ref, onMounted, onUnmounted} from 'vue'
import DesktopHeader from "@/Common/Header/DesktopHeader.vue";
import MobileHeader from "@/Common/Header/MobileHeader.vue";
import NavbarSkeleton from "@/Skeleton/NavbarSkeleton.vue";
const isOpen = ref(false)
const isScrolled = ref(false);
const hasBorder = ref(false)

const handleScroll = () =>{
  const y = window.scrollY
  isScrolled.value = y > 40
  hasBorder.value = y > 50
}

onUnmounted(() =>{
  window.removeEventListener('scroll', handleScroll)
})

const loading = ref(true)

onMounted(() =>{
  window.addEventListener('scroll',handleScroll)
  setTimeout(() =>{
    loading.value = false
  }, 1500)
})
</script>