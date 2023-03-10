import styled from "styled-components";
import Devicon from "../../../components/Devicon";
import { DeviconItem } from "../../../components/Devicon/types";

const ProjectWrapper = styled.div`
  align-items: center;
  margin: auto;
  display: flex;
  flex-direction: column;
  margin-top: 1em;
  margin-bottom: 1em;
  position: relative;
  border-bottom: 2px solid white;
`;

const ProjectTitle = styled.h2`
  font-size: calc((0.3em + 1vmin) + (0.3em + 1vmax));
  color: #e3e3e3;
  text-align: center;
`;

const ProjectThumbnail = styled.img`
  max-width: 100%;
`;

const ProjectDescription = styled.p`
  font-size: calc((0.4em + 0.3vmin) + (0.4em + 0.3vmax));
`;

const BottomSpacer = styled.div`
  height: calc((2.5em + 1vmin) + (2.5em + 1vmax));
`;

const BottomContainer = styled.div`
  position: absolute;
  bottom: 2em;
  text-align: center;
`;

const DeviconContainer = styled.div`
  font-size: calc((1em + 1vmin) + (1em + 1vmax)); ;
`;

const LinkContainer = styled.span``;

const GithubLink = styled.a`
  border: none;
  background: linear-gradient(to right, #ee77d0, #008cff, #e6e6e6, #e6e6e6);
  background-size: 300%;
  background-position-x: 100%;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-size: 1.3em;
  margin-left: 0.3em;
  margin-right: 0.3em;
  padding: 0px 0.3em 0px 0.3em;
  transition: background-position-x 1.3s;
  user-select: none;
  cursor: pointer;
  &:hover {
    background-position-x: 0%;
  }
`;

const LiveDemoLink = styled.a`
  border: none;
  background: linear-gradient(to right, #ee77d0, #008cff, #e6e6e6, #e6e6e6);
  background-size: 300%;
  background-position-x: 100%;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-size: 1.3em;
  margin-left: 0.3em;
  margin-right: 0.3em;
  padding: 0px 0.3em 0px 0.3em;
  transition: background-position-x 1.3s;
  user-select: none;
  cursor: pointer;
  &:hover {
    background-position-x: 0%;
  }
`;
interface ProjectProps {
  title: string;
  imageSource: string;
  stack: DeviconItem[];
  description: string;
  gitHubLink: string;
  liveDemoLink?: string;
}

export default function Project(props: ProjectProps) {
  return (
    <ProjectWrapper>
      <ProjectTitle>{props.title}</ProjectTitle>
      <ProjectThumbnail src={props.imageSource} />
      <ProjectDescription>{props.description}</ProjectDescription>
      <BottomSpacer />
      <BottomContainer>
        <DeviconContainer>
          {props.stack.map((item) => {
            return <Devicon type={item} />;
          })}
        </DeviconContainer>
        <LinkContainer>
          <GithubLink href={props.gitHubLink} target="_blank">
            Repo
          </GithubLink>
          {props.liveDemoLink ? (
            <LiveDemoLink href={props.liveDemoLink} target="_blank">
              Demo
            </LiveDemoLink>
          ) : null}
        </LinkContainer>
      </BottomContainer>
    </ProjectWrapper>
  );
}
