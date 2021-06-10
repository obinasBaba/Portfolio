import styled from 'styled-components'
import {motion} from 'framer-motion'

export const Galaxy = styled(motion.div)`
  position: fixed;
  overflow: hidden;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100vw;
  height: 100vh;
`

export const Wrapper = styled( motion.div )`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -10;
  width: 100%;
  height: 100%;
  will-change: transform;
`

export const Layer = styled( motion.div )`
  position: absolute;
  top: 5%;
  left: 0;
  z-index: -10;
  width: 100%;
  height: 200%;
`