import React from "react";
import Draggable from "react-draggable";
import { ElementModel } from "../../models/ElementModel";
import "./Navigation.css";
export interface Props {
  element: ElementModel;
  handleMouseDown: (cords: any) => void;
}
export const Navigation: React.FC<Props> = ({ element, handleMouseDown }) => {
  const nodeRef = React.useRef(null);
  return (
    <div className="navigation">
      {(element.type === "p" ||
        element.type === "button" ||
        element.type === "h1") && (
        <Draggable nodeRef={nodeRef} onMouseDown={handleMouseDown}>
          <p  ref={nodeRef} id={element.id}>
            {element.name}
          </p>
        </Draggable>
      )}
      {element.type === "div" && (
        <div className="_container" key={element.id} {...element.styles}>
        
          <Draggable nodeRef={nodeRef}>
          <p  ref={nodeRef}>
            <b>{element.name}</b>
          </p>
            </Draggable>
          {element.elements &&
            element.elements.map((child: ElementModel) => {
              return (
                <Navigation
                  handleMouseDown={handleMouseDown}
                  key={child.id}
                  element={child}
                />
              );
            })}
        </div>
      )}
      {element.type === "flex-layout" && (
        <div className="_container" {...element.styles}>
          <Draggable nodeRef={nodeRef}> 
          <p  ref={nodeRef}>
            <b><i className="bi bi-bar-chart-fill"></i>{element.name}</b>
          </p>
            </Draggable>
          {element.elements &&
            element.elements.map((element: ElementModel) => {
              return (
                <Navigation
                  handleMouseDown={handleMouseDown}
                  key={element.id}
                  element={element}
                />
              );
            })}
        </div>
      )}
    </div>
  );
};

export default Navigation;
