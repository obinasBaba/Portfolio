import React from 'react'
import styled, { css } from 'styled-components'
import {
  gridColWidth,
  largeUp,
  mediumUp, smallUp,
  spacing,
} from '../../../../../../styles/mixins'
import { Link, useScrollRestoration } from 'gatsby'
import { Typography } from '@material-ui/core'
import MotionBtn from '../../../../../../components/MotionBtn'
import { AnimatePresence, useIsPresent } from 'framer-motion'
import { motion } from 'framer-motion'

const ProjectDesc = styled(motion.div)`
  display: flex;
  flex-flow: column;
  z-index: 10;
  grid-row: 3;
  //border: thin solid yellow;

  ${gridColWidth(8, 58)}
  ${spacing('pt', 6)};
  ${spacing('pb', 6)};
  
  & > * + * {
    ${spacing('mt', 2)}
  }

  ${ smallUp( css`
    ${spacing('pt', 0)};
  ` ) };


  ${mediumUp(css`
    grid-row: 1;
    //border: thin solid red;
    ${({ reversed }) => reversed ? gridColWidth(4, 28) : gridColWidth(39, 58)};
    ${spacing('pb', 0)};

  `)};

  ${largeUp(css`
    ${({ reversed }) => reversed ? gridColWidth(8, 30) : gridColWidth(39, 60)};
    ${spacing('pt', 6)};

  `)};

  & > :last-child { //motion-btn
    ${spacing('mt', 4.5)};
`

const Tags = styled(Typography)`
  display: none;
  font-weight: 300;
  line-height: 1.6em;
  letter-spacing: 0.5px;
  color: #b3afaf;
  
  ${ largeUp( css`
    display: initial;
  ` ) };
  
`
const Title = styled(Typography)`
  //line-height: 1.25em;
  font-weight: 700;
`

const ProjectDescription = ({ link, reversed, tags, title }) => {
  return (
    <ProjectDesc reversed={reversed}>
      <Tags variant={'subtitle2'}> {tags} </Tags>

      <motion.div>
        <Link to={link}>
          <Title variant={'h2'}>{title}</Title>
        </Link>
      </motion.div>

      <MotionBtn text="Case-Study" to={link} />
    </ProjectDesc>
  )
}

export default ProjectDescription
