import React, { useContext, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { motion, useSpring, useTransform } from 'framer-motion'
import { AppStateContext } from '../../contexts/AppStateContext'

const ScrollContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  list-style-type: none;
  margin: 0;
  
`

const Gallery = ({ children, step }) => {
  const { moScroll } = useContext(AppStateContext)
  const containerRef = useRef(null)


  const mapped = useTransform(moScroll.y, [0, 2500], [-40, -600])

  const x = useSpring(mapped, {
    mass: .5,  damping: 10, stiffness: 50,
  })

  useEffect(() => {
    // console.log( 'x' ,  x.get())

  }, [])

  return <ScrollContainer ref={containerRef} style={{ x }}>{children}</ScrollContainer>
}

export default Gallery
