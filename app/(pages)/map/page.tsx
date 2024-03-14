"use client";

import { TalkingHead } from "@/components/talking-head";
import { VisualButton } from "@/components/visual-button";
import { useSearchParams } from "next/navigation";


export default function Home() {
  const searchParams = useSearchParams();
  const destination = searchParams.get('destination');

  // TODO: call API and get a map and message

  const message = `Вот близжайший маршрут до ${destination}. Ты можешь доехать на автобусе 126 или взять такси.`

  return (
    <div className="">
        <div className="flex justify-around">
            <VisualButton
                iconName="Download"
                text="Сохранить маршрут"
                goTo="/qr"
            />
            <VisualButton
                iconName="CarTaxiFront"
                text="Taxi"
                goTo="/qr"
                className="bg-yellow-400"
            />
        </div>
        <TalkingHead
          text={message}
        />
    </div>
  );
}
