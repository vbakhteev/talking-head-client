"use client";
import dynamic from 'next/dynamic';
import { TalkingHeadComponent } from "@/components/talking-head";
import { VisualButton } from "@/components/visual-button";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from 'react';
const YMap = dynamic(() => import('@/components/ui/map'), { ssr: false });


export default function Home() {
  const searchParams = useSearchParams();
  const destination = searchParams.get('destination');
  const goTo = `/qr?destination=${destination}`;

  const [coordinates, setCoordinates] = useState({ lng: 49.121501, lat: 55.787462 })

  useEffect(() => {
    if (destination === null) {
      return
    }
    fetch(`https://geocode-maps.yandex.ru/1.x/?apikey=${process.env.NEXT_PUBLIC_YMAP_API_KEY}&geocode=Казань, ${destination}&format=json`).then(res => res.json().then(
      (data) => {
        data.response.GeoObjectCollection.featureMember.forEach(element => {
          console.log(element)
          if (element.GeoObject.description.includes("Казань") || element.GeoObject.description.includes("Татарстан")) {
            const [lng, lat] = element.GeoObject.Point.pos.split(' ')
            console.log("result", { lng: lng, lat: lat })
            setCoordinates({ lng: lng, lat: lat });
          }
        });
        console.log(data)

      }
    )
    ).catch(console.error)
  }, [])



  const message = destination === null ? "Держите карту Казани" : `Вот где находится: ${destination}`

  return (
    <div className="">
      <div className="h-80 flex">
        <YMap coordinates={coordinates} />
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
