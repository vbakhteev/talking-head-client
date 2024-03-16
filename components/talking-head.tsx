import { Avatar } from "./ui/avatar";

export const TalkingHeadComponent = ({ text, mode }: { text: string, cameraView: string, mode: string }) => {

  return (
    <div className="flex items-end gap-x-5 fixed left-0 right-0 px-3 bottom-3 ">
      <div className="flex shrink-0 overflow-hidden rounded-b-full pt-4">
        <div className="flex bg-blue-400 rounded-full h-40 w-40">
            <Avatar text={text} cameraView="head" mode={mode} />
        </div>
      </div>  
      <div className="relative -top-3 bg-blue-500 text-white py-4 px-6 rounded-r-3xl rounded-tl-3xl">
        {text}
      </div>
    </div>
  );
}
