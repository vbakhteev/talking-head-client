"use client";

import { Button } from "@/components/ui/button"
import { DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuItem, DropdownMenuContent, DropdownMenu, DropdownMenuRadioGroup, DropdownMenuRadioItem } from "@/components/ui/dropdown-menu"
import { useLanguage } from "@/hooks/language";

export const LanguageSelector = () => {
    const [language, setLanguage] = useLanguage();

    return (
        <div className="flex items-center space-x-2">
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    className="w-8 h-8 p-2 rounded-full flex items-center justify-center"
                    id="language"
                    size="sm"
                    variant="outline"
                >
                    {language}
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="mt-1">
                <DropdownMenuLabel>Language</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup value={language} onValueChange={setLanguage}>
                <DropdownMenuRadioItem value="РУ">Русский</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="ТАТ">Татарча</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="EN">English</DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
            </DropdownMenuContent>
        </DropdownMenu>
        </div>
    )
}