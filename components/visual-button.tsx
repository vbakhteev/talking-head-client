"use client";

import { icons } from "lucide-react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

interface VisualButtonProps {
    iconName: string;
    text: string;
    goTo: string;
    className?: string;
}

export const VisualButton = ({
    iconName,
    text,
    goTo,
    className,
}: VisualButtonProps) => {
    const LucideIcon = icons[iconName as keyof typeof icons]; // Add index signature

    const router = useRouter();
    return (
        <Button
            onClick={() => router.push(goTo)}
            className={cn("gap-x-2 font-semibold rounded-xl", className)}
            variant="outline"
        >
            {<LucideIcon size={24} />}
            {text}
        </Button>
    )
}