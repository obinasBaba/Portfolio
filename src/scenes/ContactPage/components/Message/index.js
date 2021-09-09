import React from 'react'
import styled from 'styled-components'
import { HeadLineTitle, CustomTextField } from '../shared'
import { TextField as MuiTextField } from '@material-ui/core'
import { spacing, text } from '../../../../styles/mixins'
import { FieldArray, Field } from 'formik'

const MessageContainer = styled.div``

const MessageInput = styled.div`
  max-width: 60%;

`

const Message = ({ ...props }) => {
  return (
    <MessageContainer>
      <HeadLineTitle variant="h2">
        cool. What can you tell me about your project?
      </HeadLineTitle>

      <MessageInput>
        <Field
          name="message"
          multiline={true}
          fullWidth={true}
          rows={4}
          label="Tell me about your project"
          as={CustomTextField}
        />

      </MessageInput>
    </MessageContainer>
  )
}

export default Message