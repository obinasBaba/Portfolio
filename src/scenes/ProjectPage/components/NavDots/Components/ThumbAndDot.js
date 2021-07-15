import React from 'react'
import styled from 'styled-components'
import { AnimatePresence, motion } from 'framer-motion'
import {BigDot, DottedLine, Thumb} from './NavTools'
import { Link, navigate } from 'gatsby'

const ThumbAndDotContianer = styled(motion.div)`
  //border: thin solid lightblue;
  position: relative;
  display: grid;
  //align-items: center;
  //justify-content: center;
  align-items: center;
  justify-items: center;
  align-content: center;
  justify-content: center;

  & > :first-child {
    grid-column: 1 / 1;
    grid-row: 1 / 1;
    //border: thin solid lightblue;
  }

  & > :last-child {
    grid-column: 1 / 1;
    grid-row: 1 / 1;
    //display: none;
  }
`

const StyledLink = styled(motion.a)`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
`

const ThumbAndDot = ({ hidden, onClick, index, anchor, dataAnchor }) => {
  return (
    <StyledLink
                data-menuanchor={dataAnchor }
                href={`#${dataAnchor}`} >

      <ThumbAndDotContianer  layout >

          <BigDot
            onClick={() => {
              onClick.set(index)
            }}
            anchor={anchor}
          />

        <AnimatePresence exitBeforeEnter={true}>
          {hidden && <Thumb layoutId={index} />}
        </AnimatePresence>

      </ThumbAndDotContianer>

      { index !== 3 && <DottedLine/>  }

    </StyledLink>
  )
}

export default ThumbAndDot
