import React from 'react';
import styled from 'styled-components';
import { Typography } from '@material-ui/core';
import { spacing } from '../../../styles/mixins';

import { container, wrapper } from './nextproject.module.scss';

const NextProjectContainer = styled.section`
  position: relative;
  display: flex;
  flex-flow: column;

  width: 100%;
  //color: white !important;

  ${spacing('mt', 25)};

  border: 1px solid red;


  ${spacing('pv', 15)};

  ${spacing('gap', 2)};


  & .titleTxt {
    font-family: var(--eli);
    font-weight: bolder;
    text-shadow: 0.1em 0.1em 0.3em #000;
  }

  & * {
    z-index: 2;
  }
`;

const NextProjectWrapper = styled.div`
  //max-width: 80%;
  margin-left: 10%;
`;

function NextProject ({ titleTxt, url, thumbnailUrl }) {
  return (
    <div className={container}>

      <div className={wrapper} >
        <Typography variant='h1'>
          Next Project
        </Typography>
      </div>


    </div>
  );
}

export default NextProject;
