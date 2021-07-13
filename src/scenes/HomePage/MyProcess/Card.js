import React from 'react'
import styled from 'styled-components'
import { spacing, text } from '../../../styles/mixins'
import { Typography } from '@material-ui/core'
import {Build, Design} from './icons'

const StyledCard = styled.div`
  position: relative;
  padding: 2rem 4rem 2rem ;
  background-image: linear-gradient(137.81deg, #e7a28f 3.52%, #f9d6ac 41.89%, #fbfefc 96.77%);
  max-width: 54ch;
  border-radius: 20px;
  box-shadow: 0 40px 49px 0 rgba( 0 0 0/ 16%);
  color: #02021e;
  
  display: flex;
  flex-flow: column;
  
  & .title{
    z-index: 1;
    font-family: var(--poppins);
    letter-spacing: -1px;
    font-weight: bold;
    ${ spacing('mb', 1.6) };
  }
  
  p{
    ${ text(1.02) };
  }
  
  & svg{
    margin-left: -30px;
  }
  
  &:after{
    content: '0${({no}) => no}';
    position: absolute;
    top: -40%;
    right: -20%;
    font-size: var(--poppins);
    font-weight: lighter;
    letter-spacing: -3px;
    -webkit-text-stroke: 1.5px #3719ca;
    color: transparent;
    ${ text(11) };
    
  }
  
`

const Keys = styled.div`
  display: flex;
  text-transform: uppercase;
  letter-spacing: .5px;
  align-self: flex-end;
  font-weight: lighter;
  opacity: .8;
  text-shadow: 0 3px 3px rgba(0, 0, 0, 0.51);
  position: absolute;
  right: 0;
  bottom: 0;


  ${text(.7)};
  ${spacing('mt',
          2)};
  ${spacing('mb',
          1)};
  ${spacing('mr',
          3)};
`

const Card = ( {Icon, no, txt, title, methodologies, index, path} ) => {
  return (
    <StyledCard no={index + 1}>

      <Design path={path} rocket={index === 4} design={index === 1} />
      <Typography variant="h3" className='title'>{title}</Typography>
      <Typography>
        {txt}
      </Typography>

      <Keys>  { methodologies} </Keys>

    </StyledCard>
  )
}

export default Card
