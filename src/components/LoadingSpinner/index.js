import React, {
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react'
import styled from 'styled-components'
import { AnimatePresence, motion } from 'framer-motion'
import { transition } from '../../helpers/variants'
import OverlayController from '../ScreenOverlay/OverlayController'
import BackgroundOverlay from '../ScreenOverlay'
import useLoadingFonts from '../../hooks/useFonts'
import { MotionValueContext } from '../../contexts/MotionStateWrapper'

const SpinnerContainer = styled(motion.div)`
  //position: fixed;
  position: absolute;
  z-index: 150;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  //background-color: #02021e;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  & * {
    pointer-events: none;
  }

  &.loaded .loading-backup {
    display: none;
  }
`

const Content = styled.div`
  position: relative;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  gap: 3rem;

  -webkit-filter: url('#goo');
  filter: url('#goo');

  animation: rotate linear;
  animation-fill-mode: forwards;
  animation-direction: normal;
  animation-iteration-count: infinite;
  animation-duration: 4s;

  * {
    border-radius: 50%;
    position: absolute;
  }

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }
`


const SmallBall = styled.div`
  height: 50px;
  width: 50px;
  background-color: #02021e;
  animation: move alternate ease-in-out;
  animation-name: move;
  animation-iteration-count: infinite;
  animation-duration: 3s;
  top: -100px;
  left: 100px;
  --movex: 50px;

  @keyframes move {
    from {
      transform: translateY(0px) translateX(-50px);
    }

    to {
      transform: translateY(70px) translateX(var(50px));
    }
  }
`

const BigBall = styled.div`
  width: 200px;
  height: 200px;
  background-color: #02021e;
`


const SpinnerWrapper = styled( motion.div )`
  position: absolute;
  height: 100%;
  width: 100%;
  //background: #02021e;
  display: grid;
  place-items: center;
  z-index: 10;
`


const parentVariants = {
  initial: {
  },
  animate :{
  },
  exit: {
    // opacity: 0
  },

  transition: {
    duration: 1.21,
    delay: .0821,
    ease: [0.6, 0.01, 0, 0.9],
  }
}

let exited = false;
const containerVariants = {

  initial(){
    exited = false
    return {
      opacity: 0,
    }
  },
  animate: {
    opacity: 1,
    transition: {
      ...transition,
      duration: 2,

    }
  },

  exit (arg) {
    // opacity: 0,

    if ( !exited ) {
      arg && arg.cleanUp()
      exited = true
    }

    return {
      y: '-100%',
    }
  }
}



const LoadingSpinner = () => {

  const smallRef = useRef(null)
  const contentRef = useRef(null)
  const loadingBgBackup = useRef( null)
  const containerRef = useRef(null)
  
  const [backgroundOverlay, setBackgroundOverlay] = useState(true);
  const { toolTipsData, mainAnimationController, screenOverlayProxy, screenOverlayEvent } = useContext(MotionValueContext);

  useLoadingFonts({ setBackgroundOverlay, backgroundOverlay })

  useEffect(() => {
    toolTipsData.set({
      text: ' ⌛ getting things ready...',
      show: true,
    })

  }, [])

  useLayoutEffect(() => {
    loadingBgBackup.current = document.body.querySelector('#page-container .loading-backup')
  }, [])

  useEffect(() => {

    screenOverlayProxy.set( {
      state: true,
      config: {
        duration: 0.0002,
        delayPointsMax: 0,
        delayPerPath: 0,
      }
    } )

    return () => {}
  }, [])


  async function cleanUp  () {

    document.body.querySelector('#main-container')
        .classList.add('loaded')
  

        screenOverlayProxy.set( {
          state: false,
          config:  {
            duration: 920,
            delayPointsMax: 120,
            delayPerPath: 120,
          }} )
  
    setTimeout(() => {
      mainAnimationController.start('animate');
      screenOverlayEvent.set('close')
    }, 700)
  
  }


  return (

      <AnimatePresence exitBeforeEnter>

          {
            backgroundOverlay &&
            <SpinnerContainer  ref={containerRef}
                               variants={parentVariants}
                               initial='initial'
                               animate='animate'
                               exit='exit'
                               transition={parentVariants.transition}

            >





              <SpinnerWrapper  variants={containerVariants}
                               key='contentwrapp'
                               custom={{cleanUp}}
                               transition={parentVariants.transition}>

                <Content ref={contentRef}>
                  <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="800">
                    <defs>
                      <filter id="goo">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
                        <feComposite in="SourceGraphic" in2="goo" operator="atop" />
                      </filter>
                    </defs>
                  </svg>
                  <SmallBall ref={smallRef} />
                  <BigBall />
                </Content>

              </SpinnerWrapper>


            </SpinnerContainer>
          }
      </AnimatePresence>

  )
}

export default LoadingSpinner
