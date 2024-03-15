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
      router.push(`/map?adress=${adress}`);
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
    imgUrl: "https://img03.rl0.ru/afisha/1064x1064i/s5.afisha.ru/ms/MIpZc36-LtZng9GCC5ppp2_gvWn0QiyoqqhWlS6M-qU.jpg",
    restaurantType: "Халяльные рестораны",
    adress: "Профсоюзная, 23/12",
    openUtil: "23:00"
  },
  {
    name: "Панорама",
    imgUrl: "https://img01.rl0.ru/afisha/1064x1064i/rests.afisha.ru/uploads/images/8/1b/81b5e373c5394e4a9cf2835e8bbcd37b.JPG",
    restaurantType: "Рестораны у воды",
    adress: "просп. Фатыха Амирхана, 1б, РК Ривьера, 4 этаж",
    openUtil: "00:00"
  },
  {
    name: "Султанат",
    imgUrl: "https://img03.rl0.ru/afisha/1064x1064i/s2.afisha.ru/ms/L80kTQGPUCowqKqN_KDwkbiM36pw-p1dsRq55TygOIg.jpg",
    restaurantType: "Татарская кухня",
    adress: "Нурсултана Назарбаева, 35, корп. 1",
    openUtil: "00:00"
  },
  {
    name: "Татарская усадьба",
    imgUrl: "https://img01.rl0.ru/afisha/1064x1064i/s2.afisha.ru/ms/BDrWaMFXf3XgEzX-S5Em3EyRHK-bKMQ-qKrX33WWcyc.jpg",
    restaurantType: "Халяльные рестораны",
    adress: "Шигабутдина Марджани, 8",
    openUtil: "23:00"
  },
  {
    name: "Печь",
    imgUrl: "https://img03.rl0.ru/afisha/1064x1064i/www.afisha.ru/uploads/53dc94042ea54ed7a0012caa11e4c9a4.jpg",
    restaurantType: "Татарская кухня",
    adress: "Шигабутдина Марджани, 10, РК «Театр национальной кухни»",
    openUtil: "00:00"
  },
  {
    name: "Туган авылым",
    imgUrl: "https://img04.rl0.ru/afisha/1064x1064i/s1.afisha.ru/mediastorage/4d/d9/4b06efe87b684f958a438f37d94d.jpg",
    restaurantType: "Халяльные рестораны",
    adress: "Туфана Миннуллина, 14",
    openUtil: "00:00"
  }
];