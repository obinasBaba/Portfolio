import React, {useEffect, useRef} from 'react'
import lotti  from  'lottie-web';
import styled, {css} from 'styled-components'
import useOnScreen from '../../../../../hooks/useOnScreen'
import {motion, useMotionValue} from "framer-motion";
import useLotti from "../../../../../helpers/useLotti";


const IllustrationContainer = styled( motion.div )`
  //z-index: -1;
  position: absolute;
  left: 4%;
  top: -2%;
  //margin: -50px -50px -20px -20px;
  //border: thin solid red;
  width: 100px;
  height: 100px;
  

  path {
    stroke: #1e213d;
    fill: #1e213d;
  }

  ${ ({design}) => design && css`
    transform: rotate(20deg);

  ` };
  
  ${ ({rocket}) => rocket && css`
    transform: rotate(20deg);
    path{
      fill: rgba(55, 25, 202, 0);
    }

  ` };
`

const LottiIcon = ({path, rocket, inView}) => {

  const lottiContainerRef = useRef(null)
  const lottiRef= useLotti(path, lottiContainerRef )
  // const inView = useOnScreen(lottiContainerRef, 0, )

  useEffect(() => {
    inView.onChange(v => {
      if (!lottiRef.current) return

      if (v)
        lottiRef.current.play()
      else
        lottiRef.current.pause()
    })

  }, [inView])


  /*useEffect(() => {
    lotti.destroy(path)

    let r = 1;
    if (path) {
      lottiRef.current = lotti.loadAnimation({
        name: path,
        container: lottiContainerRef.current,
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path: path,
        // animationData: build
      })

      // l.addEventListener('data_ready', () => {})
      lottiRef.current.addEventListener('complete', () => {
        1 === r ? r = -1 : -1 === r && (r = 1);
          lottiRef.current.setDirection(r);
          lottiRef.current.play();
      })

    }
  }, [])*/

  return (
    <IllustrationContainer ref={lottiContainerRef} rocket={rocket}/>
  )
}

export default LottiIcon