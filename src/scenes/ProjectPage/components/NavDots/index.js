import React, { useEffect, useState } from 'react'
import styled, {css} from 'styled-components'
import {motion, AnimateSharedLayout, useMotionValue, LayoutGroup} from 'framer-motion'
import {mediumUp, spacing, xLargeUp, xxLargeUp} from "../../../../styles/mixins";
import ThumbAndDot from './Components/ThumbAndDot'

const NavContainer = styled(motion.div)`
  position: fixed;
  z-index: 3;
  bottom: 4%;
  left: 30%;
  
  ${ mediumUp(css`
    top: 40%;
    bottom: initial;
    left: 0;
    
  `) };

  ${spacing('ml', 4.5)};
  ${spacing('mb', 3.5)};
  
  ${xLargeUp( css`
    ${spacing('ml', 6.7)};
    
  ` )};
`

const NavWrapper = styled.ul`

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;
  
  ${ mediumUp(css`
    flex-flow: column;
  `) };

  ${spacing('gap', 3.2)};
`


const parentVariant = {
  transition: {
    delay: 0.1,
    duration: 1,
    ease: [0.6, 0.01, 0, 0.9],
  },

  initial: {
    x: 'calc((var(--indent) * -4.5rem))',
    y: '-40%',
    opacity: 0,
  },

  animate: {
    x: 0,
    opacity: 1,

    transition: {
      delay: 0.3,
      duration: 1,
      ease: [0.6, 0.01, 0, 0.9],
    },
  },
  exit: {
    x: 'calc((var(--indent) * -4.5rem))',
    opacity: 0,
    transition: {
      delay: 0.1,
      duration: 1,
      ease: [0.6, 0.01, 0, 0.9],
    },
  },
}

const NavDots = ({activeIndex}) => {
  // const {activeIndex} = props;

  const [active, setActive] = useState(0)
  const [anchors, setAnchors] = useState(['one', 'two', 'three', 'four'])

  useEffect(() => {
    // ref.current = { setActiveAnchors: setActive }

    activeIndex.onChange(v => {
      setActive(v)
    })

  }, [])


  return (

      <NavContainer
        variants={parentVariant}
        transition={parentVariant.transition}
        initial="initial"
        animate="animate"
        exit="exit"
      >

          <NavWrapper>
            {anchors.map((anchor, index) => (
                <ThumbAndDot
                    anchor={anchor}
                    key={anchor + index}
                    hidden={index === active}
                    index={index}
                    dataAnchor={anchor}
                    clickEvent={() => setActive(index)}
                />
            ))}
          </NavWrapper>


      </NavContainer>

  )
}

export default NavDots
