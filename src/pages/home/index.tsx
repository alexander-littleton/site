import styled from "styled-components";
import Devicon from "../../components/Devicon";
import { useEffect, useState } from "react";
import FadeIn from "../../components/FadeIn";

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

const Bio = styled.p`
  font-size: 1.5em;
  flex-grow: 1;
  white-space: pre-line;
`;

export default function Home() {
  document.title = "Alex Littleton";
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showDevicons, setShowDevicons] = useState(false);

  const bio =
    `Hey there!\n\n` +
    `I'm a Full Stack Software Engineer based out of Philadelphia, PA with experience in adtech and edtech startups. ` +
    `Through my past work I've specialized in reactivity, accessibility, automated testing, and layered architecture.\n\n` +
    `I spend a great deal of time trying out new technologies so be sure to check out my personal projects to get ` +
    `a good feel for what I've been up to.`;
  useEffect(() => {
    if (currentIndex < bio.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + bio[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, 8);

      if (currentIndex === bio.length - 1) {
        setShowDevicons(true);
      }

      return () => clearTimeout(timeout);
    }
  }, [bio, currentIndex]);

  return (
    <HomeWrapper>
      <Bio>{currentText}</Bio>
      {showDevicons && (
        <FadeIn
          style={{
            textAlign: "center",
            wordWrap: "break-word",
            fontSize: "3.5em",
            padding: "24px",
            display: "flex",
            gap: "0.1em",
          }}
        >
          <Devicon type="react" />
          <Devicon type="typescript" />
          <Devicon type="go" />
          <Devicon type="graphQl" />
          <Devicon type="mongo" />
          <Devicon type="python" />
        </FadeIn>
      )}
    </HomeWrapper>
  );
}
