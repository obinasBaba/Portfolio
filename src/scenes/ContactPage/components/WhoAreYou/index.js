import React, { useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import { Button, TextField, Typography } from '@material-ui/core';
import { Formik, Field, useField, FieldArray } from 'formik';
import * as yup from 'yup';
import { spacing, text } from '../../../../styles/mixins';
import Form from './components/form';
import { CustomTextField, HeadLineTitle } from '../shared';
import { largeUp, mediumUp } from '../../../../styles/mixins/breakpoints';

const WhoContainer = styled.div``;

const FormContainer = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  ${spacing('gap', 7)};

  //border: 1px solid red;

  ${mediumUp(css`
    width: 80%;
  `)};

  ${largeUp(css`
    gap: 5rem;
    flex-flow: row;
  `)};

  ${spacing('mt', 6)};
`;

function WhoAreYou ({ errors, ...props }) {

  const getGreeting = () => {
    const hrs = new Date().getHours();

    if (hrs < 12) return 'Good Morning';
    if (hrs >= 12 && hrs <= 17) return 'Good Afternoon';
    if (hrs >= 17 && hrs <= 24) return 'Good Evening';
  };

  return (
    <WhoContainer>
      <HeadLineTitle variant='h2'>
        {getGreeting()} human. who are you?
      </HeadLineTitle>

      <FormContainer>
        <Field
          name='name'
          label='what should i call you?'
          inputMode='text'
          fullWidth
          as={CustomTextField}
        />

        <Field
          name='company'
          label='company'
          inputMode='text'
          fullWidth
          as={CustomTextField}
        />
      </FormContainer>
    </WhoContainer>
  );
}

export default WhoAreYou;
