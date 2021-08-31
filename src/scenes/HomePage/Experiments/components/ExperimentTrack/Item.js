import React from 'react'
import styled, { css } from 'styled-components'
import {mediumUp, smallDown, spacing} from '../../../../../styles/mixins'
import { Typography } from '@material-ui/core'
import {motion} from 'framer-motion'
import {useProjectSvg} from '../../../../../hooks/queries/useProjectSvg'
import RightArrowLink from './RightArrowLink'

export const ExperimentItem = styled( motion.div )`
  //border: 1px solid red;
  flex: 1 1 50%;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  //cursor: pointer;

  ${spacing('pv', 5)};
  ${spacing('pb', 3)};
  
  video{
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
  }
  

  ${mediumUp(css`
    ${spacing('pv', 5)};
    ${spacing('pb', 3)};
    flex: 1 1 25%;
    //max-width: 330px;
    img {
      width: clamp(100px, 20vw, 230px);
      height: clamp(100px, 20vw, 230px);
    }
  `)};
  
  .title{
    transition: transform .5s cubic-bezier(0.6, 0.01, 0, 0.9), color .3s ease-in;
    transform: scale(1);
    color: white;
  }
  
  &:hover{
    .title{
      transition: transform .5s cubic-bezier(0.6, 0.01, 0, 0.9) .1s, color .3s ease-in;
      color: navajowhite;
      transform: scale(1.1);
    }

    .num{
      transition: transform .5s cubic-bezier(0.6, 0.01, 0, 0.9) .3s;
      transform: translateY(-30%);
      &::after{
        transform: translateX(-50%) translateY(50%);
        transition: transform 1s cubic-bezier(0.6, 0.01, 0, 0.9),
                    opacity .2s ease-in;
        opacity: 1;
      }
    }
  }
`

const InfoBar = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  align-items: flex-start;
  //border: thin solid teal;
  position: relative;
  
  //border: thin solid lightcoral;
  width: 85%;
  margin: 0 auto;
  // ${spacing('ph', 1)};
  
  .title{
    font-weight: lighter;
    //letter-spacing: 1px;
  }
  
  & :hover{
    svg{
      transform: rotate(-20deg) translateY(15px);
      transition: transform 1s cubic-bezier(0.6, 0.01, 0, 0.9);
      
      & *{
        fill:  #e7a28f;
        transition: fill .3s ease-in-out;

      }
    }
  }
  
  svg{
    //border: thin solid red;
    position: absolute;
    bottom: 11px;
    transition: transform 1s cubic-bezier(0.6, 0.01, 0, 0.9);


    & *{
      filter: drop-shadow( 0px 7px 2px rgba(0, 0, 0, .7));
      transition: fill .3s ease-in-out;
    }
  }
  
`



const Item = ({  imgUrl, title, index}) => {


  return (
    <ExperimentItem  >

      <video autoPlay loop muted playsInline>
        <source src={imgUrl.webm.publicURL} type="video/webm" />
        <source src={imgUrl.mp4.publicURL} type="video/mp4" />
      </video>

      <InfoBar >

        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 400 400">
          <defs>
            <path d="M0, 200a200, 200 0 1, 0 400, 0a200, 200 0 1, 0 -400, 0" id="txt-path"/>
          </defs>

          <text   fill="#fff" fontSize="1.4667rem" letterSpacing='1.8px' fontWeight="300">
            <textPath startOffset="100"
                      href="#txt-path">{title}</textPath>
          </text>


        </svg>

        {/*<Typography align="left" variant={'subtitle1'} className='title' >0{index + 1}.&nbsp;{ title}</Typography>*/}

        {/*<RightArrowLink/>*/}

      </InfoBar>
    </ExperimentItem>
  )
}

export default Item
