import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import en from './locales/en.json';
import de from './locales/de.json';
import {useLocalUserInfo} from '@/stores/LocalUserInfo';

const language = useLocalUserInfo.getState().localUserInfo.language || 'en';

i18n.use(initReactI18next).init({
  resources: {
    en: {translation: en},
    de: {translation: de},
  },
  lng: language, // Default language
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
