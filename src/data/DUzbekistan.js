// DUzbekistan.js
import { uzbCards } from './DUzbekistanCards.js'

export const uzbekistan = {
    id: 1,
    title: 'Uzbekistan',
    subtitle: 'Uzbekistan (officially: Republic of Uzbekistan) is located in Central Asia.',
    image: 'https://tabarrukziyorat.uz/media/country_images/shutterstock_2304168971_2.jpg',
    flag: 'https://tabarrukziyorat.uz/media/country_flags/Uzbekistan.svg',
    infoCards: [
        { id: 1, icon: 'ri-mosque-line', statistics: '175', text: 'Attractions' },
        { id: 2, icon: 'ri-population-line', statistics: '37', text: 'Population' }
    ],

    children: [
        {
            id: 1,
            icon: 'ri-map-pin-line',
            location: 'Tashkent region, Uzbekistan',
            title: 'Ahtansob',
            subtitle: 'Toshkent region, Uzbekistan',
            image: 'https://tabarrukziyorat.uz/media/destination_images/Axtam_Sahoba_Adhamsahoba.jpg',
            infoCards: [
                { id: 1, icon: 'ri-religion-line', text: 'Religion' }
            ],
            children: [...uzbCards]
        },

        {
            id: 2,
            icon: 'ri-map-pin-line',
            location: 'Tashkent region, Uzbekistan',
            title: 'Grave of father Kanarboy',
            subtitle: '420 kilometers from the center of the city of Navoi...',
            image: 'https://avatars.mds.yandex.net/i?id=f54180f51eca39a1f39ef2de9c7b4eebfd5c7bfc-4569510-images-thumbs&n=13',
            infoCards: [
                { id: 1, icon: 'ri-religion-line', text: 'Religion' }
            ],
            children: [...uzbCards]
        },

        {
            id: 3,
            icon: 'ri-map-pin-line',
            location: 'Syrdarya region, Uzbekistan',
            title: 'Architectural complex Kohna Khovos',
            subtitle: 'Khovos is at least 2500 years old.',
            image: 'https://avatars.mds.yandex.net/i?id=8dc6c4fdc2746885e755a3cab3811333de2af54e-16515362-images-thumbs&n=13',
            infoCards: [
                { id: 1, icon: 'ri-religion-line', text: 'Religion' },
                { id: 2, icon: 'ri-religion-line', text: 'Built year', year: '2004-2004' }
            ],
            children: [...uzbCards]
        },

        {
            id: 4,
            icon: 'ri-map-pin-line',
            location: 'Tashkent city, Uzbekistan',
            title: 'Arizhanbai mosque',
            subtitle: 'One of the first Art Nouveau buildings in Tashkent.',
            image: 'https://avatars.mds.yandex.net/i?id=a0c32c5bf96c824df8646340423e81e8ac474248-8287477-images-thumbs&n=13',
            infoCards: [
                { id: 1, icon: 'ri-religion-line', text: 'Religion' }
            ],
            children: [...uzbCards]
        },

        {
            id: 5,
            icon: 'ri-map-pin-line',
            location: 'Navoi region, Uzbekistan',
            title: 'Ayteki Baba shrine',
            subtitle: 'Important for historical consciousness.',
            image: 'https://avatars.mds.yandex.net/i?id=d1dd35a74de99def873bfe1ff5fe0cb3e2349158f0a10d83-4575448-images-thumbs&n=13',
            infoCards: [
                { id: 1, icon: 'ri-religion-line', text: 'Religion' }
            ],
            children: [...uzbCards]
        },

        {
            id: 6,
            icon: 'ri-map-pin-line',
            location: 'Tashkent city, Uzbekistan',
            title: 'Barak khan madrasah',
            subtitle: 'Built in the XVI century as an Islamic school.',
            image: 'https://avatars.mds.yandex.net/i?id=8dcc57a3f408ad0a6ba349d0065784abbf317103-10806805-images-thumbs&n=13',
            infoCards: [
                { id: 1, icon: 'ri-religion-line', text: 'Religion' }
            ],
            children: [...uzbCards]
        },

        {
            id: 7,
            icon: 'ri-map-pin-line',
            location: 'Navoi region, Uzbekistan',
            title: 'Bargsuz Mosque',
            subtitle: 'Built in early 20th century through donations.',
            image: 'https://avatars.mds.yandex.net/i?id=572da836f7ce79b2090598ac7c45802e2a44602f-10496758-images-thumbs&n=13',
            infoCards: [
                { id: 1, icon: 'ri-religion-line', text: 'Religion' }
            ],
            children: [...uzbCards]
        },

        {
            id: 8,
            icon: 'ri-map-pin-line',
            location: 'Navoi region, Uzbekistan',
            title: 'Bayazid Bastami Mosque',
            subtitle: 'Boyazid Bistami studied under 113 teachers.',
            image: 'https://avatars.mds.yandex.net/i?id=6a400b2be88e15c78f8d5c959ae967f14b9b86e3-10355200-images-thumbs&n=13',
            infoCards: [
                { id: 1, icon: 'ri-religion-line', text: 'Religion' }
            ],
            children: [...uzbCards]
        },

        {
            id: 9,
            icon: 'ri-map-pin-line',
            location: 'Navoi region, Uzbekistan',
            title: 'Bedir Ota complex',
            subtitle: 'Built at the beginning of the 19th century.',
            image: 'https://avatars.mds.yandex.net/i?id=2afd8b4823ea7eacc4767da5715d38756019d416-11387523-images-thumbs&n=13',
            infoCards: [
                { id: 1, icon: 'ri-religion-line', text: 'Religion' }
            ],
            children: [...uzbCards]
        },

        {
            id: 10,
            icon: 'ri-map-pin-line',
            location: 'Tashkent region, Uzbekistan',
            title: 'Buzruk ota',
            subtitle: 'Located in the "Hamza" neighborhood of Bekabad district.',
            image: 'https://avatars.mds.yandex.net/i?id=5db2b5ac09a5930c68f57d893f53ad30e9f98f8c-5252220-images-thumbs&n=13',
            infoCards: [
                { id: 1, icon: 'ri-religion-line', text: 'Religion' },
                { id: 2, icon: 'ri-religion-line', text: 'Built year', year: '1750-1751' }
            ],
            children: [...uzbCards]
        },

        {
            id: 11,
            icon: 'ri-map-pin-line',
            location: 'Republic of Karakalpakstan, Uzbekistan',
            title: 'Davud fathers mausoleum',
            subtitle: 'Included in the list of national cultural heritage objects.',
            image: 'https://avatars.mds.yandex.net/i?id=cd8a10489f8e0ecfbe8189a7b5b18dbd-5205090-images-thumbs&n=13',
            infoCards: [
                { id: 1, icon: 'ri-religion-line', text: 'Religion' },
                { id: 2, icon: 'ri-religion-line', text: 'Built year', year: '1750-1751' }
            ],
            children: [...uzbCards]
        }
    ],

    gallery: [
        { id: 1, image: 'https://tabarrukziyorat.uz/media/country_media_images/чашма_10.jpg' },
        { id: 2, image: 'https://tabarrukziyorat.uz/media/country_media_images/shutterstock_499680133.jpg' },
        { id: 3, image: 'https://tabarrukziyorat.uz/media/country_media_images/shutterstock_2153951587.jpg' },
        { id: 4, image: 'https://tabarrukziyorat.uz/media/country_media_images/027_Samarkand_Guri-Amir_Mausoleum.jpg' },
        { id: 5, image: 'https://tabarrukziyorat.uz/media/country_media_images/shutterstock_1544283224.jpg' },
        { id: 6, image: 'https://tabarrukziyorat.uz/media/country_media_images/shutterstock_1086403388.jpg' },
        { id: 7, image: 'https://tabarrukziyorat.uz/media/country_media_images/Xiva__otmishga_ochilgan_vaqt_darvozasi_копия.jpg' },
        { id: 8, image: 'https://tabarrukziyorat.uz/media/country_media_images/00.jpg' },
        { id: 9, image: 'https://tabarrukziyorat.uz/media/country_media_images/Xiva__otmishga_ochilgan_vaqt_darvozasi_копия.jpg' },
        { id: 10, image: 'https://tabarrukziyorat.uz/media/country_media_images/shutterstock_1086403388.jpg' },
        { id: 11, image: 'https://tabarrukziyorat.uz/media/country_media_images/shutterstock_1544283224.jpg' },
        { id: 12, image: 'https://tabarrukziyorat.uz/media/country_media_images/shutterstock_2304168971_2.jpg' },
        { id: 13, image: 'https://tabarrukziyorat.uz/media/country_media_images/shutterstock_2153951587.jpg' },
        { id: 14, image: 'https://tabarrukziyorat.uz/media/country_media_images/shutterstock_1667296441.jpg' },
        { id: 15, image: 'https://tabarrukziyorat.uz/media/country_media_images/shutterstock_1544283224.jpg' },
        { id: 16, image: 'https://tabarrukziyorat.uz/media/country_media_images/Xiva__otmishga_ochilgan_vaqt_darvozasi_копия.jpg' },
        { id: 17, image: 'https://tabarrukziyorat.uz/media/country_media_images/00.jpg' },
        { id: 18, image: 'https://tabarrukziyorat.uz/media/country_media_images/shutterstock_1667296441.jpg' },
        { id: 19, image: 'https://tabarrukziyorat.uz/media/country_media_images/shutterstock_1544283224.jpg' },
        { id: 20, image: 'https://tabarrukziyorat.uz/media/country_media_images/shutterstock_1086403388.jpg' }
    ]
}
