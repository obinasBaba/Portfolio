import styled, {css} from 'styled-components'
import {motion} from 'framer-motion'
import {
  gridColWidth, largeUp, mediumUp,
  smallUp,
  spacing, title,
} from '../../../../../styles/mixins'
import {Typography} from '@material-ui/core'

export const ProjectDescriptionContainer = styled(motion.div)`
  display: flex;
  flex-flow: column;
  z-index: 10;
  grid-row: 3;
  pointer-events: none;
  //overflow: hidden;
  border: thin solid red;
  ${gridColWidth(8, 58)}
  ${spacing('pt', 1.7)};
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
    gridColWidth(4, 28)
    ${spacing('pt', 6)};
    ${spacing('pb', 0)};
  `)};

  ${largeUp(css`
    ${ gridColWidth(10, 35)};
    ${spacing('pt', 6)};
  `)};

  & > :last-child { //motion-btn
    ${spacing('mt', 4.5)};
  }
`

export const Tags = styled(Typography)`
  display: none;
  font-weight: 300;
  line-height: 1.6em;
  letter-spacing: 0.5px;
  color: #b3afaf;
  pointer-events: initial;


  ${ largeUp( css`
    display: initial;
  ` ) };
  
`


export const OverflowWrapper = styled( motion.div )`
  overflow: hidden;
  width: max-content;
  pointer-events: initial;
`