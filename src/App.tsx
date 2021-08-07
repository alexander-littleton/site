import "./App.css";
import styled from "styled-components";
import Navigation from "./components/Navigation";
import { HashRouter } from "react-router-dom";
import FadeIn from "./components/FadeIn";

const NamePlateWrapper = styled.div`
  text-align: center;
`;
const NamePlate = styled.a`
  font-size: calc((0.5em + 1vmin) + (0.5em + 1vmax));
  background: linear-gradient(45deg, #ee77d0, #008cff);
  background-size: 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: "Outrun";
  margin-top: 0.5em;
  margin-bottom: 0.2em;
  animation: gradient-move 5s ease infinite;
  user-select: none;
  cursor: pointer;
`;

function App() {
  return (
    <HashRouter>
      <div className="bodycontainer">
        <FadeIn>
          <NamePlateWrapper>
            <NamePlate href="/">ALEX LITTLETON</NamePlate>
          </NamePlateWrapper>
          <Navigation />
        </FadeIn>
      </div>
    </HashRouter>
  );
}

export default App;
