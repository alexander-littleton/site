import styled from "styled-components";

const Tagline = styled.p`
  font-size: 2em;
`;

export default function Home() {
  return (
    <div>
      <Tagline>Software Engineer</Tagline>
      <Tagline>Philadelphia, PA</Tagline>
    </div>
  );
}
