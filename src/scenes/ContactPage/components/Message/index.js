import React from 'react'
import styled, {css} from 'styled-components'
import { TextField as MuiTextField } from '@material-ui/core'
import { FieldArray, Field } from 'formik'
import { HeadLineTitle, CustomTextField } from '../shared'
import {spacing, text} from '../../../../styles/mixins'
import {largeUp} from "../../../../styles/mixins/breakpoints";
import useRefreshMouseListeners from "../../../../hooks/useRefreshMouseListeners";

const MessageContainer = styled.div``

const MessageInput = styled.div`
  max-width: 70%;

  ${largeUp( css`
    max-width: 60%;
  ` )};

`

function Message({ ...props }) {

    useRefreshMouseListeners('.message-container [data-pointer]')


    return (
    <MessageContainer className='message-container' >
      <HeadLineTitle variant="h2">
        cool. What can you tell me about your project?
      </HeadLineTitle>

      <MessageInput>
        <Field
          name="message"
          multiline
          fullWidth
          rows={3}
          label="Tell me about your project"
          as={CustomTextField}
        />

      </MessageInput>
    </MessageContainer>
  )
}

export default Message
