<script setup>
import {computed, onMounted, ref} from 'vue'
import CBreadCrumb from '@/Common/CBreadCrumb.vue'
const api = 'https://jsonplaceholder.typicode.com'
const routes = computed(()=> [
  {
    label: "About",
    link: '/about'
  }
])
const userData = ref({
  title: '',
  body: ''
})
const posts = ref([])
const currentPage = ref(1)
const pageSize = 10
const totalItems = 100



const loadPosts = async ()=> {
  const start = (currentPage.value - 1) * pageSize
  const end = start + pageSize

  const res = await  fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await res.json()
  posts.value = data.slice(start, end)
}

const nextPage=()=> {
  if(currentPage.value < totalPage.value){
    currentPage.value++
    loadPosts()
  }
}
const prevPage=()=> {
  if(currentPage.value> 1){
    currentPage.value--
    loadPosts()
  }
}
const addUser = async () => {
 if(!userData.value.body.trim() && !userData.value.title.trim()){
   alert('Fill blanks')
   return
 }
   try {
     const res = await fetch(`${api}/posts`, {
       method: "POST",
       headers: {
         "Content-Type": "application/json"
       },
       body: JSON.stringify(userData.value)
     })
      if(!res.ok)  throw new Error(`Request failed: ${res.status}`)
     const data = await res.json()
     console.log("Created:", data)
     Object.assign(userData.value, {
       title: '',
       body: ''
     })

   } catch (err) {
     console.error(err)
   }

}
const totalPage = computed(()=> Math.ceil(totalItems / pageSize))

onMounted(()=> {
  loadPosts()
})
</script>

<template>
  <form @submit.prevent="addUser" class="mt-50">
    <input v-model="userData.title" placeholder="title" />
      <CBreadCrumb v-bind="{routes}"/>
    <textarea v-model="userData.body"></textarea>
    <button type="submit">Add user</button>
  </form>

  <div class="p-6">
    <h2 class="text-xl font-bold mb-4">Posts</h2>

    <!-- List -->
    <ul class="space-y-3">
      <li v-for="post in posts" :key="post.id" class="p-3 border rounded">
        {{ post.title }}
      </li>
    </ul>

    <!-- Pagination Controls -->
    <div class="flex gap-2 mt-6">
{{posts}}
      <button
          :disabled="currentPage === 1"
          @click="prevPage"
          class="px-4 py-2 border rounded disabled:opacity-40"
      >
        Prev
      </button>

      <span class="px-4 py-2 border rounded">
        Page {{ currentPage }} / {{ totalPages }}
      </span>

      <button
          :disabled="currentPage === totalPages"
          @click="nextPage"
          class="px-4 py-2 border rounded disabled:opacity-40"
      >
        Next
      </button>

    </div>
  </div>
</template>
