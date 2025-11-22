<template>
  <div class="flex items-center justify-center h-screen">
    <div class="relative group">
      <button
          class="relative inline-block p-[1px] text-sm font-semibold leading-5 text-white
               bg-red-300 shadow-lg cursor-pointer rounded-lg shadow-zinc-900
               transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95"
      >
        <span
            class="absolute inset-0 rounded-lg bg-gradient-to-r from-red-500 via-pink-500 to-rose-500
                 p-[1.5px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        ></span>

        <span class="relative z-10 block px-4 py-2 rounded-lg bg-red-500">
          <!-- 🔥 Slot only -->
          <slot />
        </span>
      </button>
    </div>
  </div>
</template>
