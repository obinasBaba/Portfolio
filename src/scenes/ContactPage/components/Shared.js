import styled from 'styled-components'
import {TextField as MuiTextField, Typography} from '@material-ui/core'
import {spacing, text} from '../../../styles/mixins'

export const HeadLineTitle = styled( Typography )`
  font-family: Elianto-Regular, serif;
  font-weight: bolder;
  line-height: 130%;
  //color: #617683;
  color: #a4b5c0;
  //color: #5d6c7b;

  ${spacing('pr', 5)};

  ${spacing('mb', 6)};
  
`

export const CustomTextField = styled( MuiTextField )`
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