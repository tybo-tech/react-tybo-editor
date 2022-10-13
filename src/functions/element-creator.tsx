import { ElementModel } from "../models/ElementModel";
import { copyOneElement, getId } from "./element-copy";

export const getNewFlexItem = (
  parentId: string,
  selectedElements: ElementModel[]
): ElementModel => {
  const flex: ElementModel = {
    id: getId('flex-layout'),
    data: "",
    name: "Flex Layout",
    type: "flex-layout",
    parentId: parentId,
    isVisible: true,
    isSelected: false,
    isDraggable: true,
    styles: {
      background: "none",
      position: "absolute",
      display: "flex",
      gap: "1rem",
      top: "400px",
      left: "400px",
      width: "fit-content",
      height: "fit-content",
    },
    elements: [],
  };

  selectedElements.forEach((element) => {
    if (flex.elements) {
        const newElement = copyOneElement(element, flex.id);
        newElement.isDraggable = false;
        if(newElement && newElement.styles){
            newElement.styles['position'] = 'relative';
            delete newElement.styles['left'];
            delete newElement.styles['top'];
            delete newElement.styles['right'];
            delete newElement.styles['bottom'];
        }
   
        flex.elements.push(newElement);
      }
  });

  return flex;
};


