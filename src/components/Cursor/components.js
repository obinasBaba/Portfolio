import styled from 'styled-components'
import {motion} from 'framer-motion'

export const CursorContainer = styled( motion.div )`

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
