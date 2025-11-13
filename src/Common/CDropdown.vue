<template>
  <div class="relative" @click.outside="closeDropdown">
    <button @click="toggleDropdown">
      <slot name="button"></slot>
    </button>
    <div v-if="isOpen" class="absolute mt-2 bg-white border rounded shadow-md z-50">
      <slot name="content"></slot>
    </div>
  </div>

</template>

<script setup>
import { ref } from 'vue';

const isOpen = ref(false);

function toggleDropdown() {
  isOpen.value = !isOpen.value;
}

function closeDropdown() {
  isOpen.value = false;
}
</script>
