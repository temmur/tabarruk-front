<template>
  <div class="carousel-wrapper">
    <div class="center-circle">
      <div class="center-inner">
        <span class="center-logo">★</span>
      </div>
    </div>

    <div
        class="row row-top"
        @mouseenter="isTopPaused = true"
        @mouseleave="isTopPaused = false"
    >
      <div
          class="row-track row-track--left-to-right"
          :class="{ 'is-paused': isTopPaused }"
      >
        <div
            v-for="(item, index) in loopedItems"
            :key="'top-' + index"
            class="card"
        >
          <img v-if="item.logo" :src="item.logo" class="card-logo" />
          <span class="card-title">{{ item.title }}</span>
        </div>
      </div>
    </div>

    <div
        class="row row-bottom"
        @mouseenter="isBottomPaused = true"
        @mouseleave="isBottomPaused = false"
    >
      <div
          class="row-track row-track--right-to-left"
          :class="{ 'is-paused': isBottomPaused }"
      >
        <div
            v-for="(item, index) in loopedItems"
            :key="'bottom-' + index"
            class="card"
        >
          <img v-if="item.logo" :src="item.logo" class="card-logo" />
          <span class="card-title">{{ item.title }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'

const items = ref([
  { id: 1, title: 'ADMINISTRATSIYA', logo: '/images/admin.svg' },
  { id: 2, title: 'TURIZM QO‘MITASI', logo: '/images/tourism.svg' },
  { id: 3, title: 'EKOLOGIYA VAZIRLIGI', logo: '/images/eco.svg' },
  { id: 4, title: 'BOSHQA TASHKILOT', logo: '/images/other.svg' }
])

const loopedItems = computed(() => [...items.value, ...items.value])

const isTopPaused = ref(false)
const isBottomPaused = ref(false)
</script>

<style scoped>
.carousel-wrapper {
  position: relative;
  width: 100%;
  height: 290px;
  background: #05091a;
  overflow: hidden;
}

.center-circle {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
}
.center-inner {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: radial-gradient(circle, #ff6a5c 0, #ff3b30 60%, transparent 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 40px rgba(255, 59, 48, 0.7);
}
.center-logo {
  color: #fff;
  font-size: 42px;
}

.row {
  position: absolute;
  left: 0;
  width: 100%;
  overflow: hidden;
}
.row-top {
  top: 20px;
}
.row-bottom {
  bottom: 20px;
}

.row-track {
  display: inline-flex;
  white-space: nowrap;
}

.row-track--left-to-right {
  animation: slide-left-to-right 50s linear infinite;
}

.row-track--right-to-left {
  animation: slide-right-to-left 50s linear infinite;
}

.row-track.is-paused {
  animation-play-state: paused;
}

.card {
  width: 360px;
  height: 120px;
  margin: 0 7px;
  border-radius: 18px;
  background: #111729;
  border: 1px solid rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #9ca3af;
  font-size: 12px;
  opacity: 0.6;
}
.card-logo {
  max-height: 42px;
  margin-right: 10px;
}
.card-title {
  letter-spacing: 0.05em;
}

@keyframes slide-left-to-right {
  0% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(0%);
  }
}

@keyframes slide-right-to-left {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-50%);
  }
}
</style>