import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { spacing, text } from '../../../../styles/mixins'
import { Button, TextField, Typography } from '@material-ui/core'
import Form from './components/form'
import {CustomTextField, HeadLineTitle} from '../shared'
import { Formik, Field, useField, FieldArray } from 'formik'
import * as yup from 'yup'

const WhoContainer = styled.div``

const FormContainer = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  gap: 5rem;

  ${spacing('mt', 6)};
`

const WhoAreYou = ({ errors, ...props }) => {
  const inputLength = useRef(0)
  const [helperTxt, setHelperTxt] = useState('')

  return (
    <WhoContainer>
      <HeadLineTitle variant="h2">good day human. who are you?</HeadLineTitle>

      <FormContainer>
        <Field
          name="name"
          label="what should i call you?"
          inputMode="text"
          fullWidth
          as={CustomTextField}
        />

        <Field
          name="company"
          label="company"
          inputMode="text"
          fullWidth
          as={CustomTextField}
        />
      </FormContainer>
    </WhoContainer>
  )
}

export default WhoAreYou
