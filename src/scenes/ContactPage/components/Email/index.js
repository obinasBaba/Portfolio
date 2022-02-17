import React from 'react'
import styled, {css} from 'styled-components'
import {HeadLineTitle, CustomTextField} from '../shared'
import {spacing} from '../../../../styles/mixins'
import {FieldArray, Field} from 'formik'
import {largeUp} from "../../../../styles/mixins/breakpoints";

const EmailContainer = styled.div`
  
`

const EmailInputContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-flow: column;
  
  justify-content: space-between;
  
  
  ${spacing('gap', 6)};
  
  ${largeUp( css`
    width: 70%;
    flex-flow: row;
    align-items: center;

  ` )};

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
      </EmailInputContainer>

    </EmailContainer>
  )
}

export default Email
