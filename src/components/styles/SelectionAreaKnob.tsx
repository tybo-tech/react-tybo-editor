import styled from "styled-components";
type Props = {
  background?: string;
  bottom?: string;
  top?: string;
  left?: string;
  right?: string;
  cursor?: string;
};
export const SelectionAreaKnob = styled.span<Props>`
  background-color: #fff;
  border: 1px solid #116dff;
  border-radius: 4px;
  box-shadow: 0 1px 1px 0 rgb(0 6 36 / 20%);
  box-sizing: border-box;
  height: 8px;
  position: absolute;
  width: 8px;
  right: ${(props: any) => props.right || "unset"};
  left: ${(props: any) => props.left || "unset"};
  top: ${(props: any) => props.top || "unset"};
  bottom: ${(props: any) => props.bottom || "unset"};
  cursor: ${(props: any) => props.cursor || "default"};
  background: ${(props: any) => props.background || "#fff"};
`;
