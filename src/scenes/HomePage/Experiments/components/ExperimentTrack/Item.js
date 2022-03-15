import React from 'react'
import styled, { css } from 'styled-components'
import {
  spacing,

} from '../../../../../styles/mixins'
import { motion } from 'framer-motion'
import {largeUp, mediumUp, smallDown, xxLargeUp} from "../../../../../styles/mixins/breakpoints";
import Border from "../../../../../components/Footer/border.inline.svg";
import Dribbble from "../../../../../assets/images/brands/dribbble.inline.svg";

export const ExperimentItem = styled(motion.div)`
  position: relative;
  border-radius: 50%;
  flex: 1 1 50%;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  //cursor: pointer;

  ${spacing('mv', 5)};
  ${spacing('mb', 3)};
  
  a{
    position: absolute;
    height: 100%;
    width: 100%;
    border-radius: 50%;
    z-index: 10;
  }
  
  video {
    //border: thin solid red;

    width: clamp(100px, 35vw, 230px);
    height: clamp(100px, 35vw, 230px);
    object-fit: cover;
    margin: 0 auto;
    border-radius: 50%;
    box-shadow: 0 15px 40px 1px rgb(0 0 0 / 25%);

    ${spacing('mb', 5)};

    ${smallDown(css`
      width: clamp(150px, 36vw, 230px);
      height: clamp(150px, 36vw, 230px);
    `)};

    ${xxLargeUp(css`
      width: clamp(100px, 35vw, 270px);
      height: clamp(100px, 35vw, 270px);
    `)};
  }

  ${mediumUp(css`
    ${spacing('mv', 5)};
    ${spacing('mb', 3)};
    
    flex: 1 1 25%;
  `)};
  
  ${largeUp( css`
    flex: initial;

  ` )};

  &:hover{
    svg{
      transform: rotate(-20deg) translateY(10px);
      transition: transform 1s cubic-bezier(0.6, 0.01, 0, 0.9);

      & *{
        fill:  white;
        transition: fill .3s ease-in-out;

      }
    }
  }

`

const InfoBar = styled.div`
  position: absolute;
  top: -6%;
  z-index: 1;
  
  
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  align-items: flex-start;
  
  //border: thin solid lightcoral;
  width: 100%;
  margin: 0 auto;
  // ${spacing('ph', 1)};
  
  ${largeUp( css`
    top: 10%;

  ` )};
  
  .title{
    font-weight: lighter;
    //letter-spacing: 1px;
  }

  svg{
    //border: thin solid red;
    //position: absolute;
    //bottom: 11px;
    transition: transform 1s cubic-bezier(0.6, 0.01, 0, 0.9);
    
    text{
      
    }


    & *{
      filter: drop-shadow( 0px 7px 2px rgba(0, 0, 0, .7));
      transition: fill .3s ease-in-out;
    }
    
    
  }


  
  
`



const Item = ({  imgUrl, title, index, link}) => {


  return (
    <ExperimentItem
                    // data-scroll
                    // data-scroll-speed={index}
                    data-pointer='focus'
                    // data-scroll-delay={index * Math.random()}
    >

      <a
          href="https://codesandbox.io/s/gracious-sanne-wo337b?file=/src/App.js"
          target="_blank"
          rel="noopener noreferrer"
          // data-pointer='focus'
      />


      <div className='video-div'  >
        <video autoPlay loop muted playsInline >
          <source src={imgUrl.webm.publicURL} type="video/webm" />
          <source src={imgUrl.mp4.publicURL} type="video/mp4" />
        </video>
      </div>


      <InfoBar >
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 400 400">
          <defs>
            <path d="M0, 200a200, 200 0 1, 0 400, 0a200, 200 0 1, 0 -400, 0" id="txt-path"/>
          </defs>

          <text   fill="#a4b5c0" fontSize="1.4667rem" letterSpacing='1.8px' fontWeight="300">
            <textPath startOffset="100"
                      href="#txt-path">{title}</textPath>
          </text>


        </svg>
      </InfoBar>

    </ExperimentItem>
  )
}

export default Item
