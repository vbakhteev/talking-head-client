import { Avatar } from "./ui/avatar";

export const TalkingHeadComponent = ({ text, mode }: { text: string, cameraView: string, mode: string }) => {

  return (
    <div className="flex justify-center items-center mx-5 gap-x-5">
      <div className="bg-blue-400 rounded-full h-20 w-20">
        <Avatar text={text} cameraView="head" mode={mode} />
      </div>
      <div className="bg-blue-500 text-white py-4 px-6 rounded-r-3xl rounded-tl-3xl mb-8">
        {text}
      </div>
    </div>
  );
}
