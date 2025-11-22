<template>
  <div class="relative">
    <!-- search icon -->
    <button

        @click="toggleFunc"
        class="flex items-center justify-center h-10 transition cursor-pointer"
    >
      <i class="fa-solid fa-magnifying-glass text-white text-lg hover:text-gray-400"
      :class="focused ? 'fa-close' : 'fa-solid'"
      ></i>
    </button>

<!--Opened Overlay -->
    <div v-if="focused"
        class="absolute top-0 right-0 w-[650px]
           z-[2000] transition-all duration-200 mr-9"
    >
      <input
          v-model="query"
          type="text"
          :placeholder="$t('searchPlaceholder')"
          @focus="focused = true"
          @blur="onBlur"
          class="w-full px-4 py-2
           bg-white/10 text-white border border-white
           rounded-lg focus:outline-none focus:ring-0 "
      />
      <div
          v-if="focused && query"
          class="absolute right-0 top-full mt-2 w-full bg-white border border-gray-200 rounded-xl shadow-lg z-[1000] max-h-72 overflow-y-auto"
      >
        <!-- Showing results -->
        <ul v-if="filteredSites.length > 0"
        class="overflow-scroll"
        >
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

    <!-- Dropdown -->

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

const toggleFunc=()=>{
  focused.value = !focused.value
  if(focused.value){
    query.value = ''
  }
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
