import styled, { CSSObject } from "styled-components";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import FadeIn from "./components/FadeIn";
import Projects from "./pages/projects";

const NavWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5em;
`;

const linkStyle: CSSObject = {
  background: "linear-gradient(to right, #ee77d0, #008cff, #e6e6e6, #e6e6e6)",
  backgroundSize: "300%",
  backgroundPositionX: "100%",
  backgroundClip: "text",
  WebkitTextFillColor: "transparent",
  fontFamily: `"Montserrat", sans-serif`,
  fontWeight: 500,
  fontSize: "1.3em",
  transition: "background-position-x 0.8s",
  userSelect: "none",
  cursor: "pointer",

  "&:hover": {
    backgroundPositionX: "0%",
  },
  textDecoration: "none",
};

const NavButton = styled(Link)(() => linkStyle);
const NonRouterLink = styled.a(() => linkStyle);

export default function Navigation() {
  return (
    <Router>
      <NavWrapper>
        <NavButton to="/">Home</NavButton>
        <NavButton to="/projects">Projects</NavButton>
        <NonRouterLink href="/csaTools">Tools</NonRouterLink>
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
