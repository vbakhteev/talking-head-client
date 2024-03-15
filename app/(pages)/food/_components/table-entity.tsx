import Image from "next/image";
import Link from "next/link";

export const TableEntity = ({ foodPlace }: { foodPlace: FoodPlace } ) => {
    return (
      <Link href={`/food?adress=${foodPlace.adress}`}>
        <div className="bg-white rounded-lg flex flex-col items-left p-3 space-y-1">
          <div className="relative">
            <Image
              alt="Food place"
              src={foodPlace.imgUrl}
              width={200}
              height={100}
              className="rounded-xl w-full"
            />
          </div>
          <p className="text-xl font-medium">{foodPlace.name}</p>
          <p className="text-xs text-gray-500">{foodPlace.restaurantType}</p>
          <p className="text-xs">{foodPlace.adress}</p>
          <p className="text-xs">
            Открыто до <span className="font-semibold">{foodPlace.openUtil}</span>
          </p>
        </div>
      </Link>
    )
}
  
export type FoodPlace = {
    name: string;
    imgUrl: string;
    restaurantType: string;
    adress: string;
    openUtil: string;
}