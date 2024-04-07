import React from 'react';
import styled from 'styled-components';
import { Typography } from '@material-ui/core';
import { HeadLineTitle } from '../shared';
import { text } from '@/styles/mixins';

const ThankYouContainer = styled.div`
    //border: thin solid red;
    position: relative;
`;

const Body = styled(Typography)`
    font-weight: lighter;
    //color: #bac2d3; // i thought u said u hadnt your ear phone with you
    letter-spacing: 0.6px;
    line-height: 170%;
    //color: #02021e;

    ${text(1)};
`;

function ThankYou () {
  return (
    <ThankYouContainer>
      <HeadLineTitle variant='h2'>Thank you.</HeadLineTitle>

      <div
        style={{
          margin: '0rem 0 0 1rem',
        }}
      >
        <Body>Let's create something great.</Body>
        <Body>I'll be with you soon.</Body>
      </div>
    </ThankYouContainer>
  );
}

export default ThankYou;
