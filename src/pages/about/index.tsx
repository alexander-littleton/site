import styled from "styled-components";

const AboutBlurb = styled.p`
  font-size: 1.8em;
  text-align: center;
  width: 75%;
`;

const IconRow = styled.div`
  text-align: center;
  margin-top: 3em;
}
`;

export default function About() {
  return (
    <div>
      <div className="parent">
        <h1>About Me</h1>
      </div>
      <AboutBlurb>
        I'm a software engineer who got his start building tools for data
        analysis. I currently work mostly with React/TypeScript and utilize
        GraphQL for API calls.{" "}
        <a href="https://www.github.com/littale12">GitHub</a>
      </AboutBlurb>
      <div className="parent"></div>
      <IconRow>
        <i className="icon devicon-react-original-wordmark"></i>
        <i className="icon devicon-typescript-plain"></i>
        <i className="icon devicon-graphql-plain-wordmark"></i>
        <i className="icon devicon-postgresql-plain-wordmark"></i>
        <i className="icon devicon-python-plain-wordmark"></i>
        <i className="icon devicon-git-plain-wordmark"></i>
      </IconRow>
    </div>
  );
}
