<template>
  <header
      ref="header"
      class="fixed top-0 left-0 w-full z-50 transition-all duration-300 border"
      :class="[
  isScrolled ? 'bg-indigo-200 backdrop-blur-md shadow-md' : '',
  hasBorder ? 'border-b border-gray-600 shadow-md' : 'border-transparent'
]"
  >
    <div class="container mx-auto flex items-center justify-between p-4">
      <!-- Logo -->
      <CLogo />

      <!-- Right side -->
      <div class="hidden md:flex items-center gap-5 text-gray-800 relative">

        <!-- Navbar links -->
        <CNavbar />

        <!-- Divider -->
        <span class="border-l border-gray-300 h-8"></span>
<CLanguageSwitcher/>
        <span class="border-l border-gray-300 h-8"></span>

        <!-- Search input -->
        <CSearchInput class=""/>

      </div>

    </div>

    <NavbarSkeleton v-if="loading"/>

  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import CLogo from "@/Common/CLogo.vue";
import CNavbar from "@/Common/CNavbar.vue";
import CSearchInput from "@/Common/CSearchInput.vue";
import CLanguageSwitcher from "@/Common/CLanguageSwitcher.vue";
import NavbarSkeleton from "@/Skeleton/NavbarSkeleton.vue";
// Language data
import { langOptions } from '@/langs.js';

const toggle = ref(false)

const isScrolled = ref(false);
const handleScroll = () => (isScrolled.value = window.scrollY > 50);
onMounted(() => window.addEventListener('scroll', handleScroll));
onUnmounted(() => window.removeEventListener('scroll', handleScroll));

// i18n
const { locale } = useI18n();

// Dropdown logic for languages
const languages = langOptions;
const currentFlag = ref(languages.find(l => l.code === locale.value).flag);

function setLanguage(code) {
  locale.value = code;
  currentFlag.value = languages.find(l => l.code === code).flag;
}

const scrollY =ref(0)
const hasBorder = ref(false)

onMounted('scroll',()=>{
  scrollY.value = window.scrollY
})

onUnmounted(()=>{
  window.removeEventListener('scroll', ()=>{
    scrollY.value = window.scrollY
  })

  watch(scrollY,(newY) =>{
    console.log('Scroll position:', newY)
    hasBorder.value = newY > 50
  })


})

const loading = ref(false)

onMounted(() =>{
  setTimeout(() =>{
    loading.value = false
  }, 1500)
})
</script>
