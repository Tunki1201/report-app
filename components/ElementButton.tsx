import { Button } from "./ui/button";

interface ElementButtonProps {
    section: string;
    element: string;
    addElement: (section: string, element: string) => void;
}

const ElementButton: React.FC<ElementButtonProps> = ({ section, element, addElement }) => {
    return (
        <Button
            className="mb-2"
            onClick={() => addElement(section, element)}
        >
            Add {element}
        </Button>
    );
};

export default ElementButton;
