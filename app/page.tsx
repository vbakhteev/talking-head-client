"use client";

import { Avatar } from "@/components/ui/avatar";
import { Menu } from "./_components/menu";
import useModelMode from "@/hooks/useModelMode";

export default function Home() {
  useModelMode(state => state.next)();

  return (
    <div className="flex flex-col">
      <div className="w-full" style={{ height: "50rem" }}>
        <Avatar
          cameraView="full"
        />
      </div>
      <div className="sticky bottom-0">
        <Menu />
      </div>
    </div >
  );
}
