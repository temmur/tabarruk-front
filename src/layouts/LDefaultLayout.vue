<template>
  <div class="min-h-screen flex flex-col">
    <CHeader/>
    <main class="flex-1 grow-1">
      <router-view />
    </main>
    <CFooter />
  </div>
</template>

<script setup>
import CHeader from '@/Common/Header/CHeader.vue'
import CFooter from '@/Common/CFooter.vue'
</script>
