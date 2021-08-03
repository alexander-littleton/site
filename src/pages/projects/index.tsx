import styled from "styled-components";
import Project from "./project";

const AboutWrapper = styled.div`
  display: grid;
  align-items: center;
`;

export default function Projects() {
  return (
    <AboutWrapper>
      <Project
        imageSource=""
        stack={[]}
        gitHubLink=""
        liveDemoLink=""
        description=""
      />
    </AboutWrapper>
  );
}
