"use client";

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { Language, useLanguage } from "@/hooks/language";

const languageShotToLong = {
    "ру": "Русский",
    "тат": "Татарча",
    "en": "English",
};


export const LanguageSelector = () => {
    const [language, setLanguage] = useLanguage();

    return (
        <Select onValueChange={(value) => setLanguage(value as Language)}>
            <SelectTrigger className="w-[120px]">
                <SelectValue placeholder={languageShotToLong[language]} />
            </SelectTrigger>
            <SelectContent >
                <SelectGroup>
                <SelectLabel>Выбери язык</SelectLabel>
                <SelectItem value="ру">Русский</SelectItem>
                <SelectItem value="тат">Татарча</SelectItem>
                <SelectItem value="en">English</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    );
};