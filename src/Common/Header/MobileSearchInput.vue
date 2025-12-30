<template>
  <div class="w-full md:w-[650px] px-2 md:px-0 relative">
    <input
        v-model="query"
        type="text"
        :placeholder="$t('searchPlaceholder')"
        class="w-full px-4 py-2 bg-white/10 text-white border border-white rounded-lg focus:outline-none focus:ring-0 backdrop-blur-2xl"
    />

    <div v-if="query" class="mt-2 w-full max-h-72 overflow-y-auto bg-white border border-gray-200 rounded-xl shadow-lg z-50">
      <ul>
        <li
            v-for="site in filteredSites"
            :key="siteKey(site)"
            class="px-4 py-2 hover:bg-gray-100 cursor-pointer"
        >
          <div class="font-medium" v-html="highlight(siteName(site))"></div>
          <div class="text-xs text-gray-500" v-html="highlight(siteDesc(site))"></div>
        </li>
      </ul>

      <div v-if="filteredSites.length === 0" class="p-6 text-center text-gray-500">
        No Results Found
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

// Helpers
const siteName = site => site[`name_${locale.value}`] || site.name_en
const siteDesc = site => site[`desc_${locale.value}`] || site.desc_en
const siteKey = site => `${siteName(site)}-${siteDesc(site)}`

const filteredSites = computed(() => {
  if (!query.value) return []
  const q = query.value.toLowerCase()
  return historicalSites.filter(site => {
    const name = siteName(site).toLowerCase()
    const desc = siteDesc(site).toLowerCase()
    return name.includes(q) || desc.includes(q)
  })
})

function highlight(text) {
  if (!query.value) return text
  const regex = new RegExp(`(${query.value})`, 'gi')
  return text.replace(regex, '<span class="bg-yellow-300 text-black">$1</span>')
}

</script>