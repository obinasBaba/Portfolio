import React from 'react'
import styled, { css } from 'styled-components'
import { mediumUp, spacing } from '../../../../../styles/mixins'
import { Typography } from '@material-ui/core'
import {motion} from 'framer-motion'

export const ExperimentItem = styled( motion.div )`
  //border: 1px solid red;
  flex: 1 1 50%;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  cursor: pointer;

  ${spacing('pv', 5)};
  ${spacing('pb', 3)};


  img {
    width: clamp(100px, 35vw, 230px);
    height: clamp(100px, 35vw, 230px);
    object-fit: cover;
    margin: 0 auto;
    border-radius: 50%;
    box-shadow: 0 15px 40px 1px rgb(0 0 0 / 25%);

    ${spacing('mb', 5)};
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

const ExperimentTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  //border: thin solid lightcoral;
  width: 85%;
  margin: 0 auto;
  ${spacing('ph', 3)};
  
  .title{
    font-weight: lighter;
    //letter-spacing: 1px;
  }
  
`


const NumberContainer = styled( Typography )`
  position: relative;
  transition: transform 1s cubic-bezier(0.6, 0.01, 0, 0.9) .2s;
  
  &::after{
    position: absolute;
    top: 100%;
    left: 50%;
    transition: transform 1s cubic-bezier(0.6, 0.01, 0, 0.9),
                opacity .5s ease-in;
    
    transform: translateX(-50%) translateY(100%);
    opacity: 0;
    content: '';
    display: block;
    height: 14px;
    width: 7px;
    background: navajowhite;
  }
`

const Item = ({  imgUrl, title, index}) => {
  return (
    <ExperimentItem  >
      <img src={imgUrl} alt={'boo'} />

      <ExperimentTitle >


        <Typography align="left" variant={'subtitle1'} className='title' >{title}</Typography>
        <NumberContainer className='num' variant={'body2'}>0{index + 1}</NumberContainer>

      </ExperimentTitle>
    </ExperimentItem>
  )
}

export default Item
