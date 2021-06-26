import React, { useContext, useEffect, useState } from 'react'
import styled, { css } from 'styled-components'
import { Typography } from '@material-ui/core'
import MotionBtn from '../../components/MotionBtn'
import { heightWidth, mediumUp, spacing } from '../../styles/mixins'
import Logo from './logo.svg'
import {AppStateContext} from '../../contexts/AppStateContext'

const MailUsContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: calc(100vh - 142px);
  overflow: hidden;

  box-sizing: border-box;

  // ${spacing('mt', 20)};
  ${spacing('pt', 15)};
  ${spacing('pb', 10)};
  ${spacing('h', 4)};

  ${mediumUp(css`
    /*height: calc(100vh - (var(--coef-indent) * 120px));*/
  `)};

  & > :not(:first-child) {
    ${spacing('mt', 2)};
  }

  &::after {
    content: '';
    position: absolute;
    top: 55%;
    left: 50%;
    border-radius: 50%;
    //box-shadow: 70px 120px 150px -30px rgba(2, 2, 30, 0.6);
    transform: translate(-50%, -50%);
    z-index: -3;
    transition: all 1s;
    background-image: url(${Logo});

    ${heightWidth('width', 40)};
    ${heightWidth('height', 40)};
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -2;
    background: rgba(55, 25, 202, 0);
    backdrop-filter: blur(.7px);
    -webkit-backdrop-filter: blur(4px);
  }
`

const Background = styled.span`
  display: inline-block;
  position: absolute;
  width: 100%;
  left: 0;
  top: 0;
  right: 0;
  z-index: -11;
  height: calc(100% + (var(--indent) * 1000px));
  background: linear-gradient(0deg, rgba(55, 25, 202, 0.74), rgba(55, 25, 202, 0.87)),
  linear-gradient(89.64deg, #3719ca 0.16%, #241563 99.8%);
`

const TitleWrapper = styled.div``

const MailUs = () => {
  const elRef = React.useRef(null)
  let elParams = null
  let elPosition = null

  const [backgroundParallax, setBackgroundParallax] = useState(null);
  const { setHeaderGradient } = useContext( AppStateContext );


  const moveBackground = () => {
    elParams = elRef.current.getBoundingClientRect();
    elPosition = elParams.top - window.innerHeight;
    if (elPosition + elParams.height / 2 <= 0) {
      setBackgroundParallax({
        transform: `translate3d(0, ${elParams.height + elPosition}px, 0)`,
      })
    }
  }

  useEffect(() => {
    elParams = elRef.current.getBoundingClientRect()
    setBackgroundParallax({
      transform: `translate3d(0, ${elParams.height / 2}px, 0)`,
    })
    window.addEventListener('scroll', moveBackground)
    return () => window.removeEventListener('scroll', moveBackground)
  }, []);

  useEffect(() => {
    function removeGradient(MailUsRef) {
      const el = MailUsRef.current.getBoundingClientRect().top;
      return el < 120
        ? setHeaderGradient(false)
        : setHeaderGradient(true);
    }

    let removeGradientOnScroll = removeGradient(elRef);

    window.addEventListener('scroll', () => removeGradientOnScroll);
    return () => window.removeEventListener('scroll', removeGradientOnScroll);
  });

  return (
    <MailUsContainer ref={elRef}>
      <Background style={backgroundParallax} />

      <TitleWrapper>
        <Typography variant="h1">
          Have something <br /> in mind ?
        </Typography>
      </TitleWrapper>

      <MotionBtn text={'Contact Me'} arrow fontLarge />
    </MailUsContainer>
  )
}

export default MailUs
