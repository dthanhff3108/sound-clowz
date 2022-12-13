import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

export const LANGUAGE_EN = 'en';
export const LANGUAGE_VN = 'vn';
export const DEFAULT_LANGUAGE = LANGUAGE_EN;

const ent = {
  title: 'hello react',
  des: {
    name: 'react',
    age: 'third',
  },
};

const vnt = {
  title: 'chao react',
  des: {
    name: 'rit',
    age: 'ba',
  },
};

export const translationsJson = {
  [LANGUAGE_EN]: {
    translation: ent,
  },
  [LANGUAGE_VN]: {
    translation: vnt,
  },
};

i18next.use(initReactI18next).init({
  resources: translationsJson,
  fallbackLng: DEFAULT_LANGUAGE,
  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },
});

export default i18next;
