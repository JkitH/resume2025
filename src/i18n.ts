import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from './locales/en/translation.json';
import zhTranslation from './locales/zh/translation.json';

// 初始化 i18n
i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslation
      },
      zh: {
        translation: zhTranslation
      }
    },
    lng: 'zh', // 預設語言
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false // 不轉義 HTML
    }
  });

export default i18n;
