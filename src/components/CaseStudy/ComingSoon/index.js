import React from 'react'
import {Container, Typography} from '@material-ui/core'
import styled, {css} from 'styled-components'
import {length, spacing, text} from '../../../styles/mixins'
import {largeUp, mediumUp} from "../../../styles/mixins/breakpoints";

const ComingSoonContainer = styled(Container)`
  position: relative;
    //background-color: ${({themeCrl}) => themeCrl};
  background-image: linear-gradient(137.81deg,
  #e7a28f 3.52%,
  #f9d6ac 41.89%,
  #fbfefc 96.77%);

  color: #02021e;

  width: 100%;
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  text-align: left;
  
  * {
    text-align: left  ;
  }
  

  ${spacing('pv', 10)};
  ${spacing('mb', 10)};
  ${spacing('mt', 30)};

  & > :not(:first-child) {
    // ${length('margin', 3)};
  }

  ${largeUp(css`
    ${spacing('pv', 4)};
    ${spacing('pl', 15)};
  `)};


  .title {
    font-family: 'Elianto-Regular', serif;
    letter-spacing: -1px;
    ${text(3)};
    ${spacing('mb', 2)};
  }

  .reason {
    max-width: 40ch;
    text-align: left;

    ${text(1.1)};
    ${spacing('mb', 3)};
  }

  .bye {
    max-width: 40ch;
    text-align: left;

    ${text(0.9)};
  }
`

const ComingSoon = () => {

    return (
        <ComingSoonContainer
            maxWidth={false}
            fixed={false}
            component={'section'}
        >


            <Typography className='title'
                        variant={'h1'}>Thanks for stopping by Alien.</Typography>

            <Typography gutterBottom={true} className='reason'>
                This is relatively a new project I just finished, so am
                putting some bits and pieces together to prepare an in-depth,
                walk-through story to tell.
            </Typography>

            <Typography className='bye'>
                Aside that enjoy other places of my space.
            </Typography>


        </ComingSoonContainer>
    )
}

export default ComingSoon
