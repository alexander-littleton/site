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
const FadeIn = ({ children }: { children: React.ReactNode }) => {
  return (
    <Wrapper
      style={{
        animationDuration: "3000ms",
        animationDelay: "0ms",
      }}
    >
      {children}
    </Wrapper>
  );
};

export default FadeIn;
