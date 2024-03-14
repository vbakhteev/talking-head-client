
export const TalkingHead = ({ text }: { text: string }) => {
    return (
        <div className="flex justify-center items-center mx-5 gap-x-5">
            <div className="bg-blue-400 rounded-full h-20 w-20">
                TODO: Head
            </div>
            <div className="bg-blue-500 text-white py-4 px-6 rounded-r-3xl rounded-tl-3xl mb-8">
                {text}
            </div>
        </div>
    );
}