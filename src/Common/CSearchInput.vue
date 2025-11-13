<template>
  <div class="relative">
    <!-- 🔍 Collapsed search icon -->
    <button
        v-if="!focused"
        @click="focused = true"
        class="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 transition"
    >
      <img
          src="https://i.pinimg.com/originals/fe/e8/7d/fee87d01d52072f0589c4de685215fdb.png"
          class="w-15 h-10 cursor-pointer"
          alt="Search"
      />
    </button>

    <!-- 📝 Expanded overlay search bar -->
    <div
        v-else
        class="absolute top-0 right-0 w-[210px] h-full bg-white flex items-center px-4 z-50 shadow-lg transition-all duration-200"
    >
      <input
          v-model="query"
          type="text"
          :placeholder="$t('searchPlaceholder')"
          @focus="focused = true"
          @blur="onBlur"
          class="w-full border border-gray-300 rounded-full py-2 px-4 focus:outline-none focus:ring-0 text-gray-700"
      />

      <!-- ✖ Close button -->
      <button
          @click="clearQuery"
          class="ml-2 text-gray-400 hover:text-gray-600 text-xl"
      >
        ✖
      </button>
    </div>

    <!-- 🔽 Dropdown results -->
    <div
        v-if="focused && query && filteredSites.length > 0"
        class="absolute left-0 top-full mt-2 w-[80vw] bg-white border border-gray-200 rounded-xl shadow-lg z-[1000] overflow-y-auto max-h-72"
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

// 🌍 Localization helpers
const siteName = site => site[`name_${locale.value}`] || site.name_en
const siteDesc = site => site[`desc_${locale.value}`] || site.desc_en
const siteKey = site => `${siteName(site)}-${siteDesc(site)}`

// 🔍 Filter sites
const filteredSites = computed(() => {
  if (!query.value) return []
  const q = query.value.toLowerCase()
  return historicalSites.filter(site => {
    const name = siteName(site).toLowerCase()
    const desc = siteDesc(site).toLowerCase()
    return name.includes(q) || desc.includes(q)
  })
})

// ✨ Highlight matches
function highlight(text) {
  if (!query.value) return text
  const regex = new RegExp(`(${query.value})`, 'gi')
  return text.replace(regex, '<span class="bg-yellow-300 text-black">$1</span>')
}

// 🧹 Clear & close search
function clearQuery() {
  query.value = ''
  focused.value = false
}

// ⏳ Blur delay to allow clicking dropdown items
function onBlur() {
  setTimeout(() => {
    if (!query.value) focused.value = false
  }, 200)
}
</script>
