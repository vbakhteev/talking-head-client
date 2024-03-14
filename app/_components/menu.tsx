import { VisualButton } from "@/components/visual-button";



export const Menu = () => {
    return (
        <div className="bg-transparent w-full h-100">
            <VisualButton
                iconName="Soup"
                text="Поесть"
                goTo="/food"
            />
        </div>
    );
}