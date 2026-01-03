<template>
  <footer class=" relative w-full  overflow-hidden mx-auto h-auto md:h-48 accent-blue-900 text-white py-6 border-t border-b border-transparent md:border-white/10">
    <img src="/images/Vector%20(6).svg"
         class="absolute inset-0 w-[500px] h-[400px] pointer-events-none hidden md:block"
         alt="bg-img"
    />
    <div class="mt-5 gap-4 relative max-w-7xl mx-auto flex flex-col md:flex-row items-start md:justify-between">
      <div class="flex flex-col gap-2 ">
        <div class="flex items-start gap-5">
          <div class="flex flex-col">
            <RouterLink to="/" class="flex items-center gap-2 ml-5">
              <img src="/src/assets/logos/tabarrukZiyoratLogo.jpg"  alt="Profile" class="w-12 h-12 rounded-full object-cover"/>
              <div  class="flex flex-col">
                <span class="mr-1 text-white font-semibold">The blessed pilgrimage</span>
                <span class="text-white text-[6px]">The tourism committee under Ministry of ecology, environmental</span>
                <span class="text-white text-[6px]"> protection and climate change of the Republic of Uzbekistan</span>
              </div>
            </RouterLink>
            <div class="mt-2 ml-5 flex flex-col md:flex-row gap-6 md:gap-20 justify-start w-full">
              <!-- Left: the span -->
              <span class="text-white text-[13px] md:text-md ">
    This website is created to share information about  historical, unique places located in Turkic states.
  </span>
              <!-- Right: icons in a row -->
              <div class="flex flex-col items-start md:items-end gap-5">
                <div class="flex gap-5 mt-3 md:gap-12">
                  <RouterLink to="/" class="font-bold hover:text-gray-500">Main Page</RouterLink>
                  <RouterLink to="Faq" class="font-bold hover:text-gray-500">F.A.Q</RouterLink>
                </div>

                <RouterLink to="Privacy" class="font-bold hover:text-gray-500">Privacy</RouterLink>

              <div class="flex items-center mt-3 gap-3 md:mt-3">
                <!--Icons-->
                <a href="https://www.youtube.com/watch?v=8xjXWba_qlE" target="_blank" class="text-white hover:text-red-600">
                  <FontAwesomeIcon :icon="['fab', 'youtube']" class="!w-6 !h-6"/>
                </a>

                <a href="https://x.com/hashtag/Tabarrukziyorat?src=hashtag_click" target="_blank" class="text-white hover:text-blue-500">
                  <FontAwesomeIcon :icon="['fab', 'twitter']" class="!w-6 !h-6"/>
                </a>

                <a href="https://www.instagram.com" target="_blank" class="text-white hover:text-pink-500">
                  <FontAwesomeIcon :icon="['fab', 'instagram']" class="!w-6 !h-6"/>
                </a>

                <a href="https://t.me/s/tabarrukziyorat_uz" target="_blank" class="text-white hover:text-blue-400">
                  <FontAwesomeIcon :icon="['fab', 'telegram']" class="!w-6 !h-6"/>
                </a>
              </div>
            </div>
          </div>
        </div>
        </div>


    </div>
    </div>
  </footer>
  <div>
    <p class="justify-start md:ml-24">© 2025, Tabarruk Ziyorat</p>
  </div>
</template>
<script setup lang="ts">
</script>