// src/i18n.js
import { createI18n } from 'vue-i18n'
import en from '@/locales/en.json'
import uz from '@/locales/uz.json'
import ru from '@/locales/ru.json'
if (!['en', 'uz', 'ru'].includes(localStorage.getItem('lang'))) {
    localStorage.removeItem('lang')
}
// Detect previously saved language or default to English
const savedLang = localStorage.getItem('lang') || 'en'


const messages = {
    en: {
        logoTitle: "The blessed pilgrimage",
        logotext:"The tourism committee under Ministry of ecology, environmental",
        logosubtitle:"protection and climate change of the Republic of Uzbekistan",
        about: "About us",
        countries: "Countries",
        heritageMap: "Heritage Map",
        religions: "Religions",
        help: "Help",
        faq: "FAQ",
        searchPlaceholder: "Search..."
    },
    uz: {
        logoTitle: "Muborak ziyorat",
        logotext: "Ekologiya, atrof-muhitni muhofaza qilish va iqlim o‘zgarishi vazirligi huzuridagi turizm qo‘mitasi",
        logosubtitle:"O‘zbekiston Respublikasi atrof-muhitni muhofaza qilish va iqlim o‘zgarishi",
        about: "Biz haqimizda",
        countries: "Davlatlar",
        heritageMap: "Umumiy xarita",
        religions: "Dinlar",
        help: "Yordam",
        faq: "FAQ",
        searchPlaceholder: "Qidirish..."
    },
    ru: {
        logoTitle: "Благословенное паломничество",
        logotext:"Комитет по туризму при Министерстве экологии, охраны окружающей среды и изменения климата",
        logosubtitle:"Охрана окружающей среды и изменение климата Республики Узбекистан",
        about: "О нас",
        countries: "Страны",
        heritageMap: "Общая карта",
        religions: "Религии",
        help: "Помощь",
        faq: "Вопрос-ответ",
        searchPlaceholder: "Поиск..."
    }
}


export const i18n = createI18n({
    legacy: false,
    locale: savedLang,
    fallbackLocale: 'en',
    messages: {en, ru, uz}
})
