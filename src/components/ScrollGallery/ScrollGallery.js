import React from 'react'
import styled from 'styled-components'
import {
  motion,
  useSpring,
  useTransform,
  useViewportScroll,
} from 'framer-motion'

const AnimatedDiv = styled(motion.div)`
  display: flex;
  align-items: center;
  list-style-type: none;
  margin: 0;
  
`

const Gallery = ({ children, step }) => {
  const { scrollYProgress } = useViewportScroll()

  const mapped = useTransform(scrollYProgress, [0, 1], [-1, -500])

  const x = useSpring(mapped, {
    mass: 0.5,
    damping: 10,
    stiffness: 50,
  })

  return <AnimatedDiv style={{ x: x }}>{children}</AnimatedDiv>
}

export default Gallery
