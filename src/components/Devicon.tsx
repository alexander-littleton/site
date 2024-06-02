import styled from "styled-components";

const StyledDevicon = styled.span`
  text-align: center;
  background: linear-gradient(to right, #ee77d0, #008cff, #e6e6e6, #e6e6e6);
  background-size: 300%;
  background-position: 100%;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: background-position ease-out 0.5s;
  &:hover {
    background-position: 0%;
  }
`;

export type SupportedIcons =
  | "typescript"
  | "python"
  | "javascript"
  | "react"
  | "graphQl"
  | "go"
  | "mongo";

const iconMap: Record<SupportedIcons, { icon: string; label: string }> = {
  typescript: { icon: "devicon-typescript-plain", label: "Typescript" },
  python: { icon: "devicon-python-plain-wordmark", label: "Python" },
  javascript: { icon: "devicon-javascript-plain", label: "Javascript" },
  react: { icon: "devicon-react-original-wordmark", label: "React" },
  graphQl: { icon: "devicon-graphql-plain-wordmark", label: "Graph QL" },
  go: { icon: "devicon-go-original-wordmark", label: "Go" },
  mongo: { icon: "devicon-mongodb-plain-wordmark", label: "Mongo DB" },
};

export default function Devicon({ type }: { type: SupportedIcons }) {
  const iconInfo = iconMap[type];
  return (
    <StyledDevicon>
      <i className={iconInfo.icon} role="img" aria-label={iconInfo.label} />
    </StyledDevicon>
  );
}
