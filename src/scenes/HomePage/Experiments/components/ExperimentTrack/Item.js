import React from 'react'
import styled, { css } from 'styled-components'
import { mediumUp, spacing } from '../../../../../styles/mixins'
import { Typography } from '@material-ui/core'

export const ExperimentItem = styled.div`
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

const Item = ({  imgUrl, title, index}) => {
  return (
    <ExperimentItem  >
      <img src={imgUrl} alt={'boo'} />

      <ExperimentTitle >


        <Typography align="left" variant={'subtitle1'} className='title' >{title}</Typography>
        <Typography variant={'body2'}>0{index + 1}</Typography>

      </ExperimentTitle>
    </ExperimentItem>
  )
}

export default Item
