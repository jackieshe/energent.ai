import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import zhTranslation from './locales/zh'
import enTranslation from './locales/en'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      zh: {
        translation: zhTranslation,
      },
      en: {
        translation: enTranslation,
      },
    },
    fallbackLng: 'zh',
    interpolation: {
      escapeValue: false,
    },
  })

export default i18n 