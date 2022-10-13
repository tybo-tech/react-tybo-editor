import styled from "styled-components";
type Props = {
    background: string;
    position: string;
    bottom: string;
    top: string;
    left: string;
    right: string;
    display: string;
    padding: string;
    height: string;
    width: string;
    gap: string;
    isSelected: boolean
}
export const Container = styled.div<Props>`
touch-action: none;
background: ${(props)=> props.background};
padding: ${(props)=> props.padding};
width: ${(props)=> props.width};
border: ${(props)=> props.isSelected ? '2px solid #116dff !important' :  'none'};
height: ${(props)=> props.height};
display: ${(props)=> props.display};
position: ${(props)=> props.position};
gap: ${(props)=> props.gap || 'unset'};
bottom: ${(props)=> props.bottom || 'unset'};
top: ${(props)=> props.top || 'unset'};
left: ${(props)=> props.left || 'unset'};
right: ${(props)=> props.right || 'unset'};
`