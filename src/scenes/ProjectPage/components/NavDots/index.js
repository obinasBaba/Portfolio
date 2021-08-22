import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { motion, AnimateSharedLayout } from 'framer-motion'
import { spacing } from '../../../../styles/mixins'
import ThumbAndDot from './Components/ThumbAndDot'

const NavContainer = styled(motion.ul)`
  position: fixed;
  top: 40%;
  left: 0;

  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  grid-gap: 1rem;

  padding: 0;
  margin: 0;
  //border: thin solid red;
  //-webkit-filter: url("#goo");
  //filter: url("#goo");
  //filter: blur(2px) contrast(11110);
  
  svg{
    display: none;  
    position: absolute;
    pointer-events: none;
  }

  ${spacing('ml', 3.2)};
  ${spacing('mb', 3.5)};
  z-index: 99999;
`

const parentVariant = {
  transition: {
    delay: 0.1,
    duration: 1,
    ease: [0.6, 0.01, 0, 0.9],
  },

  initial: {
    x: '-200%',
    y: '-40%',
  },
  animate: {
    x: 0,
    transition: {
      delay: 0.3,
      duration: 1,
      ease: [0.6, 0.01, 0, 0.9],
    },
  },
  exit: {
    x: '-200%',
    transition: {
      delay: 0.1,
      duration: 1,
      ease: [0.6, 0.01, 0, 0.9],
    },
  },
}

const NavDots = React.forwardRef((props, ref) => {
  const [active, setActive] = useState(0)
  const [anchors, setAnchors] = useState(['one', 'two', 'three', 'four'])

  useEffect(() => {
    ref.current = { setActiveAnchors: setActive }
  }, [])

  return (
    <AnimateSharedLayout   >
      <NavContainer
        variants={parentVariant}
        transition={parentVariant.transition}
        initial="initial"
        animate="animate"
        exit="exit"
        id="navDots"
      >
        <svg xmlns="http://www.w3.org/2000/svg"
             version="1.1" width="800">
          <defs>
            <filter id="goo">
              <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
              <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
              <feComposite in="SourceGraphic" in2="goo" operator="atop"/>
            </filter>
          </defs>
        </svg>

        {anchors.map((anchor, index) => (
          <>
            <ThumbAndDot
              anchor={anchor}
              key={anchor}
              hidden={index === active}
              index={index}
              dataAnchor={anchor}
              clickEvent={() => setActive(index)}
            />
          </>
        ))}



      </NavContainer>

    </AnimateSharedLayout>
  )
})

export default NavDots
