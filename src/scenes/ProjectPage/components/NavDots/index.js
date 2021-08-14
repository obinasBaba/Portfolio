import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { motion, AnimateSharedLayout } from 'framer-motion'
import { spacing } from '../../../../styles/mixins'
import ThumbAndDot from './Components/ThumbAndDot'

const NavContainer = styled(motion.ul)`
  padding: 0;
  margin: 0;
  position: fixed;
  z-index: 9999;
  ${spacing('ml', 3.2)};
  ${spacing('mb', 3.5)};
  top: 50%;
  left: 0;
  //transform: translateY(-45%);
  //align-self: flex-start;

  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
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
    <AnimateSharedLayout    >
      <NavContainer
        variants={parentVariant}
        transition={parentVariant.transition}
        initial="initial"
        animate="animate"
        exit="exit"
        id="navDots"
      >
        {anchors.map((anchor, index) => (
          <>
            <ThumbAndDot
              anchor={anchor}
              key={anchor}
              hidden={index === active}
              index={index}
              dataAnchor={anchor}
              clickEvent={setActive}
            />
          </>
        ))}
      </NavContainer>
    </AnimateSharedLayout>
  )
})

export default NavDots
