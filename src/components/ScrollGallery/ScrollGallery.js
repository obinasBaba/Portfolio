import React, {useContext, useEffect} from 'react'
import styled from 'styled-components'
import {
  animate,
  motion,
  useSpring,
  useTransform,
  useViewportScroll,
} from 'framer-motion'
import {AppStateContext} from '../../contexts/AppStateContext'

const AnimatedDiv = styled(motion.div)`
  display: flex;
  align-items: center;
  list-style-type: none;
  margin: 0;
  
`

const Gallery = ({ children, step }) => {
  const { moScroll } = useContext(AppStateContext)

  const mapped = useTransform(moScroll.y, [0, 2500], [-40, -1000])

  const x = useSpring(mapped, {
    mass: .5,  damping: 10, stiffness: 50,
  })

  useEffect(() => {
    // console.log( 'x' ,  x.get())
    return ( ) => mapped.destroy()
  }, [])

  return <AnimatedDiv style={{ x: x }}>{children}</AnimatedDiv>
}

export default Gallery
