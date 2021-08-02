import NavButton from "./NavButton/index";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "../../pages/about";
import Tools from "../../pages/tools";
import FadeIn from "../FadeIn";

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
            <NavButton text="Tools" />
          </Link>
          <Link to="/about">
            <NavButton text="About Me" />
          </Link>
        </NavWrapper>

        <Switch>
          <Route exact path="/">
            <FadeIn>
              <h1>r</h1>
            </FadeIn>
          </Route>
          <Route path="/projects">
            <FadeIn>
              <h1>g</h1>
            </FadeIn>
          </Route>
          <Route path="/csaTools">
            <FadeIn>
              <Tools />
            </FadeIn>
          </Route>
          <Route path="/about">
            <FadeIn>
              <About />
            </FadeIn>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
