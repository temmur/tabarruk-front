<template>
  <div class="w-full overflow-hidden cursor-pointer relative container ">
    <div class="flex justify-between">
      <div
          v-for="(card, index) in cards"
          :key="index"
          class=" relative bg-gray-800 border-gray-950/40 backdrop-blur-md rounded-lg p-4 flex items-center w-[300px] h-[100px] mr-4"
      >
        <!-- Text section -->
        <div class="flex-1 flex flex-col justify-center">
          <p class="text-[30px] text-white font-bold leading-tight">{{ card.title }}</p>
          <p class="text-[20px] text-gray-400 font-semibold mt-1 leading-tight">{{ card.subtitle }}</p>
        </div>

        <!-- Image section on the right -->
        <div class="flex-none w-20 h-20 ml-4 rounded-lg justify-between flex items-center  overflow-hidden">
          <img
              :src="card.image"
              :alt="card.title"
              class="max-w-full max-h-full object-contain"
          />
        </div>

      </div>
    </div>
  </div>

</template>

<script setup lang="ts">
import { ref } from 'vue';

const cards = ref([
  { id: 1, image: 'https://img.icons8.com/?size=100&id=122771&format=png&color=000000', title: '27', subtitle: 'Attractions' },
  {id:2, image:'https://img.icons8.com/?size=100&id=cK0Y3hnUbs6s&format=png&color=000000',title:'402', subtitle:'Destinations'},
  {id:3, image:'https://img.icons8.com/?size=100&id=iH8z1cTEh7Vy&format=png&color=000000',title:'7',subtitle:'Countries'}
]);
</script>


