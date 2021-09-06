import React from 'react'
import styled from 'styled-components'
import {HeadLineTitle, TextField} from '../Shared'
import {spacing} from '../../../../styles/mixins'

const EmailContainer = styled.div`
  
`

const EmailInputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 70%;
  
  gap: 4rem;
  
  ${spacing('mb', 3)};

`

const Email = () => {
  return (
    <EmailContainer>

      <HeadLineTitle variant='h2'>
        Nearly there. How can i reach you henok getachew?
      </HeadLineTitle>

      <EmailInputContainer >
        <TextField label='e-mail address'   />
        <TextField label='phone number'  />
      </EmailInputContainer>

    </EmailContainer>
  )
}

export default Email
