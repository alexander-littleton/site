import styled from "styled-components";
import Devicon from "../../components/Devicon";

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
        <Devicon type="react" />
        <Devicon type="typescript" />
        <Devicon type="go" />
        <Devicon type="graphQl" />
        <Devicon type="mongo" />
        <Devicon type="python" />
      </DeviconRow>
    </HomeWrapper>
  );
}
