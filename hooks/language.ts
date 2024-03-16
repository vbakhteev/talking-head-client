import useLocalStorage from "./useLocalStorage";

export type Language = 'РУ' | 'ТАТ' | 'EN';
const defaultLanguage: Language = 'РУ';


export const useLanguage = (): [Language, (lang: string) => void] => {
    const [language, setLanguage] = useLocalStorage<Language>("language", defaultLanguage);
    const updateLanguage = (lang: string) => {
        setLanguage(lang);
    };

    return [language, updateLanguage];
}