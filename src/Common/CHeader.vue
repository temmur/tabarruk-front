<template>
  <header class="bg-white shadow-md">
    <div class="mx-auto flex items-center gap-2 p-4 container">

      <div class="flex items-center gap-2">
        <img src="https://cdn4.telesco.pe/file/M_uRewKPRJEAw0eFEO8iVpUDD-HL3cUTLsTTbeMFlDSu43J4iCRHJj9ujX9pHrz6igWYEB4geOG0C4V8dHRl5R11edebyj97qmZ9FHxRGJHS0y4EO-x7-Dr7hePvkOCj_YHLlUEWPnpxln-W1dWmhKkbNPHH8QWXLXLAAx6tq4F2PXzsgLx85YAfrP-aGdVZu33dkJ5UpHY1JvVZPpamYUUo98kYNCVLxs6XaOSnU1wmoH2JWMXqcD56Y84t0i_7Y-LDqQ19cFfQ4qZ33w8wjOOQeR0m_Hz64YFS6fQS7noK_6m293ranb4US5U5kKP4mMcsegPSmttQvhKYAFBlNw.jpg"  alt="Profile" class="w-15 h-14 rounded-full "/>
      </div>
      <div class="flex flex-col">
        <!-- First line -->
        <span class="text-gray-800 dark:text-white font-medium">{{ $t('logoTitle') }}</span>

        <!-- Split description into two lines -->
        <div class="flex flex-wrap max-w-[500px] text-gray-600 dark:text-white text-[10px] leading-snug">
          <span class="mr-1 text-gray-400 font-sm">{{$t('logotext')}}</span>
          <span class="text-gray-400 font-sm">{{$t('logosubtitle')}}</span>
        </div>
      </div>
      <nav class="hidden md:flex space-x-4 mt-1 mb-2 text-gray-800 font-bold text-sm hover:text-black">

        <router-link to="/about">{{ $t('about') }}</router-link>
        <router-link to="/countries">{{ $t('countries') }}</router-link>
        <router-link to="/map">{{ $t('heritageMap') }}</router-link>
        <router-link to="/religions">{{ $t('religions') }}</router-link>
        <router-link to="/help">{{ $t('help') }}</router-link>
        <router-link to="/Faq">{{$t('FAQ')}}</router-link>
      </nav>

      <div class="flex items-center gap-3">
        <!-- Language flag -->
        <div class="relative">
          <button @click="open = !open" class="p-0 rounded-full focus:outline-none">
            <img :src="currentLang.flag" class="w-8 h-8 rounded-full object-cover" />
          </button>

          <!-- Dropdown -->
          <div v-if="open" class="absolute right-0 mt-2 w-36 bg-white border rounded shadow-lg z-50">
            <ul>
              <li
                  v-for="lang in languages"
                  :key="lang.code"
                  @click="changeLanguage(lang.code)"
                  class="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 cursor-pointer"
              >
                <img :src="lang.flag" class="w-6 h-6 rounded-full object-cover" />
                <span class="text-sm">{{ lang.name }}</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- Vertical separator -->
        <span class="border-l border-gray-300 h-6"></span>

        <!-- Search input -->
        <div class="flex items-center gap-4">
          <SearchInput />
        </div>
      </div>

    </div>
  </header>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { languages } from '@/langs.js'
import { historicalSites } from '@/data/sites.js'
import SearchInput from '@/components/SearchInput.vue'

const query = ref('')

const filteredSites = computed(() =>
    historicalSites.filter(site =>
        site.name.toLowerCase().includes(query.value.toLowerCase()) ||
        site.desc.toLowerCase().includes(query.value.toLowerCase())
    )
)
const { locale } = useI18n()
const open = ref(false)


const currentLang = computed(() =>
    languages.find(l => l.code === locale.value) || languages[0]
)

function changeLanguage(code) {
  locale.value = code
  localStorage.setItem('lang', code)
  open.value = false
}
</script>