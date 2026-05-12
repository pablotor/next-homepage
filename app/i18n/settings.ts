import { Namespace } from 'i18next';

export const fallbackLng = 'en';
export const languages = [fallbackLng, 'es'];
export const defaultNS = 'translation';
export const cookieName = 'i18next';

export const getOptions = (lng = fallbackLng, ns: Namespace = defaultNS) => ({
  // debug: true,
  supportedLngs: languages,
  fallbackLng,
  interpolation: {
    alwaysFormat: true, // set alwaysFormat to true
  },
  lng,
  fallbackNS: defaultNS,
  defaultNS,
  ns,
});
