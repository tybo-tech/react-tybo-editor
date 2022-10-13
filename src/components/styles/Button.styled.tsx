import styled from "styled-components";
type Props = {
    background: string
    border: string
    color: string
    position: string
    bottom: string
    top: string
    left: string
    right: string
    isSelected: boolean
}
export const Button = styled.button<Props>`
width: fit-content;
padding: 1rem 2rem;
height: fit-content;
touch-action: none;
background: ${(props)=> props.background};
color: ${(props)=> props.color};
border: ${(props)=> props.isSelected ? '2px solid #116dff !important' : props.border || 'none'};
position: ${(props)=> props.position};
bottom: ${(props)=> props.bottom|| 'unset'};
top: ${(props)=> props.top|| 'unset'};
left: ${(props)=> props.left|| 'unset'};
right: ${(props)=> props.right|| 'unset'};
`

// background: ${(props: { background: any; })=> props.background};
/* color: ${(props: { color: any; })=> props.color || 'red'};
border: ${(props: { border: any; })=> props.border || '3px solid black'};
position: ${(props: { position: any; })=> props.position};
bottom: ${(props: { bottom: any; })=> props.bottom || 'unset'};
top: ${(props: { top: any; })=> props.top || 'unset'};
left: ${(props: { left: any; })=> props.left || 'unset'};
right: ${(props: { right: any; })=> props.right || 'unset'}; */