import NavButton from "./NavButton/index";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Tools from "../../pages/tools";
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
      <div className="render">
        <NavWrapper>
          <Link to="/">
            <NavButton text="Home" />
          </Link>
          <Link to="/projects">
            <NavButton text="Projects" />
          </Link>
          <Link to="/csaTools">
            <NavButton text="Tools" href="/csaTools/" />
          </Link>
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
      </div>
    </Router>
  );
}
