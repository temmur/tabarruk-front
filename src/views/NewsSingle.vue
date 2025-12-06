<template>
  <div class="bg-[#070b1a] text-white min-h-screen font-sans pt-6">

    <main class="max-w-3xl mx-auto px-4 text-left">

      <h1 class="text-3xl font-semibold leading-snug  text-ms">2025-yil 18-fevral kuni O‘zbekistondagi <br> Amirsoy tog‘-chang‘i kurortida chang‘i <br> bo‘yicha Turkiy davlatlar kubogi bo‘lib <br> o‘tadi  </h1>

      <div class="flex items-center gap-4 text-gray-400 text-sm mb-6">
        <span class="flex items-center gap-2">
          <i class="fa-regular fa-calendar"></i> 11.02.2025
        </span>
        <span class="flex items-center gap-2">
          <i class="fa-regular fa-eye"></i> 40
        </span>
      </div>

      <div class="flex justify-center">
        <img
          src="https://tabarrukziyorat.uz/media/news/2881_turkic-ski-cup-to-take-place-on-18-february-2025-at-amirsoy-ski-resort-uzbekistan_f.jpg"
          class="rounded-xl w-full max-w-3xl object-cover"
        />
      </div>

      <p class="text-gray-300 text-sm leading-relaxed mt-4 text-xs">Turkiy davlatlar tashkiloti (TDT) 2025-yil 18-fevral kuni O‘zbekistondagi Amirsoy tog‘-chang‘i kurortida bo‘lib o‘tadigan chang‘i sporti bo‘yicha Turkiy davlatlar kubogini mamnuniyat bilan e’lon qiladi.</p>

      <div class="mt-6 flex items-center gap-3">
        <input
          value="tabarrukziyorat.uz/news/2025-yil..."
          readonly
          class="bg-gray-800 px-4 py-2 rounded-lg w-full text-sm outline-none"
        />
      </div>
    </main>

    <footer class="text-center text-xs text-gray-500 mt-20 pb-10">
      2025 Tabarruk Ziyorat
    </footer>

  </div>
  <script>
import CopyLink from "@/components/CopyLink.vue";

export default {
  components: {
    CopyLink
  }
};
</script>
</template>
