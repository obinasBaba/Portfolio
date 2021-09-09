import React, {useState} from 'react'
import styled from 'styled-components'
import {spacing} from '../../styles/mixins'
import {Button, Container, Typography} from '@material-ui/core'
import HeaderMeta from './components/HeaderMeta'
import WhoAreYou from './components/WhoAreYou'
import BottomBar from './components/BottomBar'
import Topic from './components/Topic'
import Message from './components/Message'
import Email from './components/Email'
import Check from './components/Check'
import {useMotionValue} from 'framer-motion'
import {FormikConsumer, Formik, Form} from 'formik'
import * as yup from 'yup'
import ThankYou from './components/ThankYou'

const ContactPageContainer = styled.section`
  //border: thin solid red;
`

const ContactWrapper = styled(Container)`
  //border: thin solid lightblue;

  ${spacing('mt',
          15)};
  ${spacing('ph',
          4)};
`

const ContactPage = () => {
  const [idx, setIdx] = useState(0)

  const stepMotionValue = useMotionValue(1)

  const nextStep = () => {
    if ( idx + 1 !== steps.length ) {
      {
        setIdx(idx + 1)
        stepMotionValue.set(stepMotionValue.get() + 1)
      }
    }
  }

  const backStep = () => {
    if ( idx !== 0 ) {
      setIdx(idx - 1)
      stepMotionValue.set(stepMotionValue.get() - 1)
    }
  }

  const steps = [
    {
      schema: yup.object({
        name: yup.string().required('Please tell me who you are'),
        company: yup.string().notRequired(),
      }),
      fields: ['name', 'company'],
      component: props => <WhoAreYou {...props} />,
    },
    {
      schema: yup.object({
        topic: yup.array()
          .min(1,
            'Please select at least one item'),
      }),
      fields: ['topic'],
      component: props => <Topic {...props} />,
    },
    {
      schema: yup.object({
        message: yup
          .string()
          .min(10,
            'Please tell me more about your project')
          .required('Please tell me about your project'),
      }),
      fields: ['message'],
      component: props => <Message {...props} />,
    },
    {
      schema: yup.object({
        email: yup
          .string()
          .required('How can i reach you?')
          .email('Please enter a valid address'),
        phone: yup
          .number('Phone should be a number')
          .notRequired('Phone should be a number')
          .integer('Phone should not be in decimal'),
      }),
      fields: ['email', 'phone'],
      component: props => <Email {...props} />,
    },
    {
      schema: yup.object({ }),
      fields: [''],
      component: props => <Check {...props} />,
    },{
      schema: yup.object({}),
      fields: [''],
      component: props => <ThankYou {...props} />,
    },
  ]

  return (
    <ContactPageContainer>
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
          render={({ values,submitForm, errors, validateField }) => {
            return (
              <Form>
                {steps[idx].component({ errors, values })}

                <Typography variant="body2">
                  {errors[steps[idx].fields[0]] ?? null}
                </Typography>

                {
                  idx !== steps.length-1 &&
                  <BottomBar
                    step={stepMotionValue}
                    nextProps={{
                      onClick: () => {
                        if ( idx === steps.length -1)
                          submitForm()
                        else
                          steps[idx].fields.forEach(field => validateField(field))
                      },

                      text: idx === steps.length - 2 ? 'Send' : 'Next',
                    }}
                    backProps={{
                      onClick: backStep,
                      type: 'button',
                      buttonType: 2,
                    }}
                  />
                }
              </Form>
            )
          }}
        />
      </ContactWrapper>
    </ContactPageContainer>
  )
}

export default ContactPage
