import React, {useEffect, useRef} from 'react'
import lotti  from  'lottie-web';
import styled, {css} from 'styled-components'
import build from './build.json'

export const Call = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 54 54">
      <g id="process__icon-1" transform="translate(-75 -50.095)">
        <g id="Icon" transform="translate(75 50.095)" fill="none" stroke="#3719ca" strokeWidth="1">
          <rect width="54" height="54" rx="27" stroke="none"/>
          <rect x="0.5" y="0.5" width="53" height="53" rx="26.5" fill="none"/>
        </g>
        <path id="Path_6577" data-name="Path 6577" d="M22.22,24.251a10.6,10.6,0,0,0,4.909,4.886,1,1,0,0,0,.984-.074l3.147-2.1a1,1,0,0,1,.954-.088L38.1,29.4a1,1,0,0,1,.6,1.043,6.034,6.034,0,0,1-5.985,5.269A17.093,17.093,0,0,1,15.625,18.618a6.034,6.034,0,0,1,5.269-5.985,1,1,0,0,1,1.043.6l2.525,5.892a1,1,0,0,1-.083.947L22.288,23.27A1,1,0,0,0,22.22,24.251Z"
              transform="translate(75.024 53.274)" fill="none" stroke="#3719ca" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"/>
      </g>
    </svg>
  )
}

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
          l.play();
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

export const Launch = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 54 54">
      <g id="process__icon-4" transform="translate(-75 -50.095)">
        <g id="Icon" transform="translate(75 50.095)" fill="none" stroke="#3719ca" strokeWidth="1">
          <rect width="54" height="54" rx="27" stroke="none"/>
          <rect x="0.5" y="0.5" width="53" height="53" rx="26.5" fill="none"/>
        </g>
        <g id="rocket-launch-thin" transform="translate(84.922 60.018)">
          <path id="Path_6587" data-name="Path 6587" d="M0,0H34.155V34.155H0Z" fill="none"/>
          <path id="Path_6588" data-name="Path 6588" d="M13.405,28.322c-1.51,4.528-7.547,4.528-7.547,4.528s0-6.038,4.528-7.547" transform="translate(-0.856 -3.697)" fill="none" stroke="#3719ca" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25"/>
          <path id="Path_6589" data-name="Path 6589" d="M28.024,14.873,18.967,23.93l-6.038-6.038,9.057-9.057c3.43-3.429,6.859-3.4,8.321-3.178a1.062,1.062,0,0,1,.894.894c.218,1.463.252,4.892-3.178,8.321Z" transform="translate(-1.889 -0.815)" fill="none" stroke="#3719ca" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25"/>
          <path id="Path_6590" data-name="Path 6590" d="M27.547,18.232v8.615a1.067,1.067,0,0,1-.313.755L22.92,31.917a1.067,1.067,0,0,1-1.8-.545L20,25.78" transform="translate(-2.922 -2.664)" fill="none" stroke="#3719ca" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25"/>
          <path id="Path_6591" data-name="Path 6591" d="M19.373,11.161H10.758a1.067,1.067,0,0,0-.755.313L5.688,15.789a1.067,1.067,0,0,0,.545,1.8l5.592,1.118" transform="translate(-0.785 -1.631)" fill="none" stroke="#3719ca" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25"/>
        </g>
      </g>
    </svg>

  )
}

