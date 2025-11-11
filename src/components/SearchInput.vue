<template>
  <div class="relative w-full max-w-md">
    <!-- 🔍 Collapsed lupa button -->
    <button
        v-if="!focused && !query"
        @click="focused = true"
        class="flex items-center justify-center w-11 h-11 rounded-full bg-gray-100 shadow hover:bg-gray-200 transition"
    >
      🔍
    </button>

    <!-- 📝 Expanded search input -->
    <div v-else class="relative flex items-center w-full">
      <input
          type="text"
          v-model="query"
          :placeholder="$t('searchPlaceholder')"
          @focus="focused = true"
          @blur="onBlur"
          class="w-full rounded-full border border-gray-300 bg-gray-50 pl-10 pr-10 py-3 text-sm focus:outline-none focus:ring-0 focus:shadow-md transition-all duration-200"
      />

      <!-- 🔍 icon (inside input) -->
      <span class="absolute left-3 text-gray-400 text-lg pointer-events-none">🔍</span>

      <!-- ❌ Clear button -->
      <button
          v-if="query"
          @click="clearQuery"
          class="absolute right-3 text-gray-400 hover:text-gray-600 text-lg"
      >
        ✖
      </button>
    </div>

    <!-- 🔽 Dropdown results -->
    <div
        v-if="focused && query"
        class="absolute left-0 mt-2 w-full bg-white border border-gray-200 rounded-xl shadow-lg z-50 max-h-72 overflow-y-auto"
    >
      <ul>
        <li
            v-for="site in filteredSites"
            :key="siteKey(site)"
            class="px-4 py-2 hover:bg-gray-100 cursor-pointer transition-colors"
        >
          <div class="font-medium" v-html="highlight(siteName(site))"></div>
          <div class="text-xs text-gray-500" v-html="highlight(siteDesc(site))"></div>

        </li>

        <!-- No results message -->
        <li
            v-if="filteredSites.length === 0"
            class="px-4 py-2 text-center text-gray-400"
        >
          {{ $t('Could not define your destination. Please, try again') }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { historicalSites } from '@/data/sites.js'

const { locale } = useI18n()
const query = ref('')
const focused = ref(false)

// 🧹 Clear query and hide input
function clearQuery() {
  query.value = ''
  focused.value = false
}

// ⏳ Delay hiding when blurred
function onBlur() {
  setTimeout(() => {
    if (!query.value) focused.value = false
  }, 150)
}

// 🌍 Helpers for localization
const siteName = site => site[`name_${locale.value}`] || site.name_en
const siteDesc = site => site[`desc_${locale.value}`] || site.desc_en
const siteKey = site => `${siteName(site)}-${siteDesc(site)}`

// 🔍 Filter based on locale
const filteredSites = computed(() => {
  if (!query.value) return []

  const q = query.value.toLowerCase()
  return historicalSites.filter(site => {
    const name = siteName(site).toLowerCase()
    const desc = siteDesc(site).toLowerCase()
    return name.includes(q) || desc.includes(q)
  })
})


// ✨ Highlight matched text
function highlight(text) {
  if (!query.value) return text
  const regex = new RegExp(`(${query.value})`, 'gi')
  return text.replace(regex, '<span class="bg-yellow-300 text-black">$1</span>')
}

</script>

<style scoped>
/* Optional: subtle scrollbar for dropdown */
::-webkit-scrollbar {
  width: 6px;
}
::-webkit-scrollbar-thumb {
  background: #d1d5db;
  border-radius: 3px;
}
::-webkit-scrollbar-thumb:hover {
  background: #9ca3af;
}
</style>
