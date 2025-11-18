<template>
  <nav class="hidden md:flex space-x-4 mt-1 mb-2 text-white font-bold text-sm">
  <router-link to="/about" class="text-white hover:text-gray-400">{{ $t('about') }}</router-link>
  <router-link to="/countries" class="text-white hover:text-gray-400">{{ $t('countries') }}</router-link>
  <router-link to="/map" class="text-white hover:text-gray-400">{{ $t('heritageMap') }}</router-link>
  <router-link to="/religions" class="text-white hover:text-gray-400">{{ $t('religions') }}</router-link>
  <router-link to="/help" class="text-white hover:text-gray-400">{{ $t('help') }}</router-link>
  </nav>
  <router-link to="/Faq" class="hidden md:flex space-x-4 mt-1 mb-2 text-white hover:text-gray-400 font-thin text-[14px]">{{$t('FAQ')}}</router-link>
</template>
<script setup lang="ts">
</script>