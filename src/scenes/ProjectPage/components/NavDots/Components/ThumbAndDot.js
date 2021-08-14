import React from 'react'
import styled from 'styled-components'
import {AnimatePresence, AnimateSharedLayout, motion} from 'framer-motion'
import { AnchorDot, DottedLine, Thumb } from './NavTools'

const ThumbAndDotContainer = styled(motion.li)`
  //border: thin solid lightblue;
  padding: 0;
  margin: 0;
  
  position: relative;
  display: grid;
  align-items: center;
  justify-items: center;
  
  & a{
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
    grid-column: 1 / 1;
    grid-row: 1 / 1;
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

const ThumbAndDot = ({ hidden, clickEvent, index, anchor, dataAnchor }) => {
  return (
    <ThumbAndDotContainer >



      <a data-menuanchor={dataAnchor} href={`#${dataAnchor}`}
         onClick={() => clickEvent(index)}
      />

      <AnimateSharedLayout>
        <AnchorDot   anchor={anchor}  onClick={() => clickEvent(index)} />
      </AnimateSharedLayout>

        {hidden && <Thumb  isFirst={index === 0} isLast={index === 3} />}


      <AnimateSharedLayout>
        {index !== 3 && <DottedLine className="dotLine"  />}
      </AnimateSharedLayout>





    </ThumbAndDotContainer>
  )
}

export default ThumbAndDot
