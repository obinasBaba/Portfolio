import React, { useEffect, useRef } from 'react'
import { useSpring, useTransform, useViewportScroll } from 'framer-motion'
import useBackgroundsAssets from '../../hooks/queries/useBackgroundsAssets'
import { Galaxy, Layer, Wrapper } from './components'
import { useMouse } from 'react-use'

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

  const calcNewMousePos = (x, y) => {
    const xPos =  (x - window.innerWidth / 2) / 30;
    const yPos =  (y - window.innerHeight / 2) / 30;
    yMouse.set(yPos);
    xMouse.set(xPos);
  };

  const { scrollY } = useViewportScroll()
  const mappedY = useTransform(scrollY, y => Math.ceil((300 / 3400) * -y))

  const yScrollBig = useSpring(mappedY, config)
  const yScrollSmall = useTransform(yScrollBig, latest => latest / 1.5)


  useEffect( () => calcNewMousePos(mouse.elX, mouse.elY), [mouse] );

  return (
    <Galaxy ref={target}
            style={{
              // backgroundImage: `url(${starsBig.publicURL})`,
              y: yMouse,
              x: xMouse,
            }}
    >

      <Wrapper style={{ y: yScrollBig }}>
        <Layer
          style={{
            backgroundImage: `url(${starsBig.publicURL})`,
            // y: yMouse,
            // x: xMouse,
          }}
        />
      </Wrapper>

      <Wrapper style={{ y: yScrollSmall }}>
        <Layer
          style={{
            backgroundImage: `url(${starsSmallOld.publicURL})`,
            // y: yMouse,
            // x: xMouse,
          }}
        />
      </Wrapper>
    </Galaxy>
  )
}

export default BackgroundStars
