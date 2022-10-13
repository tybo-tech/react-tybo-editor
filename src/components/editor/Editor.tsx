import React from "react";
import "./Editor.css";
// import Draggable from 'react-draggable'
import { Element } from "./Element";
import Navigation from "../layout/Navigation";
import Propeties from "../layout/Propeties";
import TopMenu from "../layout/TopMenu";
// import { SelectionArea } from "../styles/SelectionArea";
// import { SelectionAreaKnob } from "../styles/SelectionAreaKnob";
import { elements } from "./data/data";
import {
  getElement,
  calculateSelectorCords,
} from "../../functions/element-helper";
import { ElementModel } from "../../models/ElementModel";
import { getNewFlexItem } from "../../functions/element-creator";
export const Editor: React.FC = () => {
  // States
  const [root, setRoot] = React.useState(elements);
  const [selectedElements, setSelectedElements] = React.useState<
    ElementModel[]
  >([]);
  const [shift, setShift] = React.useState(false);

  // Hooks
  React.useEffect(() => {
    document.addEventListener("keydown", detectKey, true);
    document.addEventListener("keyup", keyup, true);
  }, []);

  // Hooks Methods
  const detectKey = (e: any) => {
    if (e.key === "Shift") {
      setShift(true);
    }
  };
  const keyup = (e: any) => {
    setShift(false);
  };

  // Handle events

  calculateSelectorCords(selectedElements);

  const position = (itemPosition: any) => {
    // console.log(itemPosition);
  };
  const handleMouseDown = (e: any) => {
    if (!shift) return;
    debugger
    const id = e.target.id;
    if (id && root.elements) {
      const object = getElement(id, root.elements);
      if (object) {
        console.log(object);
        object.isSelected = !object.isSelected;
        setSelectedElements((data: any) => {
          const oldItem = data.find((x: any) => x.id === id);
          if (oldItem) {
            return data.filter((x: any) => x.id !== id);
          } else {
            object.Element = {
              offsetHeight: e.target.offsetHeight,
              offsetTop: e.target.offsetTop,
              offsetLeft: e.target.offsetLeft,
              offsetWidth: e.target.offsetWidth,
            };
            return [...data, object];
          }
        });
      }
    }
  };
  console.log(selectedElements);

  const addFlex = () => {
    // alert("flex")
    // Array.from(selectedElements).map((x: any) => (x.id = x.id + "232"));
    if (!selectedElements || !selectedElements.length) return;

    const group = getNewFlexItem(
      selectedElements[0].parentId,
      selectedElements
    );
    setSelectedElements([]);

    console.log("flex: ", group);
    setRoot((prevState) => {
      const newState = prevState;
      if (
        newState.elements &&
        !newState.elements.find((x) => x.id === group.id)
      )
        newState.elements.push(group);
      return newState;
    });
  };

  const element = (
    <Element
      element={root}
      handleMouseDown={handleMouseDown}
      position={position}
    ></Element>
  );
  return (
    <>
      <div className="_editor">
        <div className="top-menu">
          <TopMenu />
        </div>
        {/* {
          <Draggable nodeRef={nodeRef}>
            <SelectionArea ref={nodeRef}
              top="500px"
              left="1000px"
              width="400px"
              height="100px"
            />
          </Draggable>
        } */}
        <div className="flex-box">
          <div className="_nav">
            <Navigation element={root}   handleMouseDown={handleMouseDown}/>
          </div>

          <div className="body">{element}</div>
          <Propeties selectedElements={selectedElements} addFlex={addFlex} />
        </div>
      </div>
    </>
  );
};
