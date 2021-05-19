import React from 'react'
import styled, { css } from 'styled-components'
import {
  gridColWidth, largeUp,
  mediumUp,
  spacing,
} from '../../../../../../styles/mixins'
import { Link } from 'gatsby'
import { Typography } from '@material-ui/core'
import MotionBtn from '../../../../../../components/MotionBtn'
import { AnimatePresence } from 'framer-motion'


const ProjectDesc = styled.div`
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


const ProjectDescription = ( {children, reversed, tags, title} ) => {
  return (
    <AnimatePresence>

      <ProjectDesc reversed={reversed}>
        <Tags variant={'subtitle2'}> {tags} </Tags>

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

        <MotionBtn text="Case-Study" />
      </ProjectDesc>

    </AnimatePresence>
  )
}

export default ProjectDescription
