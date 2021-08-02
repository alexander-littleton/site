import styled from "styled-components";

const NavButtonWrapper = styled.div`
  display: flex;
`;

const NB = styled.button`
  border-image-source: linear-gradient(to right, #ee77d0, #008cff);
  border-image-slice: 1;
  border-width: 2px;
  background: linear-gradient(45deg, #ee77d0, #008cff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: "Outrun";
  font-size: 1em;
  margin-left: 0.3em;
  margin-right: 0.3em;
  padding: 0px 0.3em 0px 0.3em;
  &:hover {
    cursor: pointer;
    -webkit-text-fill-color: #e6e6e6;
    border-color: #e6e6e6;
    border-image-source: none;
  }
`;

export default function NavButton(props: { text: string }) {
  return (
    <NavButtonWrapper>
      <NB>{props.text}</NB>
    </NavButtonWrapper>
  );
}
