"use client";

import { Avatar } from "@/components/ui/avatar";
import useModelMode from "@/hooks/useModelMode";

export const LandingAvatar = () => {
    useModelMode(state => state.next)();

    return (
        <div className="w-full" style={{ height: "50rem" }}>
            <Avatar cameraView="full" />
        </div>
    )
}