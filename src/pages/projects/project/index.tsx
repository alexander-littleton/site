import styled from "styled-components";
import Devicon from "../../../components/Devicon";
import { DeviconItem } from "../../../components/Devicon/types";

const ProjectWrapper = styled.div`
  align-items: center;
`;

const ProjectThumbnail = styled.img`
  width: 3em;
  height: 3em;
`;

const ProjectDescription = styled.img`
  font-size: 2em;
`;

const DeviconContainer = styled.div``;

const GithubLink = styled.a``;

const LiveDemoLink = styled.a`
  background-color: green;
  color: #e3e3e3;
`;

interface ProjectProps {
  imageSource: string;
  stack: DeviconItem[];
  description: string;
  gitHubLink: string;
  liveDemoLink?: string;
}

export default function Project(props: ProjectProps) {
  props.stack.map((item) => {
    return <Devicon type={item} />;
  });

  return (
    <ProjectWrapper>
      <ProjectThumbnail src={props.imageSource} />
      <ProjectDescription />
      <DeviconContainer></DeviconContainer>
      <GithubLink />
      {props.liveDemoLink ? (
        <LiveDemoLink href={props.liveDemoLink}>Demo</LiveDemoLink>
      ) : null}
    </ProjectWrapper>
  );
}
