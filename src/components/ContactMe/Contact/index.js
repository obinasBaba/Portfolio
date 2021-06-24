import React from 'react'
import styled, {css} from 'styled-components'
import {Typography} from '@material-ui/core'
import {mediumUp, spacing} from '../../../styles/mixins'

const ContactFormContainer = styled.div`
  //position: relative;
  background-color: rgb(30, 32, 64);
  padding: 3rem;
  flex: 50%;
  //z-index: 200;
  color: #f1d7ce;
  height: 100%;
`

const Title = styled( Typography )`
  position: relative;
  font-weight: bold;
  ${ spacing('mb', 6) };

  ${ mediumUp( css`
    ${ spacing('mb', 3) };
    &::after{
      ${ spacing('mt', 1) };
    }

  ` ) };
`


const Contact = () => {
  return (
    <ContactFormContainer>

      {/*<CloseBtn toggler={setContactIsOpen} state={setContactIsOpen} />*/}

      <Title afterColor='#f1d7ce'  variant="h4"> Let's talk. </Title>
      <Typography variant='body2' > New projects, freelance inquiry or even a coffee. </Typography>



    </ContactFormContainer>
  )
}

export default Contact
