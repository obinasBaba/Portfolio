import React, {useContext, useEffect, useLayoutEffect, useRef} from 'react'
import {
  useElementScroll,
  useSpring,
  useTransform,
  useViewportScroll,
} from 'framer-motion'
import useBackgroundsAssets from '../../hooks/queries/useBackgroundsAssets'
import { Galaxy, Layer, Wrapper } from './components'
import { useMouse } from 'react-use'
import {AppStateContext} from '../../contexts/AppStateContext'

const BackgroundStars = () => {
  const { starsBig, starsSmall, starsBigOld, starsSmallOld } = useBackgroundsAssets()

  // let scrollThreshold = Math.ceil((700 / document.body.scrollHeight) * -window.pageYOffset);
  const config = {
    mass: 1,
    stiffness: 50,
    damping: 20,
  }
  const target = useRef(null)
  // const mouse = useMouse(target)
  const yMouse = useSpring( 0, config);
  const xMouse = useSpring(0, config);

  const calcNewMousePos = (ev) => {
    const xPos =  (ev.clientX - window.innerWidth / 2) / 30;
    const yPos =  (ev.clientY - window.innerHeight / 2) / 30;
    yMouse.set(yPos);
    xMouse.set(xPos);
  };

  const { moScroll: {y}, currentPath } = useContext(AppStateContext)


  const mappedY = useTransform(y, y => Math.ceil((300 / 3400) * -y))

  const yScrollBig = useSpring(mappedY, config)
  const yScrollSmall = useTransform(yScrollBig, latest => latest / 1.5)


  useEffect( () => {

    window.addEventListener('mousemove', calcNewMousePos)

    setTimeout(() => {
      // mappedY.destroy()

    }, 5000)



    return () => {
      window.removeEventListener('mousemove', calcNewMousePos)
    }

  }, [currentPath] );

  return (
    <Galaxy ref={target}
            style={{
              // backgroundImage: `url(${starsBig.publicURL})`,
              y: yMouse,
              x: xMouse,
            }}
    >

      <Wrapper style={{ y: yScrollSmall }}>
        <Layer style={{ backgroundImage: `url(${starsBig.publicURL})`, }} />
      </Wrapper>

      <Wrapper style={{ y: yScrollBig }}>
        <Layer style={{ backgroundImage: `url(${starsSmallOld.publicURL})`, }} />
      </Wrapper>
    </Galaxy>
  )
}

export default BackgroundStars
