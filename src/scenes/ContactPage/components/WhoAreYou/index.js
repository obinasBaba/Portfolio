import React, {useEffect, useRef, useState} from 'react'
import styled from 'styled-components'
import {spacing, text} from '../../../../styles/mixins'
import {TextField, Typography} from '@material-ui/core'
import Form from './components/form'
import {HeadLineTitle} from '../Shared'

const WhoContainer = styled.div`
`

const FormContainer = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  gap: 5rem;
  
  ${spacing('mt', 6)};

`

const FormTextField = styled( TextField )`
  position: relative;
  flex: 1;
  //border: thin solid ;
  
  & .MuiFormLabel-root{
    color: #5d6c7b !important;
    letter-spacing: 1.4px;
    ${text(1)};

    &:focus, &:hover {
      color: #a4b5c0 !important;
    }
    
  }
  
  & .MuiInput-input {
    border-bottom: 2px solid #5d6c7b;
    color: #eec5b9;


    &:focus {
      border-bottom: 2px solid #a4b5c0;
    }
  }


  & .MuiInput-underline:after,
  .MuiInput-underline:before {
    //border-bottom: 3px solid #02021e;
    display: none;
  }

  & .MuiInput-underline:after {
    transition-delay: .17s;
  }

  .MuiInput-underline:before {
    //border-bottom: 3px solid #fc5031;;

    //transition: transform .4s ease-in;
  }

  &:hover, &:focus {

    .MuiFormLabel-root {
      color: #a4b5c0 !important;
    }
  }


  &:hover fieldset {
    border-color: rgba(241, 215, 206, 0.68);;
  }

  .MuiInputBase-multiline {
    padding: 0;
  }

`



const WhoAreYou = ( {validationCallback} ) => {

  const inputLength = useRef(0)
  const [helperTxt, setHelperTxt] = useState('')

  const onChange = (event) => {
    inputLength.current = (event.target.value.length);
  };

  useEffect(() => {
    console.log(validationCallback)
    validationCallback.cb = () => {
      console.log( 'lent', inputLength.current)
      if ( inputLength.current < 10 ){
        setHelperTxt('tell me your name')
        return false;
      }

      return true
    }
  }, [])

  return (
    <WhoContainer>
      <HeadLineTitle variant='h2'>
        good day human. who are you?
      </HeadLineTitle>

      <FormContainer>
          <FormTextField id="standard-basic"
                         color='white'
                         fullWidth
                         required
                         onChange={onChange}
                         inputMode='text'
                         helperText={helperTxt}
                         label="What are you called?" />


          <FormTextField id="standard-basic"
                         fullWidth
                         inputMode='tel'
                         label="Company" />
      </FormContainer>

    </WhoContainer>
  )
}

export default WhoAreYou
