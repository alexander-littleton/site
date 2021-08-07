import styled from "styled-components";
import Devicon from "../../components/Devicon";
import { DeviconItem } from "../../components/Devicon/types";

const HomeWrapper = styled.div`
  justify-content: center;
  align-items: center;
  margin-top: 4em;
`;

const AboutBlurb = styled.p`
  font-size: 1.4em;
  text-align: center;
  width: 75%;
  margin: auto;
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
      <AboutBlurb>
        I'm a software engineer who got his start building tools for digital ad
        performance data analysis. I currently work mostly with React/TypeScript
        and utilize GraphQL for API calls.
      </AboutBlurb>
      <DeviconRow>
        <Devicon type={DeviconItem.react} />
        <Devicon type={DeviconItem.typeScript} />
        <Devicon type={DeviconItem.graphQL} />
        <Devicon type={DeviconItem.postGreSQL} />
        <Devicon type={DeviconItem.jQuery} />
        <Devicon type={DeviconItem.javaScript} />
        <Devicon type={DeviconItem.python} />
        <Devicon type={DeviconItem.git} />
      </DeviconRow>
    </HomeWrapper>
  );
}
