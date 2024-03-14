"use client";

import { icons } from "lucide-react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

interface VisualButtonProps {
    iconName: string;
    text: string;
    goTo: string;
}

export const VisualButton = ({
    iconName,
    text,
    goTo,
}: VisualButtonProps) => {
    const LucideIcon = icons[iconName as keyof typeof icons]; // Add index signature

    const router = useRouter();
    return (
        <Button
            onClick={() => router.push(goTo)}
            className="gap-x-2 font-semibold"
            variant="outline"
        >
            {<LucideIcon size={24} />}
            {text}
        </Button>
    )
}