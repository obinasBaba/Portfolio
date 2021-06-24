import styled, {css} from 'styled-components'
import {motion} from 'framer-motion'
import {
  gridColWidth, largeUp, mediumUp,
  smallUp,
  spacing, title,
} from '../../../../styles/mixins'
import {Typography} from '@material-ui/core'

export const ProjectDesc = styled(motion.div)`
  display: flex;
  flex-flow: column;
  z-index: 10;
  grid-row: 3;
  //overflow: hidden;
  //border: thin solid red;
  ${gridColWidth(8, 58)}
  ${spacing('pt', 6)};
  ${spacing('pb', 6)};
  
  & > * + * {
    ${spacing('mt', 2)}
  }

  ${smallUp(css`
    ${spacing('pt', 0)};
  `)};

  ${mediumUp(css`
    grid-row: 1;
    //border: thin solid red;
    ${({ reversed }) =>
  reversed ? gridColWidth(4, 28) : gridColWidth(39, 58)};
    ${spacing('pb', 0)};
  `)};

  ${largeUp(css`
    ${ gridColWidth(10, 33)};
    ${spacing('pt', 6)};
  `)};

  & > :last-child { //motion-btn
    ${spacing('mt', 4.5)};
`

export const Tags = styled(Typography)`
  display: none;
  font-weight: 300;
  line-height: 1.6em;
  letter-spacing: 0.5px;
  color: #b3afaf;
  
  ${ largeUp( css`
    display: initial;
  ` ) };
  
`

export const Title = styled(motion.h1)`
  //line-height: 1.25em;
  font-weight: 700;
  margin: 0;
  ${spacing('mt', 2)}
  ${ title(3.35) };
  line-height: 1.3; 
  //border: thin solid green;
  letter-spacing: 2.5px;
  overflow: hidden;
  
  .letter{
    font-family: "Poppins Black",serif;
    display: inline-block;
    //border: thin solid tomato;
  }
  
  .wihtespace{
    opacity: 0;
  }
`

export const OverflowWrapper = styled( motion.div )`
  overflow: hidden;
  width: max-content;
  
  
`