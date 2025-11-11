<template>
  <div class="min-h-screen flex flex-col">
    <CHeader/>
    <main class="flex-1 p-6 bg-gray-100">

      <router-view />
    </main>
    <CFooter />
  </div>
</template>

<script setup>
import CHeader from '@/Common/CHeader.vue'
import CFooter from '@/Common/CFooter.vue'
</script>
