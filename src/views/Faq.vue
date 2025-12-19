<template>
  <h3 class="text-white text-md cursor-pointer mt-30">
    <FontAwesomeIcon :icon="['fas', 'house']"
                     class="w-4 h-4 ml-40 hover:text-red-600"
    />
    Main
    <span class="text-md text-gray-600"> > FAQ
      </span>
  </h3>
  <p class="text-3xl mt-5 ml-20 font-serif">Frequently given questions</p>

  <div class="ml-10 grid grid-cols-2 gap-10 mt-10">
<!--    1st column-->
    <div>
    <div v-for="(item, idx) in leftColumn"
         :key="idx"
        class="bg-gray-700/40 backdrop-blur-xl mt-3 shadow-5xl hover:text-red-600 w-[500px] rounded-xl overflow-hidden transition duration-300 p-4 cursor-pointer"
         @click="faqList[idx].open = !faqList[idx].open">

  <div class="flex justify-between items-center">

    <div class="flex items-center gap-2">
<FontAwesomeIcon :icon="['fas','flag']"
class="!w-7 !h-7 ml-5 text-red-500"
/>
    <span class="text-white text-lg font-medium">{{ item.question}}</span>
  </div>
    <FontAwesomeIcon
        :icon="['fas','chevron-down']"
        :class="item.open ? 'rotate-180 transition-transform duration-300' : 'rotate-0 transition-transform duration-300'"
        class="text-red-700 text-xl ml-4"
    />
  </div>
      <div v-if="item.open" class="mt-3 text-sm text-gray-400">
        {{ item.answer }}
      </div>
  </div>
    </div>
<!--      2nd column-->
      <div>
      <div v-for="(item,idx) in rightColumn"
      :key="idx"
           class="bg-gray-700/40 backdrop-blur-xl shadow-5xl hover:text-red-600
               w-[500px] rounded-xl overflow-hidden transition duration-300
               p-4 cursor-pointer mb-6"
           @click="item.open = !item.open">
<div class="flex justify-between items-center">
<div class="flex items-center gap-2">
  <FontAwesomeIcon :icon="['fas','flag']"
                   class="!w-7 !h-7 ml-5 text-red-500" />
  <span class="text-white text-lg font-medium">{{ item.question }}</span>
</div>
  <FontAwesomeIcon
      :icon="['fas','chevron-down']"
      :class="item.open ? 'rotate-180' : 'rotate-0'"
      class="text-red-700 text-xl ml-4 transition-transform duration-300"
  />
</div>

    <div v-if="item.open" class="mt-3 text-sm text-gray-400 duration-300">
      {{ item.answer }}
    </div>
  </div>
</div>

    </div>
</template>

<script setup lang="ts">
import {ref,computed} from 'vue'
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
library.add(faHouse)


const faqList =ref([
  {
    question:'What is the goal of "Tabarruk Ziyorat" platform?',
    answer:'By introducing this platform, it is aimed to increase the number of tourists on mutual pilgrimage tourism by posting information about pilgrimage sites belonging to Turkish countries.',
    open:false,
  },
  {
    question:'When was "Tabarruk Ziyorat platform" developed',
    answer:'The tourism committee involved experts in the field and launched the "Tabarruk ziyorat" tourism platform for members of the Organization of Turkic States in 2023 (www.tabarrukziyorat.uz).',
    open:false,
  },
  {
    question:'How many countries in Organization of Turkic States',
    answer:'In Organization of Turkic states 7 countries: Uzbekistan, Kazakhstan, Kirgizstan, Turkey, Azerbaijan, Turkmenistan',
    open:false,
  },
])

const leftColumn = computed(() => faqList.value.slice(0,2))
const rightColumn = computed(() =>faqList.value.slice(2))
</script>