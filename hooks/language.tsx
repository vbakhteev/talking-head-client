import useLocalStorage from "./useLocalStorage";

export type Language = 'ру' | 'тат' | 'en';
const defaultLanguage: Language = 'ру';


export const useLanguage = (): [Language, (lang: Language) => void] => {
    const [language, setLanguage] = useLocalStorage<Language>("language", defaultLanguage);
    const updateLanguage = (lang: Language) => {
        setLanguage(lang);
    };

    return [language, updateLanguage];
}