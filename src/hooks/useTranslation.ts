import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';

type LanguageKey = keyof typeof translations;

export function useTranslation() {
  const { language } = useLanguage();
  const langKey = language as LanguageKey;
  
  const t = (key: string) => {
    const keys = key.split('.');
    let value: any = translations[langKey];

    for (const k of keys) {
      value = value?.[k];
    }

    return value || key;
  };

  return { t, language: langKey };
}