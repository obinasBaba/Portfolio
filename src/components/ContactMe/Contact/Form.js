import React from 'react'
import styled from 'styled-components'
import {spacing} from '../../../styles/mixins'
import TextField from './TextField'
import MotionBtn from '../../MotionBtn'

const StyledForm = styled.form`
  width: 100%;
  display: flex;
  flex-flow: column;
  
  ${ spacing('mt', 1) };
  
  & > :not(:first-child){
      ${ spacing( 'mt', 3 ) };
  }
  
  & > :last-child{
    align-self: flex-end;
  }
`


const Form = () => {
  return (
    <StyledForm>

        <TextField label='Name'/>

        <TextField label='E-mail' />

        <TextField label='Message' multiline={true} rows={3} />


      <MotionBtn text='Send Message' arrow={false}  />

    </StyledForm>
  )
}

export default Form
