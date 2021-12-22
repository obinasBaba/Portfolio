import React, {useMemo, useState} from 'react'
import styled from 'styled-components'
import { spacing } from '../../styles/mixins'
import { Button, Container, Typography } from '@material-ui/core'
import HeaderMeta from './components/HeaderMeta'
import WhoAreYou from './components/WhoAreYou'
import BottomBar from './components/BottomBar'
import Topic from './components/Topic'
import Message from './components/Message'
import Email from './components/Email'
import Check from './components/Check'
import {AnimatePresence, motion, useMotionValue, AnimateSharedLayout, useAnimation} from 'framer-motion'
import { Formik, Form } from 'formik'
import * as yup from 'yup'
import ThankYou from './components/ThankYou'
import { transition } from './components/shared'

const ContactPageContainer = styled(motion.section)`
  //border: thin solid red;
`

const ContactWrapper = styled(Container)`
  //border: thin solid lightblue;

  ${spacing('mt', 15)};
  ${spacing('ph', 4)};
`

const ErrorMsg = styled( Typography )`
  color: #5d6c7b;
  
  ${spacing('mt', 1)};
  
  transition: all .3s ease-in-out;
`

const basic = {
  initial: {
    opacity: 0,
    y: 35,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      opacity: {
        duration : 1.5,
        ease: 'easeIn',
      },
      default: {
        duration: 1.1,
        ease: 'easeOut',
      }
    }
  },
  exit: {
    opacity: 0,
    y: -35,
  },
}

const basicTransition = {
  duration: 1.1,
  ease: 'easeOut',
}

const ContactPage = () => {
  const [idx, setIdx] = useState(0)

  const stepMotionValue = useMotionValue(1)
  const control = useMotionValue('');

  const nextStep = arg => {


    if (steps[idx].stepName === 'check') {

      if (control.get() === 'loading' || control.get().startsWith('error'))
        return control.set('errorClick' + Math.random() * Math.random())
      else
      {
        control.set('loading')
        fetch("https://formsubmit.co/ajax/henokgetachew500@gmail.com", {
          method: "POST",
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            ...arg
          })
        })
            .then(response => response.json())
            .then(data => {
              console.log( 'adata: ', data)
              setIdx(idx + 1)
              stepMotionValue.set(stepMotionValue.get() + 1)

            })
            .catch(error => console.log(error));
      }
    }

    if (idx + 1 !== steps.length) {
      {
        setIdx(idx + 1)
        stepMotionValue.set(stepMotionValue.get() + 1)
      }
    }
  }

  const backStep = () => {
    if (control.get() === 'loading') return;

    if (idx !== 0) {
      setIdx(idx - 1)
      stepMotionValue.set(stepMotionValue.get() - 1)
    }
  }

  const steps = [
      {
      stepName: '',
      schema: yup.object({
        name: yup.string().required('Please tell me who you are'),
        company: yup.string().notRequired(),
      }),
      fields: ['name', 'company'],
      component: props => <WhoAreYou {...props} />,
    },
    {
      stepName: '',
      schema: yup.object({
        topic: yup.array().min(1, 'Please select at least one item'),
      }),
      fields: ['topic'],
      component: props => <Topic {...props} />,
    },
    {
      stepName: '',
      schema: yup.object({
        message: yup
          .string()
          .min(16, 'Please tell me more about your project')
          .required('Please tell me about your project'),
      }),
      fields: ['message'],
      component: props => <Message {...props} />,
    },
    {
      stepName: '',
      schema: yup.object({
        email: yup
          .string()
          .required('How can i reach you?')
          .email('Please enter a valid address'),
        phone: yup.number()
          .typeError("That doesn't look like a phone number")
          .positive("A phone number can't start with a minus")
          .integer("A phone number can't include a decimal point")
          .min(8),
      }),
      fields: ['email', 'phone'],
      component: props => <Email {...props} />,
    },
    {
      stepName: 'check',
      schema: yup.object({}),
      fields: [''],
      component: props => <Check {...props} />,
    },
    {
            stepName: '',

      schema: yup.object({}),
      fields: [''],
      component: props => <ThankYou {...props} />,
    },
  ]


  return (
    <ContactPageContainer
      data-scroll
      data-scroll-section
    >
      <HeaderMeta />

      <ContactWrapper maxWidth="lg">
        <Formik
          initialValues={{
            name: '',
            company: '',
            topic: [],
            message: '',
            email: '',
            phone: '',
          }}
          validateOnMount={false}
          validateOnChange={false}
          validationSchema={steps[idx].schema}
          onSubmit={nextStep}
          render={({ values, submitForm, errors, validateField }) => {
            return (
              <Form >
                <AnimateSharedLayout type='crossfade' >

                  <AnimatePresence exitBeforeEnter>
                    <motion.div
                      layout
                      variants={basic}
                      transition={basicTransition}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      key={idx}
                    >
                      {steps[idx].component({ errors, values })}
                    </motion.div>
                  </AnimatePresence>

                  <motion.div layout transition={{duration: .5, ease: 'easeInOut'}}>
                    <ErrorMsg variant="body2">
                      {
                        (errors[steps[idx].fields[0]] || errors[steps[idx].fields[1]]) ?? null
                      }
                    </ErrorMsg>
                  </motion.div>

                  <AnimatePresence>
                    {idx !== steps.length-1 && (
                      <motion.div layout
                                  variants={basic}
                                  transition={basicTransition}
                                  initial="initial"
                                  animate="animate"
                                  exit="exit"
                      >
                        <BottomBar
                          step={stepMotionValue}
                          control={control}
                          nextProps={{
                            text: idx === steps.length - 2 ? 'Send' : 'Next',
                          }}
                          backProps={{
                            onClick: backStep,
                            type: 'button',
                            buttonType: 2,
                          }}
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>

                </AnimateSharedLayout>

              </Form>
            )
          }}
        />
      </ContactWrapper>
    </ContactPageContainer>
  )
}

export default ContactPage
