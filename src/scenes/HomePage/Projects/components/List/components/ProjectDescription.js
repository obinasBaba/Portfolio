import React from 'react'
import styled, { css } from 'styled-components'
import {
  gridColWidth, largeUp,
  mediumUp,
  spacing,
} from '../../../../../../styles/mixins'
import { Link, useScrollRestoration } from 'gatsby'
import { Typography } from '@material-ui/core'
import MotionBtn from '../../../../../../components/MotionBtn'
import { AnimatePresence, useIsPresent } from 'framer-motion'
import {motion} from 'framer-motion';


const ProjectDesc = styled(motion.div)`
  display: flex;
  flex-flow: column;
  z-index: 10;
  grid-row: 3;


  & > * + * {
    ${spacing('mt', 2)}
  }

  ${gridColWidth(8, 58)}
  ${spacing('pt', 3)};
  ${spacing('pb', 6)};


  ${mediumUp(css`
    ${({ reversed }) =>
  reversed ? gridColWidth(4, 28) : gridColWidth(39, 62)};
    ${spacing('pb', 0)};

    grid-row: 1;
  `)};

  ${largeUp(css`
    ${({ reversed }) => reversed ? gridColWidth(8, 28) : gridColWidth(39, 58)};
    ${spacing('pt', 6)};

  `)};
  
  & > :last-child { //motion-btn
    ${spacing('mt', 4.5)};
`

const Tags = styled(Typography)`
  font-weight: 300;
  line-height: 1.6em;
  letter-spacing: 0.5px;
  color: #b3afaf;
`


const ProjectDescription = ( {children, reversed, tags, title,} ) => {


  return (
      <ProjectDesc reversed={reversed}
                   exit={{
                     opacity: 0,
                     transition: {
                       duration: 1,
                     }
                   }}
      >
        <Tags variant={'subtitle2'}> {tags} </Tags>

        <motion.div>
          <Link to="/">
            <Typography
              variant={'h3'}
              style={{
                lineHeight: '1.25em',
                fontWeight: 700,
              }}
            >
              {title}
            </Typography>
          </Link>
        </motion.div>

        <MotionBtn text="Case-Study" />
      </ProjectDesc>

  )
}

export default ProjectDescription
