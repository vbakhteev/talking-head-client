import { Avatar } from "@/components/ui/avatar";
import { Menu } from "./_components/menu";

export default function Home() {
  // TODO chose the mode of the avatar randomly
  const modelMode = "football";
  
  return (
    <div className="flex flex-col">
      <div className="w-full" style={{ height: "50rem" }}>
        <Avatar
          cameraView="full"
          mode={modelMode}
        />
      </div>
      <div className="sticky bottom-0">
        <Menu />
      </div>
    </div >
  );
}
