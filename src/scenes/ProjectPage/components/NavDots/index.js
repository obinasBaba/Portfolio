import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { motion, AnimateSharedLayout } from 'framer-motion'
import { spacing } from '../../../../styles/mixins'
import ThumbAndDot from './Components/ThumbAndDot'

const NavContainer = styled(motion.ul)`
  position: fixed;
  z-index: 10;
  top: 40%;
  left: 0;

  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  grid-gap: 2rem;

  padding: 0;
  margin: 0;
  //border: thin solid red;
  //-webkit-filter: url("#goo");
  //filter: url("#dots-gooey");
  //filter: blur(2px) contrast(120px);
  
  svg{
    //display: none;  
    position: absolute;
    pointer-events: none;
  }

  ${spacing('ml', 4.5)};
  ${spacing('mb', 3.5)};
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
    x: 'calc((var(--indent) * -4.5rem))',
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
        // layout
      >

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


        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="800">
          <defs>
            <filter id="dots-gooey">
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="4"
                result="blur"
              />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                result="goo"
              />
              <feComposite in="SourceGraphic" in2="goo" operator="atop" />
            </filter>
          </defs>
        </svg>

      </NavContainer>

    </AnimateSharedLayout>
  )
})

export default NavDots
