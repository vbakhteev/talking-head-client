"use client";

import { TalkingHeadComponent } from "@/components/talking-head";
import { Separator } from "@/components/ui/separator";
import { VisualButton } from "@/components/visual-button";
import { useSearchParams } from "next/navigation";



export default function Home() {
  const searchParams = useSearchParams();
  const destination = searchParams.get('destination');

  const message = `Вот расписание ближайших автобусов.`
  return (
    <div className="h-full flex flex-col justify-end items-center gap-y-4 pb-5 pt-9">
      <div className="p-5 bg-white">
        <table>
            <tr>
                <th>Конечная остановка</th>
                <th>Номер автобуса</th>
                <th>Время</th>
            </tr>
            <Separator className="my-4" />
            <tr>
                <td>Толстого (Карла Маркса)</td>
                <td>1</td>
                <td>14:15</td>
            </tr>
            <tr>
                <td>Гоголя (Карла Маркса)</td>
                <td>23</td>
                <td>14:25</td>
            </tr>
            <tr>
                <td>пл. Свободы</td>
                <td>144</td>
                <td>14:32</td>
            </tr>
        </table>
      </div>
      <VisualButton
        iconName="Home"
        text="На главную"
        goTo="/"
        className="mt-6"
      />
      <TalkingHeadComponent
        text={message}
        mode="base"
        cameraView="head"
      />
    </div>
  );
}
