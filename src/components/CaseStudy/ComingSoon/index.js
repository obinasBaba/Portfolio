import React from 'react';
import { Container, Typography } from '@material-ui/core';
import styled, { css } from 'styled-components';
import { length, spacing, text } from '../../../styles/mixins';
import { largeUp } from '../../../styles/mixins/breakpoints';

const ComingSoonContainer = styled(Container)`
  position: relative;
    //background-color: ${({ themeCrl }) => themeCrl};
  //background-image: var(--gray_gradient);
  //border: 1px solid black;
  color: #02021e;

  width: 100%;
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  text-align: left;

  * {
    text-align: left;
  }

  ${spacing('pv', 10)};
  ${spacing('mb', 20)};
  ${spacing('mt', 30)};

  & > :not(:first-child) {
      // ${length('margin', 3)};
  }

  ${largeUp(css`
    ${spacing('pv', 4)};
      // ${spacing('pl', 15)};
  `)};

  .titleTxt {
    font-family: "Elianto-Regular", serif;
    letter-spacing: -1px;
    ${text(3)};
    ${spacing('mb', 2)};
  }

  .reason {
    max-width: 50ch;
    text-align: left;

    ${text(1)};
    ${spacing('mb', 3)};
  }

  .bye {
    max-width: 40ch;
    text-align: left;

    ${text(0.9)};
  }
`;

function ComingSoon () {
  return (
    <ComingSoonContainer maxWidth={'xl'} fixed={false} component='section'>
      <Typography className='titleTxt' variant='h1'>
        Thanks for stopping by Human.
      </Typography>

      <Typography gutterBottom className='reason'>
        This is relatively a new project I just finished building and am putting
        some
        bits and pieces together to prepare an in-depth, walk-through story to
        tell.
      </Typography>

      <Typography className='bye'>
        Aside that enjoy other places of my space.
      </Typography>
    </ComingSoonContainer>
  );
}

export default ComingSoon;
