<!--<template>-->
<!--  <section class="w-full py-12  flex flex-col items-center">-->


<!--    &lt;!&ndash; Title &ndash;&gt;-->
<!--    <h2 class="text-4xl text-white font-semibold text-center mb-2 font-serif  underline underline-offset-[13px] decoration-red-500 decoration-2 capitalize">how many countries?</h2>-->
<!--    &lt;!&ndash; Subtitle &ndash;&gt;-->
<!--    <p class="text-center text-white mb-8">All countries that we represent</p>-->

<!--    &lt;!&ndash; Countries grid &ndash;&gt;-->
<!--    <div class="container flex flex-wrap justify-center gap-4 text-center">-->
<!--      <div-->
<!--          v-for="(country, index) in props.countries"-->
<!--          :key="index"-->
<!--          class="relative mt-10 z-10 w-[164px] sm:w-[280px] grid items-center px-2 py-6 rounded-lg opacity-90 cursor-pointer-->
<!--         hover:brightness-140 hover:bg-[#111325]/40 hover:bg-opacity-[0]-->
<!--         transition-all duration-300-->

<!--         before:content-[''] before:absolute before:left-1/2 before:-translate-x-1/2-->
<!--          before:bottom-0 before:h-[2px] before:bg-gray-400 before:w-7 hover:before:w-75 overflow-hidden-->
<!-- before:transition-all before:duration-300"-->

<!--      >-->
<!--       <img-->
<!--            :src="country.image"-->
<!--            :alt="country.name"-->
<!--            class="w-24 h-24 rounded-full  backdrop-blur-md border-gray-600 border-4 object-cover mb-2 flex mx-auto"-->
<!--        />-->
<!--        <span class="text-lg font-medium text-white">{{ country.name }}</span>-->
<!--        <span class="text-[14px] font-medium text-gray-500">{{country.desc}}</span>-->
<!--      </div>-->
<!--    </div>-->
<!--  </section>-->
<!--</template>-->

<!--<script setup lang="ts">-->
<!--interface Country{-->
<!--  name:string,-->
<!--  image: string,-->
<!--  desc:string-->
<!--}-->
<!--const props = defineProps<{-->
<!--  countries:Country[]-->
<!--}>()-->
<!--</script>-->


<template>
  <section class="w-full py-12  flex flex-col items-center">

    <!-- Title -->
    <h2 class="text-4xl text-white font-semibold text-center mb-2 font-serif  underline underline-offset-[13px] decoration-red-500 decoration-2 capitalize">how many countries?</h2>
    <!-- Subtitle -->
    <p class="text-center text-white mb-8">All countries that we represent</p>

    <!-- Countries grid -->
    <div class="container flex flex-wrap justify-center gap-4 text-center">
      <router-link :to="`/country/${country.id}`"
                   v-for="(country, index) in props.countries"
                   :key="index"
      >
        <div

            class="relative mt-10 z-10 w-[164px] sm:w-[280px] grid items-center px-2 py-6 rounded-lg opacity-90 cursor-pointer
         hover:brightness-140 hover:bg-[#111325]/40 hover:bg-opacity-[0]
         transition-all duration-300

         before:content-[''] before:absolute before:left-1/2 before:-translate-x-1/2
          before:bottom-0 before:h-[2px] before:bg-gray-400 before:w-7 hover:before:w-75 overflow-hidden
 before:transition-all before:duration-300"

        >
          <img
              :src="country.flag"
              :alt="country.title"
              class="w-24 h-24 rounded-full  backdrop-blur-md border-gray-600 border-4 object-cover mb-2 flex mx-auto"
          />
          <span class="text-lg font-medium text-white">{{ country.title }}</span>
          <span class="text-[14px] font-medium text-gray-500">Destinations: {{country?.children?.length}}</span>

        </div>
      </router-link>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Country{
  name:string,
  image: string,
  desc:string
}
const props = defineProps<{
  countries:[]
}>()
</script>