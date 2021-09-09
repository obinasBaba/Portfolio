import React from 'react'
import styled from 'styled-components'
import {HeadLineTitle, CustomTextField} from '../shared'
import {spacing} from '../../../../styles/mixins'
import {FieldArray, Field} from 'formik'

const EmailContainer = styled.div`
  
`

const EmailInputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 70%;
  
  ${spacing('gap', 6)};

`

const Email = ({ ...props}) => {
  return (
    <EmailContainer>

      <HeadLineTitle variant='h2'>
        Nearly there. How can i reach you ,
      </HeadLineTitle>

      <EmailInputContainer >
        <Field name='email' label='email address' type='text' as={CustomTextField} />
        <Field name='phone' label='phone no'  as={CustomTextField}/>

        {/*<CustomTextField label='e-mail address'   />*/}
        {/*<CustomTextField label='phone number'  />*/}
      </EmailInputContainer>

    </EmailContainer>
  )
}

export default Email
