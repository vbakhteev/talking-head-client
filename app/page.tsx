import { Avatar } from "@/components/ui/avatar";
import { Menu } from "./_components/menu";

export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="w-full" style={{ height: "90rem" }}>
        <Avatar
          cameraView="full"
          mode="base"
        />
      </div>
      <Menu />
    </div >
  );
}
