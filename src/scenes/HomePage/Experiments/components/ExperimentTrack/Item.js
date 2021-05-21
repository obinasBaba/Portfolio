import React from 'react'
import styled, { css } from 'styled-components'
import { mediumUp, spacing } from '../../../../../styles/mixins'
import { Typography } from '@material-ui/core'

export const ExperimentItem = styled.div`
  //background-color: #faebd6;

  ${spacing('pv', 5)};
  ${spacing('pb', 3)};

  background: rgba(2, 2, 30, 0.3);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
  flex: 1 1 50%;

  display: flex;
  flex-flow: column;
  justify-content: space-between;
  //align-items: center;
  

  img {
    width: clamp(100px, 35vw, 230px);
    height: clamp(100px, 35vw, 230px);
    object-fit: cover;
    margin: 0 auto;
    border-radius: 50%;
    box-shadow: 0 15px 40px 1px rgb(0 0 0 / 55%);

    ${spacing('mb', 9)};
  }

  ${mediumUp(css`
    ${spacing('pv', 5)};
    ${spacing('pb', 3)};
    flex: 1 1 25%;
    //max-width: 330px;
    img{
      width: clamp(100px, 20vw, 230px);
      height: clamp(100px, 20vw, 230px);
    }
  `)};
`

const ExperimentTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 85%;
  margin: 0 auto;
  
`

const Item = ({ key, imgUrl, title }) => {
  return (
    <ExperimentItem>
      <img src={imgUrl} alt={'boo'} />

      <ExperimentTitle >

        <Typography align="left" variant={'body2'}>{title}</Typography>

        <Typography variant={'body2'}>12</Typography>

      </ExperimentTitle>
    </ExperimentItem>
  )
}

export default Item
