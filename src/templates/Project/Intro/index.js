import React from 'react'
import { Container, Typography } from '@material-ui/core'
import styled, { css } from 'styled-components'
import { heightWidth, largeUp, mediumUp, spacing } from '../../../styles/mixins'
import Logo from './vigoza-logo.svg'

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
  justify-content: center;
  align-items: center;
  flex-flow: column;
  text-align: center;
  ${spacing('pv', 10)};
  ${spacing('mb', 10)};
  overflow: hidden;

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
    ${heightWidth('margin-containerVariant', 3)};
  }

  ${mediumUp(css`
    ${spacing('pv', 4)};
  `)};

  ${largeUp(css``)};

  .desc {
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;

    & > :not(:first-child) {
      ${heightWidth('margin-containerVariant', 3)};
    }
  }
`

const Description = styled(Typography)`
  max-width: 47ch;
  font-family: var(--sofia-pro);
  font-weight: 300;
  line-height: 160%;
  letter-spacing: 0.5px;
  opacity: 0.7;
`


const Intro = ({ intro }) => {
  const { desc, themeColor, title, logoUrl, color } = intro

  return (
    <IntroContainer
      // themeCrl={themeColor}
      // logoUrl={logoUrl}
      // color={color}
      maxWidth={false}
      fixed={false}
      component={'section'}
      data-scroll-section
    >
      <Typography variant={'h1'}>{title}</Typography>

      <div className='desc' >
        <Description>{desc}</Description>

        {/*<MotionBtn text={'Visit Website'} to={siteLink} />*/}
      </div>

    </IntroContainer>
  )
}

export default Intro
