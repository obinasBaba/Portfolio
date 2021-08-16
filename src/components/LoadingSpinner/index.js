import React, {useContext, useLayoutEffect, useRef} from 'react'
import styled from 'styled-components'
import {lerp} from '../../helpers/utils'
import {AnimatePresence} from 'framer-motion'
import {AppStateContext} from '../../contexts/AppStateContext'
import FontLoaded from 'fontfaceobserver'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);


const SpinnerContainer = styled.div`
  position: fixed;
  z-index: 9999;
  //height: 100vh;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: #02021e;
  display: flex;
  align-items: center;
  justify-content: center;
  //border: thin solid red;

  background-image: linear-gradient(
    to bottom,
    #072142,
    #061c37,
    #07182b,
    #061220,
    #020b16
  );
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
      transform: translateY(70px) translateX(var(--move));
    }
  }
`

const BigBall = styled.div`
  width: 200px;
  height: 200px;
  background-color: white;
`

const LoadingSpinner = ({children}) => {
  const { loadingPage, events } = useContext(AppStateContext)

  const smallRef = useRef(null)
  const contentRef = useRef(null)
  const lastPos = {
    x: 0,
    target: 50,
    cancelId: null,
  }

  useLayoutEffect(() => {

    // console.log('Spinner ::' , events)

    events.addLoader()

    let elianto = new FontLoaded('Elianto-Regular')
    let poppins = new FontLoaded('Poppins Black')
    let icons = new FontLoaded('jaro.io icons')

    Promise.all([
      elianto.load(),
      poppins.load(),
      icons.load()
    ])
      .then(() => {
        events.finishLoading()
      }).catch(console.error)


    return () => {}
  }, [])

  const move = () => {
    // console.log(lastPos.target, Math.floor(lastPos.x))
    if (Math.ceil(lastPos.x) === lastPos.target)
      lastPos.target = lastPos.target * -1

    lastPos.x = lerp(lastPos.x, lastPos.target, 0.1)
    smallRef.current.style.transform = `translateY(${lastPos.x}px)`

    lastPos.cancelId = requestAnimationFrame(() => move())
  }

  return (
    <AnimatePresence>
      {loadingPage ?

        <SpinnerContainer>

          <Content ref={contentRef}>
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="800">
              <defs>
                <filter id="goo">
                  <feGaussianBlur
                    in="SourceGraphic"
                    stdDeviation="10"
                    result="blur"
                  />
                  <feColorMatrix
                    in="blur"
                    mode="matrix"
                    values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                    result="goo"
                  />
                  <feComposite in="SourceGraphic" in2="goo" operator="atop" />
                </filter>
              </defs>
            </svg>

            <SmallBall ref={smallRef} />
            <BigBall />
          </Content>

        </SpinnerContainer>
        :
        <>
          {children}
        </>
      }
    </AnimatePresence>
  )
}

export default LoadingSpinner
