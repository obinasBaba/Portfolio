import styled from 'styled-components'

export const BottomGradient = styled.div`
  position: fixed;
  //z-index: 1;
  top: 10%;
  left: 0;
  bottom: 0;
  right: 0;
  pointer-events: none;

  background-image: var(--bottom-gradient);
  transition: all 0.35s ease-in-out;
`
