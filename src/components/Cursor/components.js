import styled from 'styled-components'
import {motion} from 'framer-motion'

export const CursorContainer = styled( motion.div )`
  position: fixed;
  z-index: 10;
  left: 0;
  top: 0;
  pointer-events: none;
  //border: thin solid red;
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
  will-change: transform;
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
    font-size: .74rem;
    //mix-blend-mode: difference;
  }
`