import "./App.css";
import styled from "styled-components";
import Navigation from "./Navigation";
import { BrowserRouter } from "react-router-dom";
import FadeIn from "./components/FadeIn";

const NamePlateWrapper = styled.div`
  text-align: center;
  position: sticky;
`;
const NamePlate = styled.a`
  font-size: calc((0.5em + 1vmin) + (0.5em + 1vmax));
  background: linear-gradient(45deg, #ee77d0, #008cff);
  background-size: 200%;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: "Outrun";
  margin-top: 0.5em;
  margin-bottom: 0.2em;
  animation: gradient-move 5s ease infinite;
  user-select: none;
  cursor: pointer;
`;

// matches the height of the marquee to prevent it from covering any content
const MarqueeSpacer = styled.div`
  height: 3em;
`;

const Marquee = styled.div`
  width: 100%;
  height: 3em;
  background: linear-gradient(45deg, #ee77d0, #008cff);
  background-size: 200%;
  animation: gradient-move 5s ease infinite;
  overflow: hidden;
  position: fixed;
  bottom: 0;
  overflow: hidden;
  --offset: 20vw;
  --move-initial: calc(-25% + var(--offset));
  --move-final: calc(-50% + var(--offset));
`;

const MarqueeTextWrapper = styled.a`
  display: flex;
  white-space: pre; // include all whitespace
  animation: scrollText 5s linear infinite;
  font-size: 1.5em;
  align-items: center;
  height: 100%;
  color: white;
  text-decoration: none;
  cursor: "pointer";
  width: fit-content;
  position: relative;
  transform: translate3d(var(--move-initial), 0, 0);
  animation: marquee 30s linear infinite;
`;

function App() {
  return (
    <BrowserRouter>
      <FadeIn style={{ display: "flex", flexDirection: "column" }}>
        <NamePlateWrapper>
          <NamePlate href="/">ALEX LITTLETON</NamePlate>
        </NamePlateWrapper>
        <Navigation />
        <MarqueeSpacer />
        <Marquee>
          <MarqueeTextWrapper
            href="https://www.linkedin.com/in/alex-littleton-51b1b2b5/"
            target="_blank"
          >
            {"AVAILABLE FOR HIRE  •  ".repeat(20)}
          </MarqueeTextWrapper>
        </Marquee>
      </FadeIn>
    </BrowserRouter>
  );
}

export default App;
