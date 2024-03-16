import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import Link from "next/link";

export const TableEntity = ({ foodPlace }: { foodPlace: FoodPlace } ) => {
    return (
      <Link
        href={`/food?adress=${foodPlace.adress}`}
        className="bg-white hover:bg-slate-200 rounded-lg flex flex-col items-left p-3 space-y-1 shadow-md"
      >
        <div className="relative">
          <AspectRatio ratio={16 / 9}>
            <Image
              alt="Food place"
              src={foodPlace.imgUrl}
              fill
              className="rounded-xl object-cover"
            />
          </AspectRatio>
        </div>
        <p className="text-xl font-medium">{foodPlace.name}</p>
        <p className="text-xs text-gray-500">{foodPlace.restaurantType}</p>
        <p className="text-xs">{foodPlace.adress}</p>
        <p className="text-xs">
          Открыто до <span className="font-semibold">{foodPlace.openUtil}</span>
        </p>
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