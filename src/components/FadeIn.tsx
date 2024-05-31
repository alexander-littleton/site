import { CSSProperties } from "react";
import styled, { keyframes } from "styled-components";
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
const Wrapper = styled.div`
  @media (prefers-reduced-motion: no-preference) {
    animation-name: ${fadeIn};
    animation-fill-mode: backwards;
  }
`;
const FadeIn = ({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: CSSProperties;
}) => {
  return (
    <Wrapper
      style={{
        animationDuration: "3000ms",
        animationDelay: "0ms",
        height: "100%",
        ...style,
      }}
    >
      {children}
    </Wrapper>
  );
};

export default FadeIn;
