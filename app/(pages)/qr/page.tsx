"use client";

import { TalkingHeadComponent } from "@/components/talking-head";
import { VisualButton } from "@/components/visual-button";
import { useSearchParams } from "next/navigation";
import QRCode from "react-qr-code";


export default function Home() {
  const searchParams = useSearchParams();
  const destination = searchParams.get('destination');

  const message = `Отсканируй QR код, чтобы сохранить маршрут до ${destination}`
  return (
    <div className="h-full flex flex-col justify-end items-center gap-y-4 pb-5 pt-9">
      <div className="p-5 bg-white">
        <QRCode value="https://www.youtube.com/watch?v=dQw4w9WgXcQ" size={350} />
      </div>
      <VisualButton
        iconName="Home"
        text="На главную"
        goTo="/"
        className="mt-6"
      />
      <TalkingHeadComponent
        text={message}
        mode="base"
        cameraView="head"
      />
    </div>
  );
}
