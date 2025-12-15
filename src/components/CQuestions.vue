<template>
  <section class="bg-[#070B16] text-white min-h-screen py-16 px-6">
    <div class="max-w-6xl mx-auto">

      <!-- TITLE -->
      <h1 data-v-73634d78="" class="text-2xl md:text-3xl md:text-40 pt-40 pl-5 text-white font-bold relative w-fit font-playfair title-line_full pb-4">
        Tez-tez beriladigan savollar</h1>

      <!-- FAQ GRID -->
      <div class="grid md:grid-cols-2 gap-8">

        <div
            v-for="(item, index) in faq"
            :key="index"
            class="bg-white/5 border border-white/15 rounded-xl overflow-hidden"
        >
          <!-- QUESTION -->
          <button
              @click="toggle(index)"
              class="w-full flex items-center gap-4 px-6 py-5 text-left group"
          >
            <!-- FLAG -->
            <div class="w-10 h-10 bg-red-500 rounded-md flex items-center justify-center shrink-0">
              <img
                  src="https://tabarrukziyorat.uz/media/faq/flag_GIx4PeS.svg"
                  alt="flag"
                  class="w-6 h-6"
              />
            </div>

            <!-- TEXT -->
            <span
                class="text-lg font-medium flex-1 cursor-pointer
                     transition-colors duration-300
                     group-hover:text-red-500"
            >
              {{ item.question }}
            </span>

            <!-- ARROW -->
            <span
                class="w-9 h-9 rounded-md border border-white/20 flex items-center justify-center
                     transition-transform duration-500 ease-out"
                :class="item.open ? 'rotate-180' : ''"
            >
              ▾
            </span>
          </button>

          <!-- ANSWER -->
          <transition
              enter-active-class="transition-opacity transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
              leave-active-class="transition-opacity transition-transform duration-400 ease-[cubic-bezier(0.7,0,0.84,0)]"
              enter-from-class="opacity-0 translate-y-3"
              enter-to-class="opacity-100 translate-y-0"
              leave-from-class="opacity-100 translate-y-0"
              leave-to-class="opacity-0 translate-y-3"
          >
            <div
                v-if="item.open"
                class="px-6 pb-6 pl-20 text-gray-300 leading-relaxed"
            >
              {{ item.answer }}
            </div>
          </transition>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive } from "vue";

const faq = reactive([
  {
    question: "“Tabarruk Ziyorat” platformasi orqali nimaga erishish maqsad qilingan?",
    answer:
        "Ushu platformani joriy etish orqali turkiy davlatlarga tegishli bo‘lgan ziyoratgohlar haqida ma’lumotlarni joylashtirgan holda o‘zaro ziyorat turizmi bo‘yicha turistlar sonini oshirish maqsad qilingan.",
    open: false,
  },
  {
    question: "“Tabarruk Ziyorat” platformasi qachon ishlab chiqilgan?",
    answer:
        "Turizm qo‘mitasi tomonidan sohadagi ekspertlar jalb qilinib, “Tabarruk ziyorat” platformasi 2023-yilda ishga tushirilgan.",
    open: false,
  },
  {
    question: "Turkiy davlatlar tashkilotiga nechta davlat kiradi?",
    answer:
        "Turkiy davlatlar tashkilotiga 7 ta davlat kiradi: O‘zbekiston, Qozog‘iston, Qirg‘iziston, Turkiya, Ozarbayjon va Turkmaniston.",
    open: false,
  },
]);

const toggle = (index) => {
  faq.forEach((item, i) => {
    item.open = i === index ? !item.open : false;
  });
};
</script>
