import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import FadeIn from "./components/FadeIn";
import Projects from "./pages/projects";

const NavWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5em;
`;

const NavButton = styled(Link)`
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
  transition: background-position-x 0.8s;
  user-select: none;
  cursor: pointer;
  &:hover {
    background-position-x: 0%;
  }
  text-decoration: none;
`;

export default function Navigation() {
  return (
    <Router>
      <NavWrapper>
        <NavButton to="/">Home</NavButton>
        <NavButton to="/projects">Projects</NavButton>
        <NavButton to="/csaTools">Tools</NavButton>
      </NavWrapper>

      <Switch>
        <Route exact path="/">
          <FadeIn>
            <Home />
          </FadeIn>
        </Route>
        <Route path="/projects">
          <FadeIn>
            <Projects />
          </FadeIn>
        </Route>
      </Switch>
    </Router>
  );
}
