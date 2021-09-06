import React from 'react'
import styled from 'styled-components'
import {HeadLineTitle, TextField} from '../Shared'
import {TextField as MuiTextField} from '@material-ui/core'
import {spacing, text} from '../../../../styles/mixins'

const MessageContainer = styled.div`
  
`


const MessageInput = styled.div`
  max-width: 60%;
  
  ${spacing('mb', 4)};
`

const Message = () => {
  return (
    <MessageContainer>
      <HeadLineTitle variant='h2'>
        cool. What can you tell me about your project?
      </HeadLineTitle>

      <MessageInput >
        <TextField label='Message' multiline={true} rows={4} fullWidth />
      </MessageInput>

    </MessageContainer>
  )
}

export default Message
