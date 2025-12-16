<template>
<div class="relative inline-block"
@click = "open = !open"
>
  <div class="cursor-pointer inline-flex items-center">
    <slot name="trigger"></slot>
  </div>
<div
    v-if="open"
    class="absolute -left-30 top-8! bg-gray-800/40 backdrop-blur-5xl shadow-md rounded-lg "
>
  <div class="flex flex-wrap mb-3 ">
  <div
      v-for="(item,i) in items"
      :key="i"
      class="p-5 w-1/2"
  >
    <slot name="item" :item="item"></slot>
  </div>
</div>
</div>
</div>
</template>

<script setup>
import {ref} from 'vue'
defineProps({
  items:{
    type: Array,
    default :() =>[]
  }
});

const open = ref(false)
</script>