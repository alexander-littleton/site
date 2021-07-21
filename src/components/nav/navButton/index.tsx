import styled from "styled-components";

const NavButtonWrapper = styled.div`
    display: flex;
`;


export default function NavButton(props: { text: string }) {
    return (
        <NavButtonWrapper>
            <button>{props.text}</button>
        </NavButtonWrapper>
    )
}