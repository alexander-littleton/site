import styled from "styled-components";
import { DeviconProps } from "./types";

const DeviconStyled = styled.span`
  text-align: center;
  margin: 0em 0.1em 0em 0.1em;
  background: linear-gradient(to right, #ee77d0, #008cff, #e6e6e6, #e6e6e6);
  background-size: 300%;
  background-position: 100%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: background-position ease-out 0.5s;
  &:hover {
    background-position: 0%;
  }
`;

export default function Devicon(props: DeviconProps) {
  return (
    <DeviconStyled>
      <i className={props.type} />
    </DeviconStyled>
  );
}
