import NavButton from "./NavButton/index";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "../../pages/home";
import FadeIn from "../FadeIn";
import Projects from "../../pages/projects";

const NavWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export default function Navigation() {
  return (
    <Router>
      <NavWrapper>
        <Link to="/" style={{textDecoration: 'none'}}>
          <NavButton text="Home" />
        </Link>
        <Link to="/projects" style={{textDecoration: 'none'}}>
          <NavButton text="Projects" />
        </Link>
        <NavButton text="Tools" href="/csaTools" />
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
