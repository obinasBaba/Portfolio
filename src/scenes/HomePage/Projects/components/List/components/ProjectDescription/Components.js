import styled, {css} from 'styled-components'
import {motion} from 'framer-motion'
import {
  gridColWidth, largeUp, mediumUp,
  smallUp,
  spacing, title,
} from '../../../../../../../styles/mixins'
import {Typography} from '@material-ui/core'

export const ProjectDesc = styled(motion.div)`
  display: flex;
  flex-flow: column;
  z-index: 10;
  grid-row: 3;
  overflow: hidden;

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
    ${({ reversed }) =>
  reversed ? gridColWidth(10, 31) : gridColWidth(39, 60)};
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
  font-size: 3.75rem;
  ${ title(3.35) };
  line-height: 1.2; 
  //border: thin solid green;
  overflow: hidden;
  
  .letter{
    display: inline-block;
    //border: thin solid tomato;
  }
  
  .wihtespace{
    opacity: 0;
  }
`

export const OverflowWrapper = styled( motion.div )`
  //border: thin solid red;
  overflow: hidden;
`