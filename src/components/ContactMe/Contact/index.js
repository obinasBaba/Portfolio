import React from 'react'
import styled, {css} from 'styled-components'
import {Typography} from '@material-ui/core'
import {mediumUp, spacing} from '../../../styles/mixins'
import Form from './Form'
import CloseBtn from '../../HeaderAppBar/components/CloseBtn'
import {motion} from 'framer-motion'

const ContactFormContainer = styled( motion.div )  `
  position: relative;
  background-color: rgb(30, 32, 64);
  flex: 50%;
  color: #f1d7ce;
  height: 100%;

  ${spacing('p', 8)};
`

const formContainerVariants = {
  initial: {},
  animate: {},
  exit: {},
};

const Title = styled( Typography )`
  position: relative;
  font-weight: bold;
  ${ spacing('mb', 2) };

  ${ mediumUp( css`
    // ${ spacing('mb', 2) };

  ` ) };
`


const Contact = ( { toggleModal, modalState } ) => {
  return (
    <ContactFormContainer variants={formContainerVariants} >

      <CloseBtn fillCrl={'#f1d7ce'}
                toggler={toggleModal}
                state={modalState}
                pathHoverClr={'#02021e'}
                pathCrl={'#f1d7ce'}/>

      <Title variant="h4"> Let's talk. </Title>
      <Typography variant='body2' > New projects, freelance inquiry or even a coffee. </Typography>

      <Form />

    </ContactFormContainer>
  )
}

export default Contact
