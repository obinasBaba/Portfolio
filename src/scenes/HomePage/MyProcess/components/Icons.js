import React, {useEffect, useRef} from 'react'
import lotti  from  'lottie-web';
import styled, {css} from 'styled-components'


const IconContainer = styled.div`
  //z-index: -1;
  height: 100px;
  width: 100px;
  margin: -20px -50px -20px -20px;



  path {
    stroke: #3719ca;
    fill: #3719ca;
  }
  svg{
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

export const Design = ({path, rocket}) => {

  const iconRef = useRef(null)

  useEffect(() => {
    let r = 1;
    if (path)
    {
      let l = lotti.loadAnimation({
        container: iconRef.current,
        renderer: 'svg',
        loop: false,
        autoplay: true,
        path: path,
        // animationData: build
      })

      // l.addEventListener('data_ready', () => {})
      l.addEventListener('complete', () => {
        1 === r ? r = -1 : -1 === r && (r = 1);
          l.setDirection(r);
          // l.play();
      })

    }
  }, [])

  if ( !path )
    return <Build />

  return (
    <IconContainer ref={iconRef} rocket={rocket} />
  )
}

export const Build = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 54 54">
      <g id="process__icon-3" transform="translate(-75 -50.095)">
        <g id="Icon" transform="translate(75 50.095)" fill="none" stroke="#3719ca" strokeWidth="1">
          <rect width="54" height="54" rx="27" stroke="none"/>
          <rect x="0.5" y="0.5" width="53" height="53" rx="26.5" fill="none"/>
        </g>
        <g id="wrench-thin" transform="translate(83 58.095)">
          <path id="Path_6585" data-name="Path 6585" d="M0,0H38V38H0Z" fill="none"/>
          <path id="Path_6586" data-name="Path 6586" d="M27.46,5.5l-6.229,6.229.84,4.2,4.2.84L32.5,10.54h0A9.5,9.5,0,0,1,19.157,22.569h0l-8.325,9.638a3.563,3.563,0,1,1-5.038-5.038l9.638-8.325h0A9.5,9.5,0,0,1,27.46,5.5Z" fill="none" stroke="#3719ca" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"/>
        </g>
      </g>
    </svg>

  )
}