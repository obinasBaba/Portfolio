import React from 'react'
import {Container, Typography} from '@material-ui/core'
import styled from 'styled-components'
import {spacing} from '../../../styles/mixins'

const FontContainer = styled( Container )`
  display: flex;
  justify-content: space-evenly;
  
  color: ${ ({theme}) => theme.palette.primary.main };
  font-family: abyssopelagic,serif;
  ${spacing('mt', 14)};
`

const FontSample = styled.div`
  & > :not( :first-child ){
    ${ spacing('mt', 2) };
    letter-spacing: 10px;
    font-weight: bolder;
  }

  h4{
    letter-spacing: 6px;
  }
  
  &:first-child{
    font-family: 'abyssopelagic';
  }
  
  &:last-child *{
    font-family: Poppins, sans-serif;
    font-weight: 900;
    font-style: normal;
  }
`

const FontUsed = () => {
  return (
    <FontContainer maxWidth={'xl'} fixed={true} >
      <FontSample className='abyssopelagic'  >
        <Typography variant='h4' noWrap className='abyssopelagic' > Abyssopelagic </Typography>
        <Typography variant='h6' noWrap className='abyssopelagic'> abcdefghijkl </Typography>
        <Typography variant='h6' noWrap className='abyssopelagic'> mnopqrstuvwx </Typography>
        <Typography variant='h6' noWrap className='abyssopelagic'> yz1234567890 </Typography>
      </FontSample>

      <FontSample>
        <Typography variant='h4' noWrap > Poppins </Typography>
        <Typography variant='h6' noWrap> abcdefghijkl </Typography>
        <Typography variant='h6' noWrap> mnopqrstuvwx </Typography>
        <Typography variant='h6' noWrap> yz1234567890 </Typography>
      </FontSample>

    </FontContainer>
  )
}

export default FontUsed
