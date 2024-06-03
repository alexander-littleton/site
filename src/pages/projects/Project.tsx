import styled from "styled-components";
import Devicon, { SupportedIcons } from "../../components/Devicon";

const ProjectWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  border-bottom: 2px solid white;
  gap: 1em;
  padding: 1em;
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

const DeviconContainer = styled.div`
  display: flex;
  gap: 0.5em;
  font-size: 2em;
`;

const LinkContainer = styled.span`
  display: flex;
  gap: 3em;
`;

const ExternalLink = styled.a`
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
  transition: background-position-x 1.3s;
  user-select: none;
  cursor: pointer;
  &:hover {
    background-position-x: 0%;
  }
`;

export default function Project({
  title,
  imageSource,
  stack,
  description,
  gitHubLink,
  liveDemoLink,
}: {
  title: string;
  imageSource?: string;
  stack: SupportedIcons[];
  description: string;
  gitHubLink: string;
  liveDemoLink?: string;
}) {
  return (
    <ProjectWrapper>
      <ProjectTitle>{title}</ProjectTitle>
      {imageSource && <ProjectThumbnail src={imageSource} />}
      <ProjectDescription>{description}</ProjectDescription>
      <DeviconContainer>
        {stack.map((item) => (
          <Devicon type={item} key={title + item} />
        ))}
      </DeviconContainer>
      <LinkContainer>
        <ExternalLink href={gitHubLink} target="_blank">
          View Repo
        </ExternalLink>
        {liveDemoLink ? (
          <ExternalLink href={liveDemoLink} target="_blank">
            Go to Demo
          </ExternalLink>
        ) : null}
      </LinkContainer>
    </ProjectWrapper>
  );
}
