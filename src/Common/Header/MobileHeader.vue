<!--<template>-->
<!--    <header class="md:hidden top-0 w-full z-50 bg-[#090B1E]"-->
<!--    >-->
<!--      <div class="container mx-auto flex items-center justify-between p-4">-->
<!--        <CLogo/>-->
<!--        <FontAwesomeIcon-->
<!--            :icon="isOpen ? ['fas','xmark'] : ['fas','bars']"-->
<!--            class="text-white w-10 h-10 cursor-pointer"-->
<!--            @click="$emit('toggle')"-->
<!--        />-->
<!--      </div>-->
<!--        &lt;!&ndash; Navbar links &ndash;&gt;-->

<!--      <div-->
<!--          v-if="isOpen"-->
<!--          class="absolute top-full left-0 w-full flex flex-col gap-6 px-6 py-6 z-50 text-white items-center bg-[#090B1E]">-->
<!--        <CSearchInput/>-->
<!--        <CNavbar  class='flex flex-col gap-4 items-center text-2xl'-->
<!--        />-->
<!--        <CLanguageSwitcher/>-->

<!--        <img src="@/assets/logos/UIC-logo.svg"-->
<!--             class="w-12 h-12"/>-->

<!--      </div>-->
<!--    </header>-->
<!--</template>-->
<!--<script setup lang="ts">-->

<!--import CLanguageSwitcher from "@/Common/CLanguageSwitcher.vue";-->
<!--import CSearchInput from "@/Common/CSearchInput.vue";-->
<!--import CNavbar from "@/Common/CNavbar.vue";-->
<!--import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'-->
<!--import CLogo from "@/Common/CLogo.vue";-->
<!--defineProps({-->
<!--  isOpen: Boolean-->
<!--})-->

<!--defineEmits(['toggle'])-->
<!--</script>-->

<template>
  <header class="md:hidden fixed top-0 left-0 w-full z-50 bg-[#090B1E]">
    <!-- Top bar -->
    <div class=" mx-auto flex items-center justify-between p-4">
      <CLogo />
      <FontAwesomeIcon
          :icon="isOpen ? ['fas','xmark'] : ['fas','bars']"
          class="text-white w-10 h-10 cursor-pointer"
          @click="$emit('toggle')"
      />
    </div>

    <!-- Dropdown menu -->
    <div
        v-if="isOpen"
        class="absolute top-full left-0 w-full flex flex-col gap-6 px-6 py-6 text-white items-center bg-[#090B1E]"
    >
      <MobileSearchInput/>
      <CNavbar />
      <CLanguageSwitcher class="mr-55"/>
      <div class="flex flex-col-2 space-x-13 mt-5">
        <p class="text-[15px] -mb-5">@ 2025, Tabarruk Ziyorat</p>
      <img src="@/assets/logos/UIC-logo.svg" class="w-12 h-12" />
    </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import CLogo from "@/Common/CLogo.vue";
import CNavbar from "@/Common/CNavbar.vue";
import CLanguageSwitcher from "@/Common/CLanguageSwitcher.vue";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import MobileSearchInput from "@/Common/Header/MobileSearchInput.vue";

defineProps({
  isOpen: Boolean
})
defineEmits(['toggle'])
</script>
