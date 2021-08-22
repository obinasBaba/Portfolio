import React from 'react'
import styled from 'styled-components'
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion'
import { AnchorDot, DottedLine, Thumb } from './NavTools'

const ThumbAndDotContainer = styled.li`
  //border: thin solid lightblue;
  padding: 0;
  margin: 0;
  position: relative;
  display: grid;
  place-items: center;

  button {
    border: none;
    background-color: navajowhite;
    height: 15px;
    width: 15px;
    border-radius: 50%;

    grid-column: 1 / 1;
    grid-row: 1 / 1;
    
    //border: thin solid red;
  }

  & a {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  & .anchorDot {
    grid-column: 1 / 1;
    grid-row: 1 / 1;
  }

  & .thumb {
    //position: absolute;
    //left: auto;
    //top: 0;
    //inset: auto;
    //transform: translateX(-15%) translateY(-15%);
    
    background-color: #3719ca;
    height: 30px;
    width: 30px;
    grid-column: 1 / 1;
    grid-row: 1 / 1;
    border-radius: 50%;
  }

  & .dot_Line {
    grid-column: 1 / 1;
    grid-row: 2 / 3;
  }
`

const StyledLink = styled(motion.a)`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;

  //border: thin solid crimson;
`

const spring = {
  type: 'spring',
  stiffness: 500,
  damping: 30,
}

const ThumbAndDot = ({ hidden, clickEvent, index, anchor, dataAnchor }) => {
  return (
    <ThumbAndDotContainer>
      <button className="pagination-dot" onClick={clickEvent} />

      {hidden && (
        <motion.div
          className="thumb"
          initial={false}
          layoutId="outline"
          transition={spring}
        />
      )}
    </ThumbAndDotContainer>
  )
}

export default ThumbAndDot
