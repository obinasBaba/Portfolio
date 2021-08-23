import React from 'react'
import styled from 'styled-components'
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion'
import { AnchorDot, DottedLine, Thumb } from './NavTools'
import {Link} from 'gatsby'

const ThumbAndDotContainer = styled.li`
  //border: thin solid lightblue;
  padding: 0;
  margin: 0;
  position: relative;
  display: grid;
  place-items: center;
  font-family: 'shapes', serif;
  
  & > * {
    line-height: 0;
    margin: 0;
    padding: 0;
    grid-column: 1 / 1;
    grid-row: 1 / 1;
  }

  span {
    border: none;
    font-family: 'shapes', serif;
    font-size: 1.5rem;
  }

  & a {
    width: 100%;
    height: 100%;
    grid-column: 1 / 1;
    grid-row: 1 / 1;
  }
  
  & .thumb {
    height: 30px;
    width: 30px;

    font-family: 'shapes', serif;
    font-size: 1.8rem;
    color: blue;
    
    //filter: url("#dots-gooey");

  }

  & .dot_Line {
    grid-column: 1 / 1;
    grid-row: 2 / 3;
  }
`


const spring = {
  type: 'spring',
  stiffness: 500,
  damping: 30,
}

const ThumbAndDot = ({ hidden, clickEvent, index, anchor, dataAnchor }) => {
  return (
    <ThumbAndDotContainer>
      <span className="pagination-dot">
        h
      </span>

      {hidden && (
        <motion.div
          className="thumb"
          initial={false}
          layoutId="outline"
          transition={spring}
        >
          i
        </motion.div>
      )}


    </ThumbAndDotContainer>
  )
}

export default ThumbAndDot
