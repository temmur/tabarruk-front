<template>
  <div class="max-w-full sm:max-w-xl mx-auto mt-8 px-2 sm:px-0">
    <div
      class="flex items-center justify-between gap-4 bg-[#0f1724]/60 border border-gray-700 rounded-full px-3 py-2 shadow-sm"
    >
      <!-- Left icons -->
      <div class="flex items-center gap-3">
        <!-- Share -->
        <button
          aria-label="Share"
          class="p-2 rounded-full bg-transparent hover:bg-white/5 transition"
          @click="onShare"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-4 h-4 sm:w-5 sm:h-5 text-gray-200"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.6"
              d="M4 12v.01M20 12v.01M12 20v.01M4 12a8 8 0 0 1 16 0M12 4v16"
            />
          </svg>
        </button>

        <!-- Telegram -->
        <a
          :href="telegramShareLink"
          target="_blank"
          rel="noreferrer"
          class="p-2 rounded-full hover:bg-white/5 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-4 h-4 sm:w-5 sm:h-5 text-blue-300"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path
              d="M22 3.2L2.9 10.1a1.1 1.1 0 0 0 .1 2l3.9 1.2 1.7 5.2c.3.9 1.7 1.3 2.5.7l3.4-2.6 4.9 3.6c.8.6 1.9.1 2.1-.9L23.9 4.2c.2-1-1.1-1.9-1.9-1z"
            />
          </svg>
        </a>

        <!-- Twitter -->
        <a
          :href="twitterShareLink"
          target="_blank"
          rel="noreferrer"
          class="p-2 rounded-full hover:bg-white/5 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-4 h-4 sm:w-5 sm:h-5 text-sky-400"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path
              d="M22.46 6c-.77.35-1.6.58-2.47.69a4.2 4.2 0 0 0 1.84-2.3 8.4 8.4 0 0 1-2.66 1.02 4.18 4.18 0 0 0-7.13 3.8A11.86 11.86 0 0 1 3.11 4.9a4.18 4.18 0 0 0 1.29 5.58 4.1 4.1 0 0 1-1.9-.53v.05a4.18 4.18 0 0 0 3.35 4.1c-.36.1-.74.15-1.13.15-.28 0-.55-.03-.81-.08a4.18 4.18 0 0 0 3.9 2.9A8.38 8.38 0 0 1 2 19.54 11.82 11.82 0 0 0 8.29 21c7.55 0 11.68-6.26 11.68-11.68 0-.18 0-.35-.01-.53A8.36 8.36 0 0 0 22.46 6z"
            />
          </svg>
        </a>
      </div>

      <!-- URL input -->
      <div class="flex-1 px-2">
        <input
          ref="urlInput"
          readonly
          :value="displayUrl"
          class="w-full bg-transparent text-xs sm:text-sm text-gray-200 outline-none placeholder:gray-400"
        />
      </div>

      <!-- Right side buttons -->
      <div class="flex items-center gap-3">
        <!-- Copy -->
        <button
          @click="copyToClipboard"
          class="flex items-center gap-2 px-3 py-2 rounded-full bg-white/5 hover:bg-white/10 transition"
        >
          <svg
            v-if="!copied"
            xmlns="http://www.w3.org/2000/svg"
            class="w-3 h-3 sm:w-4 sm:h-4 text-gray-200"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <rect
              x="9"
              y="9"
              width="13"
              height="13"
              rx="2"
              ry="2"
              stroke-width="1.4"
            />
            <path
              d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"
              stroke-width="1.4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            class="w-3 h-3 sm:w-4 sm:h-4 text-emerald-300"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path
              d="M20.285 6.708a1 1 0 0 0-1.416-1.416l-9.193 9.193-3.192-3.192a1 1 0 0 0-1.415 1.415l3.9 3.9a1 1 0 0 0 1.415 0l9.901-9.9z"
            />
          </svg>

          <span class="text-xs sm:text-sm text-gray-200">
            {{ copied ? "Copied" : "Copy" }}
          </span>
        </button>

        <!-- Select -->
        <button
          class="p-2 rounded-full hover:bg-white/5 transition"
          @click="selectInput"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-3 h-3 sm:w-4 sm:h-4 text-gray-200"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path
              d="M3 12h18M12 3v18"
              stroke-width="1.6"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>

    <p class="text-[10px] sm:text-xs text-gray-400 mt-2 text-center select-none">
      Share this article
    </p>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const props = defineProps({
  url: { type: String, default: "" },
});

const urlInput = ref(null);
const copied = ref(false);

const displayUrl = computed(() => {
  if (props.url && props.url.length) return props.url;
  if (typeof window !== "undefined") return window.location.href;
  return "";
});

const telegramShareLink = computed(() => {
  return `https://t.me/share/url?url=${encodeURIComponent(displayUrl.value)}`;
});
const twitterShareLink = computed(() => {
  const text = "Check this out";
  return `https://twitter.com/intent/tweet?url=${encodeURIComponent(
    displayUrl.value
  )}&text=${encodeURIComponent(text)}`;
});

async function copyToClipboard() {
  try {
    await navigator.clipboard.writeText(displayUrl.value);
    copied.value = true;
    setTimeout(() => (copied.value = false), 2000);
  } catch {}
}

function selectInput() {
  if (urlInput.value) {
    urlInput.value.select();
    urlInput.value.setSelectionRange(0, 99999);
  }
}

function onShare() {
  if (navigator.share) {
    navigator
      .share({
        title: document.title || "Article",
        url: displayUrl.value,
      })
      .catch(() => {});
  } else {
    selectInput();
  }
}
</script>

<style scoped>
input[readonly] {
  caret-color: transparent;
}
</style>
