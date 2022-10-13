import styled from "styled-components";
type Props = {
top: string;
    left: string;
    height: string;
    width: string;
}
export const SelectionArea = styled.span<Props>`
border: 1px solid #116dff;
    cursor: pointer;
    pointer-events: none;
    position: absolute;
    z-index: 10000;
    width: ${(props)=> props.width || '373.812px'};
    height: ${(props)=> props.height || '53.0312px'};
    top: ${(props)=> props.top || 0};
    left: ${(props)=> props.left || 0};

`