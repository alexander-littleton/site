import { useState } from "react";
import "./App.css";
import styled from "styled-components";
import Navigation from "./components/Navigation";
import { BrowserRouter } from "react-router-dom";

const GradientLine = styled.div`
  width: 100%;
  height: 10px;
`;

const NamePlateWrapper = styled.div`
  text-align: center;
`;
const NamePlate = styled.h1`
  font-family: "Helvetica" bold;
`;

function App() {
  return (
    <BrowserRouter>
      <div className="bodycontainer">
        <GradientLine className="gradient-background" />
        <NamePlateWrapper>
          <NamePlate>ALEX LITTLETON</NamePlate>
        </NamePlateWrapper>
        <Navigation />
      </div>
    </BrowserRouter>
  );
}

export default App;
