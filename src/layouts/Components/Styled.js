import styled from 'styled-components'
import {motion} from 'framer-motion'

export const PageContainer = styled.div`
  position: relative;
  display: flex;
  flex-flow: column;
  //border: thick solid crimson;
  //overflow: hidden;
  //z-index: 0;

  canvas[resize] {
    width: 100%;
    height: 100%;
  }

  & .canvas {
    position: fixed;
    width: 100vw;
    height: 100vh;
    z-index: var(--cIndex);
    pointer-events: none;
    //border: thin solid blue;
  }
`

export const BottomGradient = styled.div`
  position: fixed;
  //z-index: 1;
  top: 10%;
  left: 0;
  bottom: 0;
  right: 0;
  pointer-events: none;
  opacity: 1;
  background-image: var(--bottom-gradient);
  transition: all 0.35s ease-in-out;
  
  &.hide-bg{
    opacity: 0;
  }
`

export const Main = styled(motion.main)`
  position: relative;
  flex: 1;
  display: flex;
  flex-flow: column;
  overflow: hidden;
  width: 100%;
  //z-index: 8;
  height: min-content;
  opacity: 0;
  
  &.loaded{
    opacity: 1;
  }
  
  & > *{
    //z-index: 1;
  }
`

export const SkyColor = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  pointer-events: none;
  
  background-image: -webkit-gradient(linear, left top, left bottom, from(#072142), color-stop(#061c37), color-stop(#07182b), color-stop(#061220), to(#020b16));
  background-image: -webkit-linear-gradient(top, #072142, #061c37, #07182b, #061220, #020b16);
  background-image: -o-linear-gradient(top, #072142, #061c37, #07182b, #061220, #020b16);
  background-image: linear-gradient(to bottom, #072142, #061c37, #07182b, #061220, #020b16);
  

  //z-index: -300

`


