import React, { useContext, useEffect, useRef } from 'react'
import { useSpring, useTransform } from 'framer-motion'
import useBackgroundsAssets from '../../hooks/queries/useBackgroundsAssets'
import { Galaxy, Layer, Wrapper } from './components'
import {
  AppStateContext
} from "../../contexts/AppStateContext";
import { MotionValueContext } from "../../contexts/MotionStateWrapper";


//todo -> use the composition pattern
const BackgroundStars = () => {
  const {
    starsBig,
    starsSmall,
    starsBigOld,
    starsSmallOld,
  } = useBackgroundsAssets()

  // let scrollThreshold = Math.ceil((700 / document.body.scrollHeight) * -window.pageYOffset);
  const config = {
    mass: 1,
    stiffness: 50,
    damping: 20,
  }
  const target = useRef(null)
  // const mouse = useMouse(target)
  const yMouse = useSpring(0, config)
  const xMouse = useSpring(0, config)



  const {
    moScroll: { y },
  } = useContext(MotionValueContext)

  const mappedY = useTransform(y, y => Math.ceil((300 / 3400) * -y))

  const yScrollBig = useSpring(mappedY, config)
  const yScrollSmall = useTransform(yScrollBig, latest => latest / 1.5)

  useEffect(() => {
    const calcNewMousePos = ev => {
      const xPos = (ev.clientX - window.innerWidth / 2) / 80
      const yPos = (ev.clientY - window.innerHeight / 2) / 80
      yMouse.set(yPos)
      xMouse.set(xPos)
    }

    window.addEventListener('mousemove', calcNewMousePos)


    return () => {
      window.removeEventListener('mousemove', calcNewMousePos)
    }
  }, [])

  return (
    <Galaxy
      ref={target}
      style={{
        // backgroundImage: `url(${starsBig.publicURL})`,
        y: yMouse,
        x: xMouse,
      }}
    >
      <Wrapper style={{ y: yScrollSmall }}>
        <Layer style={{ backgroundImage: `url(${starsBig.publicURL})` }} />
      </Wrapper>

      <Wrapper style={{ y: yScrollBig }}>
        <Layer style={{ backgroundImage: `url(${starsSmallOld.publicURL})` }} />
      </Wrapper>
    </Galaxy>
  )
}

export default React.memo(BackgroundStars)
