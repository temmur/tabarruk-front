<template>
  <div class="mt-44">
    <div class=" flex text-white items-center mt-4">
      <destination-cards/>
    </div>
    <div class="mt-10">
      <TravelStats/>
    <CountriesCard :countries = "countries"/>
      <news-cards :cards="cards"/>
    </div>

  </div>

</template>

<script setup lang="ts">
import TravelStats from "@/cards/TravelStats.vue";
import CountriesCard from '../components/sections/CountriesCard.vue'
import NewsCards from "@/cards/newsCards.vue";
import DestinationCards from "@/cards/destinationCards.vue";
const cards =[
  {image:'https://tabarrukziyorat.uz/media/news/2881_turkic-ski-cup-to-take-place-on-18-february-2025-at-amirsoy-ski-resort-uzbekistan_f.jpg', title:'Turkic Ski Cup to take place on 18 February 2025 at Amirsoy Ski...', date:'2025-02-11'},
  {image:'https://tabarrukziyorat.uz/media/news/3107371.280b8123ff0ad60be67f8166274746b1.jpg', title:'Interview with Ambassador Kubanychbek Omuraliev', desc:'Interview with Ambassador Kubanychbek Omuraliev, Secretary General of the OT...', date:'2025-02-03'},
  {image:'https://tabarrukziyorat.uz/media/news/photo_2024-10-03_15-31-00.jpg', title:'As part of the "Tabarruk Ziyorat" project, a presentation of the platfor...', desc:'In order to implement the decree of the President of the Republic of Uzbekist...', date:'2024-03-11'},
];
const countries =[
  { name: "Uzbekistan", image: "https://tabarrukziyorat.uz/media/country_flags/Uzbekistan.svg", desc:"175 destinations" },
  { name: "Turkey", image: "https://tabarrukziyorat.uz/media/country_flags/Turkey_lzgDBoT.svg",desc:"150 destinations" },
  { name: "Turkmenistan", image: "https://tabarrukziyorat.uz/media/country_flags/Turkmenistan.svg",desc:"20 destinations"  },
  { name: "Azerbaijan", image: "https://tabarrukziyorat.uz/media/country_flags/Azerbaijan.svg" ,desc:"0 destinations" },
  { name: "Kazakhstan", image: "https://tabarrukziyorat.uz/media/country_flags/Kazakhstan.svg",desc:"51 destinations"  },
  { name: "Kyrgyzstan", image: "https://tabarrukziyorat.uz/media/country_flags/Kyrgyzstan.svg" ,desc:"19 destinations" },
  { name: "Hungary", image: "https://tabarrukziyorat.uz/media/country_flags/Hungary.svg" ,desc:"14 destinations" },
]
</script>