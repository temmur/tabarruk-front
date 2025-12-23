<template>
  <div class="hero">
    <div class="hero-text">
        <h1 class="text-[5px]">Instagram</h1>
        <div class="hd"></div>
        <p class="text-[10px]">Turk dunyosidagi so‘nggi yangiliklar va o‘zgarishlardan xabardor bo‘ling.</p>
      </div>
    </div>

    <div class="card-all">
      <div class="container">
        <div class="cards-grid">
          <div v-for="(card, index) in cards" :key="index" class="card">
            <img :src="card.image" alt="Card Image" class="card-image" />
            <div class="overlay"><p>Postni ko‘rish</p></div>
            <div class="card-content">
              <p>{{ card.likes }} yoqtirishlar</p>
              <p>{{ card.time }}</p>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cards: [
        {
          image: '/images/Card/1.jpg',
          title: 'Mosque of Malkoc Bey in Siklks',
          likes: 15,
          time: '2 days ago',
        },
        {
          image: '/images/Card/2.jpg',
          title: 'Sunset Mountain View',
          likes: 20,
          time: '3 days ago',
        },
        {
          image: '/images/Card/3.jpg',
          title: 'Sunset Mountain View',
          likes: 20,
          time: '3 days ago',
        },
        {
          image: '/images/Card/4.jpg',
          title: 'Sunset Mountain View',
          likes: 20,
          time: '3 days ago',
        },
        {
          image: '/images/Card/5.jpg',
          title: 'Sunset Mountain View',
          likes: 20,
          time: '3 days ago',
        },
        {
          image: '/images/Card/6.jpg',
          title: 'Sunset Mountain View',
          likes: 20,
          time: '3 days ago',
        },
      ],
    };
  },
};
</script>

<style scoped>
.cards-grid {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.card {
  background-color: #1e2228;
  width: 200px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0,0,0,0.3);
  cursor: pointer;
}

.card-image {
  width: 100%;
  height: 120px;
  object-fit: cover;
}

.card-content {
  padding: 10px;
  color: #fff;
}
.hero{
  padding-top: 50px;
}

.hero-text{
  text-align: center;
  color: white;
}

.hero-text h1{
  font-size: clamp(20px,30px,50px);
}

.hero-text p {
  font-size: clamp(10px,15px,20px);
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
.card {
  background-color: rgb(255 255 255 / 0.05);
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid #444444;
  position: relative;
  margin: 10px auto;
}

.card-all{
  display: flex;
  padding: 0 20px;
}


.card-image {
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 10%;
  padding: 10px 10px;
}

.card-content {
  padding: 10px;
  font-family: Arial, sans-serif;
}

h3 {
  margin: 0;
  font-size: 16px;
  font-weight: bold;
  color: white;
}

p {
  margin: 5px 0;
  font-size: 12px;
  color: white;
}

.card:hover .overlay {
  opacity: 1;
}

.card .overlay {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 18px;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.overlay p {
  font-size: 18px;
  margin-bottom: 70px;
}
</style>

<script setup lang="ts">
</script>