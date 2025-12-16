<template>
  <div class="relative ">
    <!--language flag -->
    <button
        @click="dropdownOpen = !dropdownOpen"
        class="flex items-center gap-1 focus:outline-none"
    >
      <img :src="currentFlag" alt="flag" class="w-9 h-9 rounded-full cursor-pointer" />

    </button>

    <!-- Dropdown list -->
    <ul
        v-if="dropdownOpen"
        class="absolute right-0  bg-gray-900/40 backdrop-blur-5xl shadow-md p-3 rounded-md w-95 h-40 grid grid-cols-3"
    >
      <li v-for="lang in languages" :key="lang.code">
        <button
            @click="setLanguage(lang.code)"
            class=" items-center px-3 py-2 ml-3 flex gap-1 hover:bg-gray-700 rounded transition-colors cursor-pointer w-full text-left  -translate-x-2"
        >
          <img :src="lang.flag" class="w-5 h-5 rounded-full" alt="langauges-flag"/>
          <span class="text-sm text-white">{{ lang.name }}</span>
        </button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { langOptions } from '@/langs.js'

const { locale } = useI18n()
const dropdownOpen = ref(false)

const languages = langOptions
const currentFlag = ref('')
const currentLabel = ref('')

// Update flag
watch(
    () => locale.value,
    (newLocale) => {
      const lang = languages.find((l) => l.code === newLocale)
      if (lang) {
        currentFlag.value = lang.flag
        currentLabel.value = lang.name
      }
    },
    { immediate: true }
)

function setLanguage(code) {
  locale.value = code
  dropdownOpen.value = false
}
</script>
