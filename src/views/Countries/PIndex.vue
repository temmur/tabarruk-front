<template>
<div class="text-sm sm:text-base lg:text-xl p-2 sm:p-6sw ">
  <div  :style="{ backgroundImage: bgImage ? `url(${bgImage})` : '' }" class="relative  bg-cover bg-center h-screen bg-no-repeat ">
    <div class="absolute inset-0 bg-gray-900/70"></div>
      <img src="/images/Vector%20(6).svg" alt=""
           class="absolute"
      >
      <div class="relative z-10 text-white p-10 flex flex-col justify-center items-center h-full">
        <h1 class="text-8xl font-bold max-md:text-4xl max-sm:text-xl">{{countryData.title}}</h1>

        <p class="text-xl mt-4 font-normal">Uzbekistan (officially: Republic of Uzbekistan) is a country located in the central part of Central Asia.</p>
        <CButtons variant="red" text="Watch video" button-class="mt-4 cursor-pointer" class="bg-red-500 m-10 p-1.5">
        <template #suffix>
          <i class="icon-play-stroke"></i>
        </template>
      </CButtons>

      </div>
  </div>
<div class="flex items-center justify-center gap-4 relative -top-10 max-lg:block ">
  <CCountryStatistics class="max-md:text-4xl max-sm:text-xl max-sm:m-auto max-sm:mb-2  " />
  <div class="flex items-center ">
    <CCountryCardGroup :data="countryCtatistic"/>
</div>

  </div>

</div>

</template>
<script setup lang="ts">
import CButtons from "@/components/CButtons.vue";
import CCountryStatisticCard from "@/components/CCountryStatisticCard.vue";
import CCountryStatistics from "@/components/Country/CCountryStatistics.vue";
import CCountryCardGroup from "@/components/CCountryCardGroup.vue";
import {countries} from '@/data/DCountriesData';
import CAtraccions from "@/components/CAtraccions.vue";
import {onMounted, ref, computed, watch} from "vue";
import {useRoute} from "vue-router";
const route = useRoute();
const countryData = ref<Country | null>(null);
const bgImage = ref<string>('');
interface Country {
  id: number
  name: string
  // kerakli fieldlarni qo‘shing
}

const countryCtatistic = ref([
  {
icon: 'icon-mosque',
    statistic:'',
    title: ''
  },
])
watch(
    () => route.params.id,
    (id) => {
      const found = countries.find(
          (country: Country) => country.id === Number(id)
      );
      if (found) {
        countryData.value = found;
        bgImage.value = found.image; // set background image
      } else {
        countryData.value = null;
        bgImage.value = '';
      }
    },
    { immediate: true }
);



</script>


