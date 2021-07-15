import React, {useContext} from 'react'
import {smallUp} from '../../styles/mixins'
import styled, {css} from 'styled-components'
import {AppStateContext} from '../../contexts/AppStateContext'
import {AnimatePresence, motion} from 'framer-motion'

const MoonBg = styled( motion.div )`
  position: ${ ({position}) => position } ;
  top: 0;
  left: 0;
  right: 0;
  height: 1185px;;
  width: 100%;
  overflow: hidden;
  z-index: -100;
  //border: thick solid red;

  .moonlight{
    //border: thick solid yellow;

    position: absolute;
    margin: auto;
    height: 1185px;
    bottom: 0;
    left: 0;
    right: -80%;
    top: -38%;  
    width: initial;
    transform: translateX(-20%); 
    
    ${ smallUp( css`
      transform: translateX(0%); 
      right: 0;
      width: 147%;
      //top: 0;
      top: -45%;


    ` ) };
    
    svg{
      //display: none;
      #Moon{
        display: ${ ({moon}) => moon ? 'initial' : 'none' };
      }
    }
  }
`

const Moon = ( ) => {

  const {  moonLight: { showMoon, show, position, } } = useContext( AppStateContext );

  return (

    <AnimatePresence>

      {
        show && <MoonBg moon={showMoon} position={position} >
        <div className="moonlight">
          <svg xmlns="http://www.w3.org/2000/svg"
               width="100%" height="100%" viewBox="0 0 1302.799 1302.8">

            <filter id="inset-shadow-1">
              <feOffset dx='0' dy='6'/>

              <feGaussianBlur stdDeviation='6' result='offset-blur'/>

              <feComposite operator='out' in='SourceGraphic' in2='offset-blur' result='inverse'/>

              <feFlood floodColor='black' floodOpacity='1' result='color'/>

              <feComposite operator='in' in='color' in2='inverse' result='shadow'/>

              <feComposite operator='over' in='shadow' in2='SourceGraphic'/>
            </filter>


            <g id="Moon_and_Moonlight" transform="translate(-367 238)">
              <g id="Moonlight" transform="translate(367 -238)">
                <path id="Path_57" data-name="Path 57" d="M651.4,1302.8A651.468,651.468,0,0,1,397.724,51.352a651.465,651.465,0,0,1,507.353,1200.09A647.531,647.531,0,0,1,651.4,1302.8" transform="translate(0 0)" fill="rgba(255,255,250,0.05)" fillRule="evenodd"/>
                <path id="Path_58" data-name="Path 58" d="M655.545,1241.09A585.612,585.612,0,0,1,427.524,116.15,585.609,585.609,0,0,1,883.568,1194.935a582.036,582.036,0,0,1-228.023,46.155" transform="translate(-4.145 -4.145)" fill="rgba(255,255,250,0.05)" fillRule="evenodd"/>
                <path id="Path_59" data-name="Path 59" d="M659.69,1179.38a518.925,518.925,0,1,1,202.369-40.953A516.55,516.55,0,0,1,659.69,1179.38" transform="translate(-8.29 -8.29)" fill="rgba(255,255,250,0.05)" fillRule="evenodd"/>
                <path id="Path_60" data-name="Path 60" d="M663.835,1117.67a453.091,453.091,0,1,1,176.714-35.75,451.052,451.052,0,0,1-176.714,35.75" transform="translate(-12.435 -12.435)" fill="rgba(255,255,250,0.05)" fillRule="evenodd"/>
                <path id="Path_61" data-name="Path 61" d="M667.98,1055.96a387.225,387.225,0,1,1,151.059-30.547A385.549,385.549,0,0,1,667.98,1055.96" transform="translate(-16.58 -16.58)" fill="rgba(255,255,250,0.05)" fillRule="evenodd"/>
                <path id="Path_62" data-name="Path 62" d="M672.125,994.25a321.364,321.364,0,1,1,125.406-25.345A320.066,320.066,0,0,1,672.125,994.25" transform="translate(-20.725 -20.725)" fill="rgba(255,255,250,0.05)" fillRule="evenodd"/>
              </g>
              {
                showMoon && <path id="Moon"
                              className='moon-svg'
                              filter="url(#inset-shadow-1)"
                              d="M-1845.016-791.756a9.166,9.166,0,0,1,3.354-12.52l72.339-41.765a4.57,4.57,0,0,0,1.543-6.125,4.574,4.574,0,0,0-4.633-2.208l-6.851,3.956a23.745,23.745,0,0,1-32.436-8.691,23.745,23.745,0,0,1,8.691-32.436l56.545-32.646a3.377,3.377,0,0,0,1.139-4.569,3.374,3.374,0,0,0-4.525-1.3v0l11.539-6.662h0l-164.2,94.8A25.616,25.616,0,0,1-1937.5-851.3a25.617,25.617,0,0,1,9.376-34.992l103.906-59.99a2.8,2.8,0,0,0,.54-3.484,2.8,2.8,0,0,0-3.743-1.08v0l68.91-39.785v0l-109.277,63.091a7.024,7.024,0,0,1-9.595-2.57,7.023,7.023,0,0,1,2.571-9.594l108.579-62.689a5.279,5.279,0,0,0,1.376-6.8,5.283,5.283,0,0,0-5.585-2.509l-.045.026a12.807,12.807,0,0,1-17.5-4.688,12.807,12.807,0,0,1,4.688-17.5l17.305-9.991c-.106-3.031-.159-6.066-.159-9.123,0-141.473,114.687-256.159,256.16-256.159a255.158,255.158,0,0,1,165.654,60.765l43.336-25.02a12.808,12.808,0,0,1,17.5,4.688,12.807,12.807,0,0,1-4.688,17.5l-36.677,21.176h0l36.124-20.856a2.064,2.064,0,0,0-.677,2.776,2.061,2.061,0,0,0,2.741.8v0l77.125-44.528a12.808,12.808,0,0,1,17.5,4.688,12.808,12.808,0,0,1-4.688,17.5l-102.336,59.084a2.461,2.461,0,0,0,.07,2.345,2.461,2.461,0,0,0,1.994,1.234l16.245-9.379a16.939,16.939,0,0,1,23.14,6.2,16.939,16.939,0,0,1-6.2,23.14l-1.24.716a3.7,3.7,0,0,0-1.254,5.018,3.753,3.753,0,0,0,4.952,1.432v0l62.087-35.846a19.419,19.419,0,0,1,26.527,7.107,19.42,19.42,0,0,1-7.107,26.528l-43.731,25.248a2.066,2.066,0,0,0-.669,2.771,2.061,2.061,0,0,0,2.742.8h0l8.98-5.185a11.479,11.479,0,0,1,15.681,4.2,11.478,11.478,0,0,1-4.2,15.68l-58.058,33.52a257.229,257.229,0,0,1,5.293,52.059c0,141.473-114.686,256.16-256.159,256.16a255.34,255.34,0,0,1-179.974-73.877L-1832.5-788.4a9.124,9.124,0,0,1-4.574,1.229A9.161,9.161,0,0,1-1845.016-791.756Z" transform="translate(2528.15 1466.133)"
                              fill="#fff"/>
              }
            </g>
          </svg>

        </div>
      </MoonBg>
      }

    </AnimatePresence>
  )
}

export default Moon
