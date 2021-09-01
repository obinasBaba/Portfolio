import React, {useEffect, useRef} from 'react'
import lotti  from  'lottie-web';
import styled, {css} from 'styled-components'
import useOnScreen from '../../../../hooks/useOnScreen'


const IllustrationContainer = styled.div`
  //z-index: -1;
  position: absolute;
  left: 4%;
  top: -2%;
  //margin: -50px -50px -20px -20px;
  //border: thin solid red;
  width: 100px;
  height: 100px;
  

  path {
    stroke: #3719ca;
    fill: #3719ca;
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

export const Illustration = ({path, rocket}) => {

  const iconRef = useRef(null)
  const lottiRef= useRef(null)
  const inView = useOnScreen(iconRef, 0, )

  useEffect(() => {
    if ( !lottiRef.current ) return;

    if ( !inView )
      lottiRef.current.pause()
    else
      lottiRef.current.play()

  }, [inView])


  useEffect(() => {
    lotti.destroy(path)

    let r = 1;
    if (path) {
      lottiRef.current = lotti.loadAnimation({
        name: path,
        container: iconRef.current,
        renderer: 'svg',
        loop: false,
        autoplay: true,
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
  }, [])

  return (
    <IllustrationContainer ref={iconRef} rocket={rocket} />
  )
}