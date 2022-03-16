import React from 'react'
import {Container, Typography} from '@material-ui/core'
import styled from 'styled-components'
import {spacing} from '../../../styles/mixins'

const FontContainer = styled( Container )`
  display: flex;
  justify-content: space-evenly;
  
  img{
    max-width: 33%;
  }
  
  ${spacing('mt', 15)};
`


const FontUsed = ( {fonts} ) => {
  return (
    <FontContainer maxWidth={'xl'} fixed={true} >

        {fonts.map(({ publicURL }) => (
            <img src={publicURL} alt="" key={publicURL}/>
        ))}

    </FontContainer>
  )
}

export default FontUsed
