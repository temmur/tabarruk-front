<template>
  <div class="flex items-center gap-3 mt-6 relative">

    <input
      :value="link"
      readonly
      class="bg-gray-800 px-4 py-2 rounded-lg w-full text-sm outline-none cursor-pointer"
      @click="copy"
    />

    <transition name="fade">
      <span
        v-if="copied"
        class="absolute -top-7 right-0 bg-green-600 text-white text-xs px-2 py-1 rounded"
      >
        Скопировано!
      </span>
    </transition>
  </div>
</template>

<script>
export default {
  name: "CopyLink",

  props: {
    link: {
      type: String,
      required: true
    }
  },

  data() {
    return {
      copied: false
    };
  },

  methods: {
    async copy() {
      await navigator.clipboard.writeText(this.link);
      this.copied = true;

      setTimeout(() => {
        this.copied = false;
      }, 1500);
    }
  }
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
