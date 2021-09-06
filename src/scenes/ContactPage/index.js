import React, {useState} from 'react'
import styled from 'styled-components'
import {spacing} from '../../styles/mixins'
import {Container, Typography} from '@material-ui/core'
import HeaderMeta from './components/HeaderMeta'
import WhoAreYou from './components/WhoAreYou'
import BottomBar from './components/BottomBar'
import Topic from './components/Topic'
import Message from './components/Message'
import Email from './components/Email'
import Check from './components/Check'
import {useMotionValue} from 'framer-motion'



const ContactPageContainer = styled.section `
  //border: thin solid red;
  
`

const ContactWrapper = styled( Container )`
  //border: thin solid lightblue;
  
  ${spacing('mt', 15)};
  ${spacing('ph', 4)};
`

const ContactPage = () => {

  const [idx, setIdx] = useState(0)

  const stepMotionValue = useMotionValue(1);
  const validationProps = {
    cb: () => false,
  }

  const nextStep = () => {
    if ( !validationProps.cb() )
      return;

    if ( idx + 1 !== parts.length ) {{
        setIdx(idx + 1)
        stepMotionValue.set( stepMotionValue.get() + 1 )
      }
    }
  }

  const backStep = () => {
    if ( idx !== 0 ) {
      setIdx(idx - 1)
      stepMotionValue.set(stepMotionValue.get() - 1)
    }
  }

  const parts = [
    <WhoAreYou validationCallback={validationProps} />,
    <Topic  validationCallback={validationProps}/>,
    <Message  validationCallback={validationProps}/>,
    <Email  validationCallback={validationProps}/>,
    <Check/>,
  ];

  return (
    <ContactPageContainer>
      <HeaderMeta />

      <ContactWrapper maxWidth="lg">
        {
          parts[idx]
        }

        <BottomBar step={stepMotionValue} next={nextStep} back={backStep} />

      </ContactWrapper>
    </ContactPageContainer>
  )
}

export default ContactPage
