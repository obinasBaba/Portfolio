import React from 'react'
import styled from 'styled-components'
import {spacing} from '../../styles/mixins'

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
  
  ${spacing('gap', .1)};
`

const Number = styled.div`
  width: 48%;
`


const ThankYou = () => {
  return (
    <ContactContainer>

      <Number>2</Number>

     <Content>
       <h3>Thank you</h3>
       <p>
         i would like to send a big thank you to the fellow humans who supported
         me in creating this project and to the wonderful open-source community
         out there.
       </p>

       <h3>
         people
       </h3>
     </Content>

    </ContactContainer>
  )
}

export default ThankYou
