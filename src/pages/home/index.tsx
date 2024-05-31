import styled from "styled-components";
import Devicon from "../../components/Devicon";
import { useEffect, useState } from "react";

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: left;
  @media screen and (min-width: 480px) {
    height: 100%;
  }
`;

const DeviconRow = styled.div`
  text-align: center;
  word-wrap: break-word;
  font-size: 4em;
  padding: 24px;
`;

const Bio = styled.p`
  font-size: 2em;
  flex-grow: 1;
`;

export default function Home() {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const bio =
    `Hey there! ` +
    `I'm a full stack software engineer based in Philadelphia, PA with experience in adtech and edtech startups. ` +
    `Through my past work I've specialized in reactive and accessible UI, automated testing, and layered architecture.`;
  useEffect(() => {
    if (currentIndex < bio.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + bio[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, 30);

      return () => clearTimeout(timeout);
    }
  }, [bio, currentIndex]);

  return (
    <HomeWrapper>
      <Bio>{currentText}</Bio>
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
