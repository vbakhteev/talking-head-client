"use client";

import { TalkingHead } from "@/components/talking-head";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { FoodPlace, TableEntity } from "./_components/table-entity";

export default function Home() {
  const router = useRouter();
  const params = useSearchParams();
  const adress = params.get('adress');

  const message = adress ? 'Люди советуют здесь попробовать губадию с чак-чаком' : 'Вот несколько татарских рестаранов, которые я рекоммендую';
  useEffect(() => {
    if (!adress) return;

    // Redirect in 5 seconds
    const redirectTimeout = setTimeout(() => {
      router.push(`/map?destination=${adress}`);
    }, 5000);
  
    return () => clearTimeout(redirectTimeout);
  }, [router, adress])

  return (
    <div className="h-full flex flex-col">
      <div className="grid grid-cols-2 gap-2">
        {foodPlaces.map((foodPlace) => (
          <TableEntity
            key={foodPlace.name}
            foodPlace={foodPlace}
          />
        ))}
      </div>
      <TalkingHead
        text={message}
      />
    </div>
  );
}

const foodPlaces: FoodPlace[] = [
  {
    name: "Рубаи",
    imgUrl: "/food/1.jpeg",
    restaurantType: "Халяльные рестораны",
    adress: "Профсоюзная, 23/12",
    openUtil: "23:00"
  },
  {
    name: "Панорама",
    imgUrl: "/food/2.jpeg",
    restaurantType: "Рестораны у воды",
    adress: "просп. Фатыха Амирхана, 1б, РК Ривьера, 4 этаж",
    openUtil: "00:00"
  },
  {
    name: "Султанат",
    imgUrl: "/food/3.jpeg",
    restaurantType: "Татарская кухня",
    adress: "Нурсултана Назарбаева, 35, корп. 1",
    openUtil: "00:00"
  },
  {
    name: "Татарская усадьба",
    imgUrl: "/food/4.jpeg",
    restaurantType: "Халяльные рестораны",
    adress: "Шигабутдина Марджани, 8",
    openUtil: "23:00"
  },
  {
    name: "Печь",
    imgUrl: "/food/5.jpeg",
    restaurantType: "Татарская кухня",
    adress: "Шигабутдина Марджани, 10, РК «Театр национальной кухни»",
    openUtil: "00:00"
  },
  {
    name: "Туган авылым",
    imgUrl: "/food/6.jpeg",
    restaurantType: "Халяльные рестораны",
    adress: "Туфана Миннуллина, 14",
    openUtil: "00:00"
  }
];