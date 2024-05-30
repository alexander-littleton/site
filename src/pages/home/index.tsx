import styled from "styled-components";
import Devicon from "../../components/Devicon";
import { DeviconItem } from "../../components/Devicon/types";

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const DeviconRow = styled.div`
  text-align: center;
  word-wrap: break-word;
  font-size: 4em;
`;

export default function Home() {
  return (
    <HomeWrapper>
      <p>
        Hey there! I'm a full stack software engineer based in Philadelphia, PA
      </p>
      <h2>Current Stack</h2>
      <DeviconRow>
        <Devicon type={DeviconItem.react} label="React" />
        <Devicon type={DeviconItem.typeScript} label="Typescript" />
        <Devicon type={DeviconItem.go} label="Go" />
        <Devicon type={DeviconItem.graphQL} label="Graph QL" />
        <Devicon type={DeviconItem.mongoDB} label="Mongo DB" />
        <Devicon type={DeviconItem.python} label="Python" />
      </DeviconRow>
    </HomeWrapper>
  );
}
