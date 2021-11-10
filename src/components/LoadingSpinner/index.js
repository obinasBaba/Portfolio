import React, {
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useState
} from "react";
import styled from 'styled-components'
import { motion, usePresence } from "framer-motion";
import { transition } from '../../helpers/variants'
import { useLottiAssets } from '../../hooks/queries/useLottiAssets'
import OverlayController from '../BackgroundOverlay/OverlayController'
import BackgroundOverlay from "../BackgroundOverlay";
import { AppStateContext } from "../../contexts/AppStateContext";

const SpinnerContainer = styled( motion.div )`
  //position: fixed;
  position: relative;
  z-index: 50;
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
  //border: thin solid red;

  /*background-image: linear-gradient(
    to bottom,
    #072142,
    #061c37,
    #07182b,
    #061220,
    #020b16
  );*/
  
`

const Content = styled.div`
  position: relative;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  
  border: thin solid crimson;
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

const SpinnerWrapper = styled.div`
  
`

const SmallBall = styled.div`
  height: 50px;
  width: 50px;
  background-color: white;
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
  background-color: white;
`



const containerVariants = {

    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        ...transition,
        duration: 2,

      }
    },

  exit(arg){
    // opacity: 0,
    console.log('exit invoked', arg);
    arg.cleanUp()
   return {
     y: '-100%',
   }
  }
}


const LoadingSpinner = ({children}) => {

  const smallRef = useRef(null)
  const contentRef = useRef(null)

  const [isOpened, setOpened] = useState(false)
  const {  setBackgroundOverlay } = useContext(AppStateContext)
  // const [isPresent, safeToRemove] = usePresence()

  const cleanUp = async () => {

    await OverlayController.getInstance('loading-overlay').toggle(false, {
      duration: 900,
      delayPointsMax: 100,
      delayPerPath: 100,
    })

    setBackgroundOverlay(false)
  }


  useLayoutEffect(() => {

    setBackgroundOverlay(true)

    setOpened(
      OverlayController.getInstance( 'loading-overlay').toggle(true, {
        duration: 0,
        delayPointsMax: 0,
        delayPerPath: 0,
      }).isOpened
    )

    return () => { }

  }, [])

  return (


        <>

          <BackgroundOverlay clsName={'loading-overlay'} />

          {
            isOpened && <SpinnerContainer variants={containerVariants}
                                          transition={transition}
                                          initial='initial'
                                          animate='animate'
                                          key={'lkajdfs'}
                                          exit='exit'
                                          custom={{cleanUp}}

            >




              <Content ref={contentRef}>
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="800">
                  <defs>
                    <filter id="goo">
                      <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                      <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
                      <feComposite in="SourceGraphic" in2="goo" operator="atop"/>
                    </filter>
                  </defs>
                </svg>
                <SmallBall ref={smallRef} />
                <BigBall />
              </Content>

            </SpinnerContainer>
          }
        </>



  )
}

export default LoadingSpinner
