"use client";

import { Menu } from "./_components/menu";
import { LandingAvatar } from "./_components/landing-avatar";

export default function Home() {
  return (
    <div className="flex flex-col">
      <LandingAvatar />
      <div className="sticky bottom-0">
        <Menu />
      </div>
    </div >
  );
}
