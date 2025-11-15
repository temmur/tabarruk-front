<template>
  <nav class="hidden md:flex space-x-4 mt-1 mb-2 text-white font-bold text-sm">
  <router-link to="/about">{{ $t('about') }}</router-link>
  <router-link to="/countries">{{ $t('countries') }}</router-link>
  <router-link to="/map">{{ $t('heritageMap') }}</router-link>
  <router-link to="/religions">{{ $t('religions') }}</router-link>
  <router-link to="/help">{{ $t('help') }}</router-link>
  </nav>
  <router-link to="/Faq" class="hidden md:flex space-x-4 mt-1 mb-2 text-white font-thin text-[14px]">{{$t('FAQ')}}</router-link>
</template>
<script setup lang="ts">
</script>