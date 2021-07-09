import React from 'react'
import styled from 'styled-components'
import { spacing, text } from '../../../styles/mixins'
import { Typography } from '@material-ui/core'

const StyledCard = styled.div`
  position: relative;
  padding: 2rem 4rem 2rem ;
  background-image: linear-gradient(137.81deg, #e7a28f 3.52%, #f9d6ac 41.89%, #fbfefc 96.77%);
  max-width: 54ch;
  border-radius: 20px;
  box-shadow: 0 40px 49px 0 rgba( 0 0 0/ 16%);
  color: #02021e;
  
  & .title{
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
    content: '${({no}) => no}';
    position: absolute;
    top: -40%;
    right: -20%;
    font-size: var(--poppins);
    font-weight: 900;
    letter-spacing: -3px;
    -webkit-text-stroke: 1px #3719ca;
    color: transparent;
    ${ text(11) };
    
  }
  
`


const Card = ( {Icon, no, txt, title} ) => {
  return (
    <StyledCard no={no}>

      <Icon/>
      <Typography variant="h3" className='title'>{title}</Typography>
      <Typography>
        {txt}
      </Typography>

    </StyledCard>
  )
}

export default Card
