<template>
  <nav class="hidden md:flex space-x-4 mt-1 mb-2 text-white font-bold text-sm">
  <router-link to="/about" class="text-white hover:text-gray-400">{{ $t('about') }}</router-link>
    <CDropdown :items="countryList" class="">
      <div></div>
     <template #trigger>
       <p class="text-white hover:text-gray-400">{{$t('countries')}}</p>
     </template>
      <template #item="{item}">
        <div class="w-[340px] flex h-3">
        <img :src="item.img" class=" w-7 h-7 object-cover rounded-md"/>
        <div class="ml-3 ">
<p class="font-bold text-[12px] text-white hover:text-red-600">{{item.title}}</p>
<p class="font-semibold text-[12px] text-gray-600">{{item.destinations}}</p>
        </div>
        </div>
      </template>
    </CDropdown>

  <router-link to="/map" class="text-white hover:text-gray-400">{{ $t('heritageMap') }}</router-link>
<CDropdown :items="listItem">
  <template #trigger>
  <p class="text-white hover:text-gray-400">{{$t('religions')}}</p>
  </template>
  <template #item ="{item}">
<div class="flex items-center w-40 h-6 -mb-3">
<img :src="item.img" class="w-10 h-10 rounded-lg"/>
  <div class="ml-2">
    <p class="font-bold text-white">{{item.title}}</p>
    <p class="text-semibold text-gray-600">{{item.destinations}}</p>
  </div>
</div>
  </template>
</CDropdown>
  <router-link to="/help" class="text-white hover:text-gray-400">{{ $t('help') }}</router-link>
  </nav>
  <router-link to="/Faq" class="hidden md:flex space-x-4 mt-1 mb-2 text-white hover:text-gray-400 font-thin text-[14px]">{{$t('FAQ')}}</router-link>
</template>
<script setup lang="ts">
import CDropdown from '@/Common/CDropdown.vue'
import {ref} from 'vue'
const listItem =ref([
  {
    img:'/src/assets/logos/religions.png',
    title:'Islam',
    destinations:'6 destinations'
  }
])
const countryList =ref([
  {
img:'/src/assets/logos/i (1).webp',
    title:'Uzbekistan',
    destinations:'175 destinations',
  },
  {
    img:'/src/assets/logos/SUx182_2x.webp',
    title:'Turkmenistan',
    destinations:'20 destinations',
  },
  {
    img:'/src/assets/logos/kazakhstan-logo.webp',
    title:'Kazakhstan',
    destinations:'51 destinations',
  },
  {
    img:'/src/assets/logos/Hungary.webp',
    title:'Hungary',
    destinations:'14 destinations',
  },
  {
    img:'/src/assets/logos/turkey.webp',
    title:'Turkey',
    destinations:'150 destinations',
  },
  {
    img:'/src/assets/logos/azerbaijan.webp',
    title:'Azerbaijan',
    destinations:'0 destinations',
  },
  {
    img:'/src/assets/logos/kyrgyzstan.webp',
    title:'Kyrgyzstan',
    destinations:'19 destinations',
  },
])
</script>