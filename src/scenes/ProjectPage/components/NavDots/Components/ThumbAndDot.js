import React from 'react'
import styled from 'styled-components'
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion'
import { AnchorDot, DottedLine, Thumb } from './NavTools'
import {Link} from 'gatsby'

const ThumbAndDotContainer = styled.li`
  //border: thin solid lightblue;
  position: relative;
  display: grid;
  place-items: center;
  padding: 0;
  margin: 0;
  background-color: white;
  height: 15px;
  width: 15px;
  border-radius: 50%;
  
  & .thumb {
    position: absolute;
    display: grid;
    place-items: center;
    font-family: 'shapes', serif;
    font-size: 1.8rem;
    line-height: 0;
    margin: 0;
    padding: 0;
    color: blue;
    //filter: url("#dots-gooey");
  }
  
  & .hover-area{
    grid-column: 1;
    grid-row: 1;
    width: 250%;
    height: 250%;
    border-radius: 50%;
    //border: thin solid crimson;
  }
`


const spring = {
  type: 'spring',
  stiffness: 500,
  damping: 30,
}

const ThumbAndDot = ({ hidden, clickEvent, index, anchor, dataAnchor }) => {
  return (
    <ThumbAndDotContainer onClick={clickEvent}>

      <a
        className="hover-area"
        data-anchor={dataAnchor}
        href={`#${anchor}`}

        data-pointer
        data-tooltip
        data-stuck
        data-tooltip-text='Next project'
      />

      {hidden && (

        <motion.span
          layoutId="outline"
          initial={false}
          transition={spring}
          className='thumb'>
          i
        </motion.span>
      )}

    </ThumbAndDotContainer>
  )
}

export default ThumbAndDot
