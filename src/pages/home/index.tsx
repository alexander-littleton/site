import styled from "styled-components";
import Devicon from "../../components/Devicon";
import { DeviconItem } from "../../components/Devicon/types";

const HomeWrapper = styled.div`
  justify-content: center;
  align-items: center;
  margin-top: 4em;
`;

const DeviconRow = styled.div`
  text-align: center;
  margin-top: 1em;
  word-wrap: break-word;
  font-size: 4em;
`;

export default function Home() {
  return (
    <HomeWrapper>
      <DeviconRow>
        <Devicon type={DeviconItem.react} />
        <Devicon type={DeviconItem.typeScript} />
        <Devicon type={DeviconItem.go} />
        <Devicon type={DeviconItem.graphQL} />
        <Devicon type={DeviconItem.mongoDB} />
        <Devicon type={DeviconItem.python} />
      </DeviconRow>
    </HomeWrapper>
  );
}
