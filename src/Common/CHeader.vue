<template>
  <header
      ref="header"
      class="fixed top-0 left-0 w-full z-50 transition-all duration-500 bg-white shadow-sm"
      :class="{ 'bg-[#001f3f]/60 backdrop-blur-md shadow-md': isScrolled }"
  >
    <div class="container mx-auto flex items-center justify-between p-4">

      <!-- Logo -->
      <CLogo />

      <!-- Right side -->
      <div class="hidden md:flex items-center gap-2 text-gray-800 relative">

        <!-- Navbar links -->
        <CNavbar />

        <!-- Divider -->
        <span class="border-l border-gray-300 h-6"></span>
<CLanguageSwitcher/>
        <span class="border-l border-gray-300 h-6"></span>

        <!-- Search input -->
        <CSearchInput class="w-48"/>
        
      </div>

    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useI18n } from 'vue-i18n';
import CLogo from "@/Common/CLogo.vue";
import CNavbar from "@/Common/CNavbar.vue";
import CSearchInput from "@/Common/CSearchInput.vue";
import CDropdown from "@/Common/CDropdown.vue";  // ✅ import dropdown
import CLanguageSwitcher from "@/Common/CLanguageSwitcher.vue";
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
</script>
