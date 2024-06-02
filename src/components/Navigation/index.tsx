import NavButton from "./NavButton";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "../../pages/home";
import FadeIn from "../FadeIn";
import Projects from "../../pages/projects";

const NavWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5em;
`;

export default function Navigation() {
  return (
    <Router>
      <NavWrapper>
        <NavButton href="/" text="Home" />
        <NavButton href="/projects" text="Projects" />
        <NavButton href="/csaTools" text="Tools" />
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
        <Route
          path="/csaTools"
          component={() => {
            window.location.href = "/csaTools";
            return null;
          }}
        ></Route>
      </Switch>
    </Router>
  );
}
