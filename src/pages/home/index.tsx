import styled from "styled-components";
import Devicon from "../../components/Devicon";
import { DeviconItem } from "../../components/Devicon/types";

const AboutBlurb = styled.p`
  font-size: 1.8em;
  text-align: center;
  width: 75%;
`;

const DeviconRow = styled.div`
  text-align: center;
  margin-top: 3em;
`;

const HomeWrapper = styled.div`
  margin-top: 4em;
`;

export default function Home() {
  return (
    <HomeWrapper>
      <AboutBlurb>
        I'm a software engineer who got his start building tools for digital ad
        performance data analysis. I currently work mostly with React/TypeScript
        and utilize GraphQL for API calls.{" "}
        <a href="https://www.github.com/alexander-littleton">GitHub</a>
      </AboutBlurb>
      <div className="parent"></div>
      <DeviconRow>
        <Devicon type={DeviconItem.react} />
        <Devicon type={DeviconItem.typeScript} />
        <Devicon type={DeviconItem.graphQL} />
        <Devicon type={DeviconItem.postGreSQL} />
        <Devicon type={DeviconItem.python} />
        <Devicon type={DeviconItem.git} />
      </DeviconRow>
    </HomeWrapper>
  );
}
