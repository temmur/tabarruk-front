<template>
  <div class="relative">
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
        class="absolute right-0 mt-2 bg-[#132153] border rounded-md shadow-md w-32 z-50"
    >
      <li v-for="lang in languages" :key="lang.code">
        <button
            @click="setLanguage(lang.code)"
            class="flex items-center gap-2 px-3 py-2 hover:bg-[#101B45] rounded transition-colors cursor-pointer w-full text-left"
        >
          <img :src="lang.flag" class="w-4 h-4 rounded-full" />
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
