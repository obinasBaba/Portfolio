import styled from 'styled-components'
import {motion} from 'framer-motion'

export const CursorContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  pointer-events: none;
  z-index: 12000;
  //border: thin solid red;
  
  canvas[resize]{
    width: 100%;
    height: 100%;
  }

  & .canvas {
    width: 100vw;
    height: 100vh;
    z-index: 12000;
    //border: thin solid blue;
  }
`

export const Pointer = styled(motion.div)`
  //display: g;
  position: absolute;
  //border: thin solid lightcoral;
  height: 1rem;
  width: 1rem;
  top: calc(-1rem / 2);
  left: calc(-1rem / 2);
  right: auto;
  bottom: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  //transform: translate(-50%, -50%);

  p {
    
    position: absolute;
    //font-family: 'jaro.io icons', serif;
    font-family: 'shapes', serif;
    line-height: 0;
    padding: 0;
    margin: 0;
    top: -50%;
    left: -50%;
    inset: auto;
    color: rgb(120, 128, 158);
    font-size: .8rem;
    //mix-blend-mode: difference;
  }
`