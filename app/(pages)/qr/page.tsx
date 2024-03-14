"use client";

import { TalkingHead } from "@/components/talking-head";
import { VisualButton } from "@/components/visual-button";
import { useSearchParams } from "next/navigation";
import QRCode from "react-qr-code";


export default function Home() {
  const searchParams = useSearchParams();
  const destination = searchParams.get('destination');

  const message = `Отсканируй QR код, чтобы сохранить маршрут до ${destination}`
  return (
    <div className="flex flex-col items-center gap-y-5">
        <div className="p-5 bg-white">
          <QRCode value="https://www.youtube.com/watch?v=dQw4w9WgXcQ"/>
        </div>
        <VisualButton
          iconName="Home"
          text="На главную"
          goTo="/"
        />
        <TalkingHead
          text={message}
        />
    </div>
  );
}
