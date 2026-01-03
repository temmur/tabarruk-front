<template>
  <div class="all-card">
  <div class="hero">
    <div class="hero-text">
      <h1>Hamkorlar</h1>
      <div class="hd"></div>
      <p>Ushbu veb-sayt turkiy mamlakatlarda joylashgan tarixiy, noyob joylar haqida ma'lumot almashish uchun yaratilgan.

        Tabarruk logo
      </p>
    </div>
  </div>

  <div class="carousel-wrapper">
    <div class="center-circle">
      <div class="center-inner">
        <div class="center-logo">
        <img class="center-logo" src="/images/partners/partners-logo.svg">
        </div>
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
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'

const items = ref([
  { id: 1, title: '', logo: '/images/partners/Layer_1.svg' },
  { id: 2, title: '', logo: '/images/partners/1.png' },
  { id: 3, title: '', logo: '/images/partners/2.png' },
  { id: 4, title: '', logo: '/images/partners/3.png' }
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

.hero{
  padding-top: 50px;
}

.hero-text{
  text-align: center;
  color: white;
}

.hero-text h1{
  font-size: 50px;
}

.hero-text p {
  font-size: clamp(8px,15px,20px);
}

.hd {
  color: red;
  display: flex;
  overflow: hidden;
  background-color: red;
  height: 3px;
  width: 220px;
  margin: 0 auto;
}

.center-circle img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
}
.center-inner img  {
  width: 120px;
  height: 320px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

}
.center-logo  {
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
  top: 12px;
}
.row-bottom {
  bottom: 9px;
  padding-top: 10px;
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
  width: 300px;
  height: 120px;
  margin: 0 7px;
  border-radius: 18px;
  background: #111729;
  border: 2px solid #2c3e50;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #9ca3af;
  font-size: 12px;
  opacity: 0.6;
}
.card-logo {
  max-height: 52px;
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