import {ref, watch} from 'vue'
import {i18n} from '@/i18n'

const currentLang = ref(i18n.global.locale.value)

watch(currentLang, (newLang))
