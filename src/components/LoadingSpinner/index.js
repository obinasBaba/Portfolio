import React, { useRef } from 'react'
import styled from 'styled-components'
import { lerp } from '../../helpers/utils'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)


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

  const smallRef = useRef(null)
  const contentRef = useRef(null)
  const lastPos = {
    x: 0,
    target: 50,
    cancelId: null,
  }

  let magnetElements;


  const move = () => {
    // console.log(lastPos.target, Math.floor(lastPos.x))
    if (Math.ceil(lastPos.x) === lastPos.target)
      lastPos.target = lastPos.target * -1

    lastPos.x = lerp(lastPos.x, lastPos.target, 0.1)
    smallRef.current.style.transform = `translateY(${lastPos.x}px)`

    lastPos.cancelId = requestAnimationFrame(() => move())
  }

  return (
        <SpinnerContainer>

          <Content ref={contentRef}>
            <SmallBall ref={smallRef} />
            <BigBall />
          </Content>

        </SpinnerContainer>
  )
}

export default LoadingSpinner
