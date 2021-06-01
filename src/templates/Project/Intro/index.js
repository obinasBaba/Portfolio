import React from 'react'
import { Container, Typography } from '@material-ui/core'
import styled, { css } from 'styled-components'
import { heightWidth, largeUp, mediumUp, spacing } from '../../../styles/mixins'
import MotionBtn from '../../../components/MotionBtn'
import Logo from './vigoza-logo.svg'

const IntroContainer = styled(Container)`
  position: relative;
  background-color: ${({ themeCrl }) => themeCrl};
  color: ${({ color }) => color && color};
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

  ${mediumUp(css`
    ${spacing('pv', 4)};
  `)};

  & > :not(:first-child) {
    ${heightWidth('margin-top', 3)};
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
  const { desc, themeColor, title, siteLink, logoUrl, color, imageData } = intro

  return (
    <IntroContainer
      themeCrl={themeColor}
      logoUrl={logoUrl}
      color={color}
      maxWidth={false}
      fixed={false}
      component={'section'}
    >
      <Typography variant={'h1'}>{title}</Typography>

      <Description>{desc}</Description>

      <MotionBtn text={'Visit Website'} to={siteLink} />
    </IntroContainer>
  )
}

export default Intro
