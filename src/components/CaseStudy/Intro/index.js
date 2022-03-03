import React from 'react'
import { Container, Typography } from '@material-ui/core'
import styled, { css } from 'styled-components'
import {
  length,
  spacing,
  text,
} from '../../../styles/mixins'
import Logo from './vigoza-logo.svg'
import MotionBtn from "../../MotionBtn";
import {largeUp, mediumUp} from "../../../styles/mixins/breakpoints";

const IntroContainer = styled(Container)`
  position: relative;
  //background-color: ${({ themeCrl }) => themeCrl};
  background-image: linear-gradient(
    137.81deg,
    #e7a28f 3.52%,
    #f9d6ac 41.89%,
    #fbfefc 96.77%
  );

  color: #02021e;

  width: 100%;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  
  ${spacing('pv', 10)};
  ${spacing('mb', 10)};
  ${spacing('mt', 30)};

  &::after {
     content: url(${Logo});
    position: absolute;
    display: block;
    bottom: -35%;
    left: 5%;
    z-index: 11;
    opacity: 0.1;
  }

  & > :not(:first-child) {
    ${length('margin', 3)};
  }

  ${mediumUp(css`
    ${spacing('pv', 4)};
  `)};


  .desc {
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;

    & > :not(:first-child) {
      ${length('margin', 3)};
    }
  }
  
  .title{
    font-family: 'Elianto-Regular',serif;
    letter-spacing: -1px;
    ${text(3)};
    ${spacing('mb', 2)};
  }
  .reason{
    max-width: 40ch;
    text-align: left;
    
    ${text(1.1)};
    ${spacing('mb', 3)};


  }
  
  .bye{
    max-width: 40ch;
    text-align: left;

    ${text(.9)};
  }
`

const Description = styled(Typography)`
  max-width: 47ch;
  font-weight: 300;
  line-height: 160%;
  letter-spacing: 0.5px;
  opacity: 0.7;
`


const Intro = ({ intro }) => {
  const { desc, themeColor, title, logoUrl, color,  } = intro

  return (
    <IntroContainer
      themeCrl={themeColor}
      logoUrl={logoUrl}
      color={color}
      maxWidth={false}
      fixed={false}
      component={'section'}
    >

      <div className='desc' >
        <Description>{desc}</Description>

        <MotionBtn text={'Visit Website'} to={'siteLink'} />
      </div>

    </IntroContainer>
  )
}

export default Intro