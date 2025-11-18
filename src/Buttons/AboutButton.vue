<template>
  <div class="flex items-center justify-center h-screen">
    <div class="relative group">
      <button
          class="relative inline-block p-[1px] text-sm font-semibold leading-5 text-white
               bg-gray-800 shadow-lg cursor-pointer rounded-lg shadow-zinc-900
               transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95"
      >
        <span
            class="absolute inset-0 rounded-lg bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500
                 p-[1.5px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        ></span>

        <!-- 🔥 slot replaces ALL button content -->
        <span class="relative z-10 block px-3 py-2 rounded-lg bg-gray-950">
          <slot />
        </span>
      </button>
    </div>
  </div>
</template>
