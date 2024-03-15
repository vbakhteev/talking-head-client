import { TalkingHead } from "@/components/talking-head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const message = 'Казанскую Архитектуру ты никогда не забудешь';

  return (
    <div className="h-full flex flex-col">
      <div className="flex flex-col gap-y-3">
        {places.map((place) => (
          <Link key={place.name} href={`/map?destination=${place.adress}`}>
            <div className="bg-white rounded-lg flex flex-col items-center p-3 shadow-lg">
              <div className="relative">
                <Image
                  alt="Tourism type"
                  src={place.imgUrl}
                  height={100}
                  width={200}
                  className="rounded-xl w-full"
                />
              </div>
              <p className="font-medium">{place.name}</p>
            </div>
          </Link>
        ))}
      </div>
      <TalkingHead
        text={message}
      />
    </div>
  );
}

const places: Place[] = [
  {
    'name': 'Казанский кремль',
    'imgUrl': '/tourism/history/1.jpeg',
    'adress': 'Казанский кремль',
  },
  {
    'name': 'Музеи',
    'imgUrl': '/tourism/history/2.jpeg',
    'adress': 'Казань, ул. Кремлевская, 2',
  },
  {
    'name': 'Парки Развлечений',
    'imgUrl': '/tourism/history/3.jpeg',
    'adress': 'Казань, ул. Лево-Булачная, 2',
  },
];

type Place = {
  name: string;
  imgUrl: string;
  adress: string;
}
