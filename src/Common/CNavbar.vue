<template>
  <nav class="hidden md:flex space-x-4 mt-1 mb-2 text-gray-800 font-bold text-sm">
  <router-link to="/about">{{ $t('about') }}</router-link>
  <router-link to="/countries">{{ $t('countries') }}</router-link>
  <router-link to="/map">{{ $t('heritageMap') }}</router-link>
  <router-link to="/religions">{{ $t('religions') }}</router-link>
  <router-link to="/help">{{ $t('help') }}</router-link>
  <router-link to="/Faq">{{$t('FAQ')}}</router-link>
  </nav>
</template>
<script setup lang="ts">
</script>