import React from 'react';
import styled, { css } from 'styled-components';
import { FieldArray, Field } from 'formik';
import { HeadLineTitle, CustomTextField } from '../shared';
import { spacing } from '../../../../styles/mixins';
import { largeUp } from '../../../../styles/mixins/breakpoints';
import useRefreshMouseListeners
  from '../../../../hooks/useRefreshMouseListeners';

const EmailContainer = styled.div``;

const EmailInputContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-flow: column;

  justify-content: space-between;


  ${spacing('gap', 6)};

  ${largeUp(css`
    width: 70%;
    flex-flow: row;
    align-items: center;
  `)};
`;

function Email ({ ...props }) {
  useRefreshMouseListeners('.email-container [data-pointer]');

  return (
    <EmailContainer className='email-container'>
      <HeadLineTitle variant='h2'>
        Nearly there. How can i reach you ,
      </HeadLineTitle>

      <EmailInputContainer>
        <Field
          data-pointer='focus'
          name='email'
          label='email address'
          type='email'
          as={CustomTextField}
          fullWidth
        />
        <Field
          data-pointer='focus'
          name='phone'
          label='phone no'
          as={CustomTextField}
          fullWidth
        />
      </EmailInputContainer>
    </EmailContainer>
  );
}

export default Email;
