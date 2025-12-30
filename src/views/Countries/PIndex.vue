<template>
<div>
  <div class="relative bg-[url('/images/New_uzbekistan.jpg')] bg-cover bg-center h-screen bg-no-repeat">
    <div class="absolute inset-0 bg-gray-900/70"></div>

      <img src="/images/Vector%20(6).svg" alt="bg-img"
           class="absolute"
      >
      <div class="relative z-10 text-white p-10 flex flex-col justify-center items-center h-full">
        <h1 class="xt-2xl md:text-8xl font-bold">Uzbeksitan</h1>

        <p class="text-xl mt-4 font-normal">Uzbekistan (officially: Republic of Uzbekistan) is a country located in the central part of Central Asia.</p>
        <CButtons variant="red" text="Watch video" button-class="mt-4 cursor-pointer">
          <template #suffix>
            <i class="icon-play-stroke"></i>
          </template>
        </CButtons>
        <div class="p-4 space-y-4">
          <input
              v-model="inputVal"
              type="text"
              placeholder="Search users..."
              class="border p-2 rounded w-full"
          />
          <div v-if="isLoading">
            <div class="space-y-4 animate-pulse">
              <div v-for="n in 4" :key="n" class="p-4 border rounded-md">
                <div class="h-4 bg-red-300 rounded w-1/3 mb-3"></div>
              </div>
            </div>
          </div>
          <div v-else-if="error">{{ error }}</div>
          <pre v-else>
            <div v-for="(el, idx) in filteredUsers"
              :key="idx"
                 class="flex items-center"
              >
            <p>  {{el.name}}</p>
            </div>
          </pre>
        </div>
      </div>
  </div>
</div>
</template>
<script setup lang="ts">
import CButtons from "@/components/CButtons.vue";
import {onMounted, ref, computed, watch} from "vue";

const inputVal = ref<String>('')
const users = ref([])
const debouncedSearch = ref('')
let debounceTimer = null
const isLoading = ref(false)
const error = ref(null)

watch(inputVal,(val)=> {
  clearTimeout(debounceTimer)
  debounceTimer = setTimeout(()=> {
    debouncedSearch.value = val.trim().toLowerCase()
  },300)
})
const fetchUsers = async(limit:number)=> {
  isLoading.value = true
  error.value = null

  try{
    const res = await fetch(`https://jsonplaceholder.typicode.com/users?_limit=${limit}`)
    if(!res.ok){
      throw new Error(`HTTP error: ${res.status}`)
    }

    const data = await res.json()
    users.value = Array.isArray(data) ? data : []
  }catch(err){
    error.value = err.message || 'Failed to Fetch users'
  }finally {
    isLoading.value = false
  }
}

const filteredUsers = computed(()=> {
  const query = debouncedSearch.value

if(!query) users.value

  return users.value.filter((user)=> {
    return user?.name?.toLowerCase().includes(query)
  })
})

onMounted(()=> {
  fetchUsers(5)
})
</script>
