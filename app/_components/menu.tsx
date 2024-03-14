import { VisualButton } from "@/components/visual-button";



export const Menu = () => {
    return (
        <div className="bg-transparent w-full absolute bottom-0 py-5 px-3 flex flex-col gap-y-2">
            <div className="w-full flex items-center justify-between">
                <VisualButton
                    iconName="Soup"
                    text="Как добраться"
                    goTo="/navigation"
                />
                <VisualButton
                    iconName="Soup"
                    text="Поесть"
                    goTo="/food"
                />
                <VisualButton
                    iconName="Bus"
                    text="Расписание"
                    goTo="/schedule"
                />
            </div>
            <div className="w-full flex items-center justify-center gap-x-10">
                <VisualButton
                    iconName="Ticket"
                    text="Чем заняться"
                    goTo="/tousism"
                />
                <VisualButton
                    iconName="Info"
                    text="Спросить"
                    goTo="/info"
                />
            </div>
        </div>
    );
}