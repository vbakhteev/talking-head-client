"use client";

import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import { LanguageSelector } from "./language-selector";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const Header = () => {
    const isLanding = false;

    return (
        <div className="flex p-4 justify-between">
            <Link href="/">
                <Button
                className={cn(
                    "hidden",
                    !isLanding && "w-8 h-8 p-2 rounded-full flex items-center justify-center",
                )}
                variant="ghost"
                >
                    <Home size={24} />
                </Button>
            </Link>
            <LanguageSelector />
          </div>
    );
}