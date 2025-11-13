<template>
  <div class="relative">
    <!-- Current language flag -->
    <button
        @click="dropdownOpen = !dropdownOpen"
        class="flex items-center gap-1 focus:outline-none"
    >
      <img :src="currentFlag" alt="flag" class="w-5 h-5 rounded-full" />
      <span class="text-sm font-medium">{{ currentLabel }}</span>
    </button>

    <!-- Dropdown list -->
    <ul
        v-if="dropdownOpen"
        class="absolute right-0 mt-2 bg-white border rounded-md shadow-md w-32 z-50"
    >
      <li v-for="lang in languages" :key="lang.code">
        <button
            @click="setLanguage(lang.code)"
            class="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 w-full text-left"
        >
          <img :src="lang.flag" class="w-4 h-4 rounded-full" />
          <span class="text-sm">{{ lang.label }}</span>
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

// Update flag + label whenever locale changes
watch(
    () => locale.value,
    (newLocale) => {
      const lang = languages.find((l) => l.code === newLocale)
      if (lang) {
        currentFlag.value = lang.flag
        currentLabel.value = lang.label
      }
    },
    { immediate: true }
)

function setLanguage(code) {
  locale.value = code
  dropdownOpen.value = false
}
</script>
