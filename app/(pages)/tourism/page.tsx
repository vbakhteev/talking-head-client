import { TalkingHead } from "@/components/talking-head";
import Image from "next/image";

export default function Home() {
  const message = 'Чем интересно заняться?';

  return (
    <div className="h-full flex flex-col">
      <div className="grid grid-cols-2 gap-2">
        {tourismTypes.map((tourismType) => (
          <div
            key={tourismType.name}
            className="bg-white rounded-lg flex flex-col items-center p-3 shadow-md"
          >
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
        ))}
      </div>
      <TalkingHead
        text={message}
      />
    </div>
  );
}

const tourismTypes: TourismType[] = [
  {
    'name': 'Исторические места',
    'imgUrl': '/tourism/1.png',
  },
  {
    'name': 'Музеи',
    'imgUrl': '/tourism/2.jpeg',
  },
  {
    'name': 'Парки Развлечений',
    'imgUrl': '/tourism/3.jpeg',
  },
  {
    'name': 'Кинотеатры',
    'imgUrl': '/tourism/4.jpeg',
  },
  {
    'name': 'Парки',
    'imgUrl': '/tourism/5.jpeg',
  },
  {
    'name': 'Спортивные мероприятия',
    'imgUrl': '/tourism/6.jpg',
  },
];

type TourismType = {
  name: string;
  imgUrl: string;
}
