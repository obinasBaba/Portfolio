import React from 'react'
import styled from 'styled-components'
import {spacing, text} from '../../styles/mixins'
import {Typography} from '@material-ui/core'

const ContactContainer = styled.div`
  display: flex;
  align-self: stretch;
  width: 100%;
  justify-content: space-between;
  align-items: flex-start;
`

const Content = styled.div`
  display: flex;
  flex: 1;
  flex-flow: column;
  justify-content: flex-start;
  
  border: thin solid red;
  
  ${spacing('gap', 1)};
`

const Inlay = styled.div`
  & > :first-child{
    text-transform: uppercase;
    font-weight: 300;
    letter-spacing: 2px;
    
    ${text(.7)};
  }

  & > {
    margin-top: 1rem;
    ${text(.5)};
  }
`



const Number = styled.div`
  width: 48%;
`

const ContactInfo = () => {
  return (
    <ContactContainer>
      <Number>1</Number>

      <Content>
        <h3>Contact Information</h3>

        <Inlay>
          <Typography variant='subtitle2'>General</Typography>
          <a>hi@henzzo.io</a>
          <a>+251 923 3655 39</a>
        </Inlay>

        <Inlay>
          <Typography variant='subtitle2' >Vat number</Typography>
          <a>*************</a>
        </Inlay>
      </Content>


    </ContactContainer>
  )
}

export default ContactInfo
