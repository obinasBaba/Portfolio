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
  height: 11px;
  width: 11px;
  border-radius: 50%;
  transition: transform .5s cubic-bezier(0.6, 0.01, 0, 0.9),border .2s ease-in-out;
  
  & :hover{
    transform: scale(1.4);
    border: .5px solid blue;
    transition: transform .5s cubic-bezier(0.6, 0.01, 0, 0.9),
      border .2s ease-in-out;;
  }

  &::after{
    z-index: -1;
    //content: '';
    display: block;
    position: absolute;
    inset: -30px;
    border-radius: 50%;
    //border: thin solid yellow;
  }
  
  & .thumb {
    z-index: 2;
    position: absolute;
    display: grid;
    place-items: center;
    
    height: 20px;
    width: 20px;
    //filter: url("#dots-gooey");
    
    p{
      color: blue;
      font-family: 'shapes', serif;
      font-size: 1.4rem;
      line-height: 0;
      margin: 0;
      padding: 0;
    }
    
  }
  
  & .hover-area{
    grid-column: 1;
    grid-row: 1;
    width: 300%;
    height: 300%;
    border-radius: 50%;
    //border: thin solid crimson;
  }
  
 
`


const spring = {
  // type: 'spring',
  // stiffness: 500,
  // damping: 30,

  ease: [0.6, 0.01, 0, 0.9],
  duration: 1,
}

const ThumbAndDot = ({ hidden, clickEvent, index, anchor, dataAnchor }) => {
  return (
    <ThumbAndDotContainer onClick={clickEvent}
                          // layout
    >

      <a
        className="hover-area"
        data-anchor={dataAnchor}
        href={`#${anchor}`}

        data-pointer={true}
        data-tooltip={true}
        data-tooltip-text='Next project'
      />

      {hidden && (

        <motion.span
          layoutId="outline"
          initial={false}
          transition={spring}
          className='thumb'>

          <p>i</p>

        </motion.span>
      )}

    </ThumbAndDotContainer>
  )
}

export default ThumbAndDot
