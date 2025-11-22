<template>
  <section class="hero">
    <div
        class="hero-bg relative"
        :style="{ backgroundImage: 'url(' + slides[currentIndex].image + ')' }"

    >

    </div>

    <div class="imgs absolute inset-0 bg-black/40"></div>

    <div class="hero-overlay">
      <img src="/public/Vector (6).svg">
    </div>

    <div class="hero-inner">
      <div class="hero-text">
        <p class="hero-location">
          {{ slides[currentIndex].location }}
        </p>

        <h1 class="hero-title">
          {{ slides[currentIndex].title }}
        </h1>

        <p class="hero-desc">
          {{ slides[currentIndex].description }}
        </p>

        <button class="hero-btn">
          Ko'rish →
        </button>
      </div>

      <div class="hero-counter">
        <span class="hero-counter-number">
          {{ formattedCurrent }}
        </span>

        <span class="hero-counter-line"></span>

        <span class="hero-counter-number">
          03
        </span>
      </div>
    </div>
  </section>
</template>
 <script setup lang="ts">
 import { ref, onMounted,onBeforeUnmount, computed } from 'vue';
 import CButtons from "@/components/CButtons.vue";
 const slides = ref([
   {
     image: '/images/slide1.jpg',
     location: "Samarqand viloyati, O'zbekiston",
     title: 'Registon',
     description:
         "Mirzo Ulug‘bek zamonasidan buyon bu maydon Samarqand ahli uchun bosh maydon hisoblanadi. Samarqand hukmdorlarining farmonlari shu yerdan e'lon qilingan."
   },
   {
     image: '/images/slide2.jpg',
     location: "Buxoro viloyati, O'zbekiston",
     title: 'Ark qal’asi',
     description:
         "Buxoro Ark qal’asi qadimdan shahar markazi bo‘lib, unda amir saroyi va davlat idoralari joylashgan."
   },
   {
     image: '/images/slide3.jpg',
     location: "Xiva shahri, O'zbekiston",
     title: 'Ichan qal’a',
     description:
         "Ichan qal’a — Xivaning tarixiy markazi bo‘lib, ko‘plab madrasalar, minoralar va me’moriy yodgorliklarni o‘zida jamlagan."
   }
 ])
 const currentIndex = ref(0)        // 0,1,2 …
 let intervalId = null

 const formattedCurrent = computed(() => {
   const num = currentIndex.value + 1        // slayderlar 1 dan boshlanadi
   return num < 10 ? '0' + num : String(num)
 })

 const startSlider = () => {
   intervalId = setInterval(() => {
     // keyingi slaydga o‘tish (0→1→2→0 ...)
     currentIndex.value = (currentIndex.value + 1) % slides.value.length
   }, 3000) // 3 sekund
 }

 const stopSlider = () => {
   if (intervalId) {
     clearInterval(intervalId)
     intervalId = null
   }
 }
 onMounted(startSlider)
 onBeforeUnmount(stopSlider)
 </script>
<style scoped>

.hero {
  position: relative;
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  color: #fff;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

.hero-bg {
  position: absolute;
  opacity: 1;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
}

.hero-overlay {
  position: absolute;
  z-index: 100;
  inset: 0;
  background: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.2),
      rgba(0, 0, 0, 0.2),
      rgba(0, 0, 0, 0.2)
  );
}
.hero-overlay img{
  z-index: 10;
}
.hero-inner {
  position: relative;
  z-index: 2;
  height: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;
}

.hero-text {
  max-width: 800px;
  margin: 0 auto;
  font-size:20px;
}

.hero-location {
  font-size: 24px;
  margin-bottom:6px;
  opacity: 0.9;
  margin: 0 auto;
}

.hero-title {
  font-size: 94px;
  font-weight: 700;
  margin-bottom: 24px;
}

.hero-desc {
  font-size: 25px;
  line-height: 1.6;
  margin-bottom: 32px;
}

.hero-btn {
  background: #ff4b5c;
  color: #fff;
  border: none;
  padding: 14px 32px;
  border-radius: 999px;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.2s ease;
}

.hero-btn:hover {
  background: #ff3345;
}

.hero-counter {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: -80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  font-size: 16px;
}

.hero-counter-number {
  font-size: 16px;
  font-weight: 400;
  margin-bottom: -30px;
  margin-top: -30px;
  letter-spacing: 0.15em;
}

.hero-counter-line {
  width: 2px;
  height: 140px;
  background-color: rgba(255, 255, 255, 0.7);
}

@media (max-width: 768px) {
  .hero-inner {
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }

  .hero-counter {
    position: absolute;
    right: 16px;
    top: 50%;
    transform: translateY(-50%);
  }

  .hero-title {
    font-size: 42px;
  }
}
</style>
