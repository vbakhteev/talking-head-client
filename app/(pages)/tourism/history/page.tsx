import { TalkingHeadComponent } from "@/components/talking-head";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const message = 'Казанскую Архитектуру ты никогда не забудешь';

  return (
    <div className="h-full flex flex-col pb-44">
      <div className="flex flex-col gap-y-3">
        {places.map((place) => (
          <Link key={place.name} href={`/map?destination=${place.adress}`}>
            <div className="bg-white hover:bg-slate-200 rounded-lg flex flex-col items-center p-3 shadow-lg">
              <AspectRatio ratio={4 / 3}>
                <Image
                  alt="Touristic place"
                  src={place.imgUrl}
                  fill
                  className="rounded-xl object-cover"
                />
              </AspectRatio>
              <p className="font-medium">{place.name}</p>
            </div>
          </Link>
        ))}
      </div>
      <TalkingHeadComponent
        text={message}
        cameraView="head"
        mode="base"
      />
    </div>
  );
}

const places: Place[] = [
  {
    'name': 'Казанский кремль',
    'imgUrl': '/tourism/history/1.jpeg',
    'adress': 'Казанский Кремль',
  },
  {
    'name': 'Чаша',
    'imgUrl': '/tourism/history/2.jpeg',
    'adress': 'Казань, ул. Кремлевская, 2',
  },
  {
    'name': 'Канал Булак',
    'imgUrl': '/tourism/history/3.jpeg',
    'adress': 'Казань, ул. Лево-Булачная, 2',
  },
];

type Place = {
  name: string;
  imgUrl: string;
  adress: string;
}
