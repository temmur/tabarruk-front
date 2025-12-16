import { ref } from 'vue';

export const cards = ref([
    { id: 1, image:'https://tabarrukziyorat.uz/media/news/2881_turkic-ski-cup-to-take-place-on-18-february-2025-at-amirsoy-ski-resort-uzbekistan_f.jpg', title:'Turkic Ski Cup to take place on 18 February 2025 at Amirsoy Ski...', date:'2025-02-11'},
    { id: 2, image:'https://tabarrukziyorat.uz/media/news/3107371.280b8123ff0ad60be67f8166274746b1.jpg', title:'Interview with Ambassador Kubanychbek Omuraliev', desc:'Interview with Ambassador Kubanychbek Omuraliev, Secretary General of the OT...', date:'2025-02-03'},
    { id: 3, image:'https://tabarrukziyorat.uz/media/news/photo_2024-10-03_15-31-00.jpg', title:'As part of the "Tabarruk Ziyorat" project, a presentation of the platfor...', desc:'In order to implement the decree of the President of the Republic of Uzbekist...', date:'2024-03-11'},
]);

export const countries = [
    { id: 1, name: "Uzbekistan", image: "https://tabarrukziyorat.uz/media/country_flags/Uzbekistan.svg", desc:"175 destinations" },
    { id: 2, name: "Turkey", image: "https://tabarrukziyorat.uz/media/country_flags/Turkey_lzgDBoT.svg", desc:"150 destinations" },
    { id: 3, name: "Turkmenistan", image: "https://tabarrukziyorat.uz/media/country_flags/Turkmenistan.svg", desc:"20 destinations" },
    { id: 4, name: "Azerbaijan", image: "https://tabarrukziyorat.uz/media/country_flags/Azerbaijan.svg", desc:"0 destinations" },
    { id: 5, name: "Kazakhstan", image: "https://tabarrukziyorat.uz/media/country_flags/Kazakhstan.svg", desc:"51 destinations" },
    { id: 6, name: "Kyrgyzstan", image: "https://tabarrukziyorat.uz/media/country_flags/Kyrgyzstan.svg", desc:"19 destinations" },
    { id: 7, name: "Hungary", image: "https://tabarrukziyorat.uz/media/country_flags/Hungary.svg", desc:"14 destinations" },
];

export const carouselCards = ref([
    { id: 1, image: 'https://tabarrukziyorat.uz/media/destination_images/Axtam_Sahoba_Adhamsahoba.jpg', title: 'Ahtansob', subtitle: 'Toshkent region, Uzbekistan', visible: false },
    { id: 2, image: 'https://tabarrukziyorat.uz/media/destination_images/IMG_6383.jpg', title: 'Abiwerd Peshtak', subtitle: 'Mary province, Turkmenistan', visible: false },
    { id: 3, image: 'https://tabarrukziyorat.uz/media/destination_images/Рисунок3_W24FO57.jpg', title: 'Amir Ahmad Bukhari Mosque', subtitle: 'Istanbul, Turkey', visible: false },
    { id: 4, image: 'https://tabarrukziyorat.uz/media/destination_images/maxresdefault.jpg', title: 'Ancient settlement Balasagun', subtitle: 'Zhambyl region, Kazakhstan' },
    { id: 5, image: 'https://tabarrukziyorat.uz/media/destination_images/c4818299c0b1420401ae51135793a987_4.jpg', title: 'Abdurrahman Arnavut’s tomb', subtitle: 'Veszprém, Hungary' },
    { id: 6, image: 'https://tabarrukziyorat.uz/media/destination_images/e72a32a4e5fa6016ced565677acfc453.jpg', title: 'Akyrtas palace complex', subtitle: 'Zhambyl region, Kazakhstan' },
    { id: 7, image: 'https://tabarrukziyorat.uz/media/destination_images/Screenshot_20190819-152258_Google.jpg', title: 'Ancient citadel of Shymkent', subtitle: 'Shymkent city, Kazakhstan' },
    { id: 8, image: 'https://tabarrukziyorat.uz/media/destination_images/3_zL7Uu07.jpg', title: 'Ancient city of Otrar', subtitle: 'Turkestan region, Kazakhstan' },
    { id: 9, image: 'https://tabarrukziyorat.uz/media/destination_images/wn1kiDadyug.jpg', title: 'Ancient settlement Ancient Taraz', subtitle: 'Zhambyl region, Kazakhstan' },
    { id: 10, image: 'https://tabarrukziyorat.uz/media/destination_images/image_2025-01-20_16-49-26.jpg', title: 'Ancient settlement Auliye-bastau', subtitle: 'Zhambyl region, Kazakhstan' }
]);

export const loopedCards = ref()
