<template>
  <div class="relative">
    <!-- search icon -->
    <button
        v-if="!focused"
        @click="focused = true"
        class="flex items-center justify-center w-10 h-10bg-gradient-to-b from-[#0a1128] to-[#0a1128/90] transition"
    >
      <img
          src="https://i.pinimg.com/originals/fe/e8/7d/fee87d01d52072f0589c4de685215fdb.png"
          class="w-12 h-12"
          alt="Search"
      />
    </button>

<!--Opened Overlay -->
    <div
        v-else
        class="fixed top-0 left-0 w-full h-19
         bg-gradient-to-b from-[#0a1128] to-[#0a1128/90]
         flex items-center px-4 z-[2000] transition-all duration-200"
    >
      <input
          v-model="query"
          type="text"
          :placeholder="$t('searchPlaceholder')"
          @focus="focused = true"
          @blur="onBlur"
          class="w-full px-4 py-2
           bg-white/10 text-white border border-white/20
           rounded-none focus:outline-none focus:ring-0"
      />

      <button
          @click="clearQuery"
          class="ml-3 text-white/70 hover:text-white text-xl"
      >
        ✖
      </button>
    </div>

    <div
        v-if="focused && query"
        class="absolute left-0 top-full mt-2 w-[80vw] bg-white border border-gray-200 rounded-xl shadow-lg z-[1000] max-h-72 overflow-y-auto"
    >
      <!-- Showing results -->
      <ul v-if="filteredSites.length > 0">
        <li
            v-for="site in filteredSites"
            :key="siteKey(site)"
            class="px-4 py-2 hover:bg-gray-100 cursor-pointer transition-colors"
        >
          <div class="font-medium" v-html="highlight(siteName(site))"></div>
          <div class="text-xs text-gray-500" v-html="highlight(siteDesc(site))"></div>
        </li>
      </ul>

      <!-- No result message -->
      <div v-else class="p-6 text-center">
        <h2 class="text-lg font-semibold text-gray-400">No Results Found</h2>
        <p class="text-sm text-gray-500 mt-1">
          Oops, we could not find any matching result for your search
        </p>
      </div>
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

// Localization helpers
const siteName = site => site[`name_${locale.value}`] || site.name_en
const siteDesc = site => site[`desc_${locale.value}`] || site.desc_en
const siteKey = site => `${siteName(site)}-${siteDesc(site)}`

// Filter sites
const filteredSites = computed(() => {
  if (!query.value) return []
  const q = query.value.toLowerCase()
  return historicalSites.filter(site => {
    const name = siteName(site).toLowerCase()
    const desc = siteDesc(site).toLowerCase()
    return name.includes(q) || desc.includes(q)
  })
})

//Highlight
function highlight(text) {
  if (!query.value) return text
  const regex = new RegExp(`(${query.value})`, 'gi')
  return text.replace(regex, '<span class="bg-yellow-300 text-black">$1</span>')
}

//close search
function clearQuery() {
  query.value = ''
  focused.value = false
}

// Blur delay for clicking dropdown items
function onBlur() {
  setTimeout(() => {
    if (!query.value) focused.value = false
  }, 200)
}
</script>
