import styled from 'styled-components'
import {motion} from 'framer-motion'

export const Galaxy = styled(motion.div)`
  position: fixed;
  overflow: hidden;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  pointer-events: none;
  //border: thick solid red;

  background-image: -webkit-gradient(linear, left top, left bottom, from(#072142), color-stop(#061c37), color-stop(#07182b), color-stop(#061220), to(#020b16));
  background-image: -webkit-linear-gradient(top, #072142, #061c37, #07182b, #061220, #020b16);
  background-image: -o-linear-gradient(top, #072142, #061c37, #07182b, #061220, #020b16);
  background-image: linear-gradient(to bottom, #072142, #061c37, #07182b, #061220, #020b16);


`

export const Wrapper = styled( motion.div )`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  will-change: transform;
`

export const Layer = styled( motion.div )`
  position: absolute;
  top: 5%;
  left: 0;
  width: 100%;
  height: 200%;
`
