import React from 'react'
import styled from 'styled-components'
import {AnimatePresence, motion} from 'framer-motion'
import {BigDot, Thumb} from './NavTools'
import {Link, navigate} from 'gatsby'

const ThumbAndDotContianer = styled( motion.div )`
  //border: thin solid lightblue;
  position: relative;
  display: grid;
  //align-items: center;
  //justify-content: center;
  align-items: center;
  justify-items: center;
  align-content: center;
  justify-content: center;
  
  
  & > :first-child{
    grid-column: 1 / 1;
    grid-row: 1 / 1 ;
    //border: thin solid lightblue;
  }
  
  & > :last-child{
    grid-column: 1 / 1;
    grid-row: 1 / 1 ;
    //display: none;
  }
  
`

const ThumbAndDot = ( {hidden, onClick, index, anchor} ) => {
  return (
    <ThumbAndDotContianer layout>

        <motion.a href={`http://localhost:8000/projects${anchor}`} >

          <BigDot
            onClick={() => {
              onClick.set(index)
            }}
            anchor={anchor}
          />

        </motion.a>


      <AnimatePresence exitBeforeEnter={true} >
        {hidden && <Thumb layoutId={index} />}
      </AnimatePresence>
    </ThumbAndDotContianer>
  )
}

export default ThumbAndDot
