import styled, {css} from 'styled-components'
import {motion} from 'framer-motion'
import {largeUp, smallUp, spacing} from '../../../../../styles/mixins'

export const MenuContainer = styled(motion.div)`
  position: fixed;
  height: 100vh;
  width: 100vw;
  z-index: 110;
  display: flex;
  justify-content: flex-end;
`

export const MenuList = styled(motion.div)`
  position: relative;
  background-color: #02021e;
  z-index: 130;
  flex-basis: 80%;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  clip-path: polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%);
  ${ spacing('pl', 10) };

${ css`
    
    ${ smallUp( css`
      flex-basis: 62%;
      
    ` ) };
    
    ${ largeUp( css`
      flex-basis: 53%;
    ` ) }
    
  ` };
`

export const Overlay = styled(motion.div)`
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 120;

  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(4px);
`