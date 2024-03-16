"use client";

import { TalkingHeadComponent } from "@/components/talking-head";
import { VisualButton } from "@/components/visual-button";
import { useSearchParams } from "next/navigation";

import {
  YMap,
  YMapComponentsProvider,
  YMapDefaultFeaturesLayer,
  YMapDefaultSchemeLayer,
} from "ymap3-components";

export default function Home() {
  const searchParams = useSearchParams();
  const destination = searchParams.get('destination');
  const goTo = `/qr?destination=${destination}`;

  // TODO: call API and get a map and message

  const message = `Вот близжайший маршрут до ${destination}`

  return (
    <div className="">
      <div className="h-80 flex">
        <YMapComponentsProvider apiKey={process.env.NEXT_PUBLIC_YMAP_API_KEY}>
          <YMap location={{ center: [37.95, 55.65], zoom: 10 }} />
        </YMapComponentsProvider>
      </div>
      <div className="flex justify-around">
        <VisualButton
          iconName="Download"
          text="Сохранить маршрут"
          goTo={goTo}
        />
        <VisualButton
          iconName="CarTaxiFront"
          text="Taxi"
          goTo={goTo}
          className="bg-yellow-400"
        />
      </div>
      <TalkingHeadComponent
        text={message}
        mode="base"
        cameraView="head"
      />
    </div >
  );
}
