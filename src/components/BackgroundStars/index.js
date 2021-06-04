import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import {
  motion,
  useSpring,
  useTransform,
  useViewportScroll,
} from 'framer-motion'
import { Typography } from '@material-ui/core'
import useBackgroundsAssets from '../../hooks/queries/useBackgroundsAssets'
import { Galaxy, Layer, Wrapper } from './components'
import { useMap, useMouse, useScroll, useWindowScroll } from 'react-use'

const BackgroundStars = () => {
  const { starsBig, starsSmall, starsBigOld, starsSmallOld } = useBackgroundsAssets()

  // let scrollThreshold = Math.ceil((700 / document.body.scrollHeight) * -window.pageYOffset);
  const config = {
    mass: 1,
    stiffness: 50,
    damping: 20,
  }
  const target = useRef(null)
  const mouse = useMouse(target)
  const yMouse = useSpring( 0, config);
  const xMouse = useSpring(0, config);

  const calc = (x, y) => {
    const xPos =  (x - window.innerWidth / 2) / 45;
    const yPos =  (y - window.innerHeight / 2) / 45;
    yMouse.set(yPos);
    xMouse.set(xPos);
  };

  const { scrollY } = useViewportScroll()
  const mappedY = useTransform(scrollY, y => Math.ceil((300 / 3400) * -y))
  const yScrollBig = useSpring(mappedY, config)
  const yScrollSmall = useTransform(yScrollBig, latest => latest / 1.5)


  useEffect( () => calc(mouse.elX, mouse.elY), [mouse] )

  return (
    <Galaxy ref={target}>

      <Wrapper style={{ y: yScrollBig }}>
        <Layer
          style={{
            backgroundImage: `url(${starsBig.publicURL})`,
            y: yMouse,
            x: xMouse,
          }}
        />
      </Wrapper>

      <Wrapper style={{ y: yScrollSmall }}>
        <Layer
          style={{
            backgroundImage: `url(${starsSmallOld.publicURL})`,
            y: yMouse,
            x: xMouse,
          }}
        />
      </Wrapper>
    </Galaxy>
  )
}

export default BackgroundStars
