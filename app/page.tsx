"use client";

import { Menu } from "./_components/menu";
import { useGigaChatAccessKey } from "@/hooks/auth";
import { LandingAvatar } from "./_components/landing-avatar";

export default function Home() {
  const auth = useGigaChatAccessKey("gigaChatAccessKey");
  const authorization = `Bearer ${auth()}`;
  console.log(authorization);

  return (
    <div className="flex flex-col">
      <LandingAvatar />
      <div className="sticky bottom-0">
        <Menu />
      </div>
    </div >
  );
}
