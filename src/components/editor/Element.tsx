import React from "react";
import "./Element.css";
import { Button } from "../styles/Button.styled";
import { Container } from "../styles/Container..styled";
import { useDrag } from "@use-gesture/react";
import { ElementModel } from "../../models/ElementModel";
export interface Props {
  element: ElementModel;
  position: (cords: any) => void;
  handleMouseDown: (cords: any) => void;
}

export const Element: React.FC<Props> = ({
  element,
  position,
  handleMouseDown,
}) => {
  // States
  const [elementPostion, setElementPostion] = React.useState({
    x: parseInt(element && element.styles && element.styles["left"]) || 0,
    y: parseInt(element && element.styles && element.styles["top"]) || 0,
  });
  // console.log(element.id, ' ==> ', element.styles["left"], elementPostion);

  const bindElementPostion = useDrag((params) => {
    setElementPostion({
      x: params.offset[0],
      y: params.offset[1],
    });
    position(elementPostion);
  });

  return (
    <>
      {element.type === "p" && (
        <p
          {...bindElementPostion()}
          style={{
            top: elementPostion.y,
            left: elementPostion.x,
          }}
        >
          {element.data}
        </p>
      )}
      {element.type === "div" && (
        <Container {...element.styles}>
          {element.elements &&
            element.elements.map((element: ElementModel) => {
              return (
                <Element
                  key={element.id}
                  element={element}
                  handleMouseDown={handleMouseDown}
                  position={position}
                />
              );
            })}
        </Container>
      )}
      {element.type === "flex-layout" && (
        <Container
        id={element.id}
          {...bindElementPostion()}
          isSelected={element.isSelected}
          onMouseDown={handleMouseDown}
          style={{
            top: elementPostion.y,
            left: elementPostion.x,
          }}
          {...element.styles}
        >
          {element.elements &&
            element.elements.map((element: ElementModel) => {
              return (
                <Element
                  key={element.id}
                  element={element}
                  handleMouseDown={handleMouseDown}
                  position={position}
                />
              );
            })}
        </Container>
      )}
      {element.type === "h1" && (
        <h1
          {...bindElementPostion()}
          style={{
            top: elementPostion.y,
            left: elementPostion.x,
          }}
        >
          {element.data}
        </h1>
      )}
      {element.type === "button" && element.isVisible && element.isDraggable && (
        <Button
          id={element.id}
          {...element.styles}
          isSelected={element.isSelected}
          {...bindElementPostion()}
          onMouseDown={handleMouseDown}
          style={{
            top: elementPostion.y,
            left: elementPostion.x,
          }}
        >
          {element.data}
        </Button>
      )}

      {element.type === "button" && element.isVisible && !element.isDraggable && (
        <Button
          id={element.id}
          {...element.styles}
          isSelected={element.isSelected}
          onMouseDown={handleMouseDown}
        >
          {element.data}
        </Button>
      )}
    </>
  );
};
