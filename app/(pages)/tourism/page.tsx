import { TalkingHeadComponent } from "@/components/talking-head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const message = 'Чем интересно заняться?';

  return (
    <div className="h-full flex flex-col">
      <div className="grid grid-cols-2 gap-2">
        {tourismTypes.map((tourismType) => (
          <Link key={tourismType.name} href={tourismType.url}>
            <div className="bg-white rounded-lg flex flex-col items-center p-3 shadow-md">
              <div className="relative">
                <Image
                  alt="Tourism type"
                  src={tourismType.imgUrl}
                  height={100}
                  width={200}
                  className="rounded-xl w-full"
                />
              </div>
              <p className="font-medium">{tourismType.name}</p>
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

const tourismTypes: TourismType[] = [
  {
    'name': 'Исторические места',
    'imgUrl': '/tourism/1.png',
    'url': '/tourism/history',
  },
  {
    'name': 'Музеи',
    'imgUrl': '/tourism/2.jpeg',
    'url': '/tourism/museums',
  },
  {
    'name': 'Парки Развлечений',
    'imgUrl': '/tourism/3.jpeg',
    'url': '/tourism/amusement-parks',
  },
  {
    'name': 'Кинотеатры',
    'imgUrl': '/tourism/4.jpeg',
    'url': '/tourism/cinemas',
  },
  {
    'name': 'Парки',
    'imgUrl': '/tourism/5.jpeg',
    'url': '/tourism/parks',
  },
  {
    'name': 'Спортивные мероприятия',
    'imgUrl': '/tourism/6.jpg',
    'url': '/tourism/sport-events',
  },
];

type TourismType = {
  name: string;
  imgUrl: string;
  url: string;
}
