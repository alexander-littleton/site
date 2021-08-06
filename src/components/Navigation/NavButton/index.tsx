import styled from "styled-components";

const NavButtonWrapper = styled.div`
  display: flex;
`;

const NB = styled.a`
  border: none;
  background: linear-gradient(to right, #ee77d0, #008cff, #e6e6e6, #e6e6e6);
  background-size: 300%;
  background-position-x: 100%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-size: 1.3em;
  margin-left: 0.3em;
  margin-right: 0.3em;
  padding: 0px 0.3em 0px 0.3em;
  transition: background-position-x 1.3s;
  user-select: none;
  cursor: pointer;
  &:hover {
    background-position-x: 0%;
  }
`;

export default function NavButton(props: { text: string }) {
  return (
    <NavButtonWrapper>
      <NB>{props.text}</NB>
    </NavButtonWrapper>
  );
}
