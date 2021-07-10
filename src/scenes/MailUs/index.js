import React, { useContext, useEffect, useState } from 'react'
import styled, { css } from 'styled-components'
import { Typography } from '@material-ui/core'
import MotionBtn from '../../components/MotionBtn'
import {heightWidth, mediumUp, spacing, text} from '../../styles/mixins'
import Logo from './logo.svg'
import {AppStateContext} from '../../contexts/AppStateContext'
import {GradientText} from '../../components/GrdientText'
import Footer from '../../components/Footer'
import FooterMeta from './FooterMeta'

const MailUsContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  //height: calc(100vh - 142px);
  overflow: hidden;
  box-sizing: border-box;

  ${spacing('pt', 15)};
  ${spacing('h', 4)};

  &::after {
    content: '';
    position: absolute;
    top: 60%;
    left: 50%;
    border-radius: 50%;
    //box-shadow: 70px 120px 150px -30px rgba(2, 2, 30, 0.6);
    transform: translate(-50%, -50%);
    z-index: -3;
    transition: all 1s;
    background-image: url(${Logo});
    background-repeat: no-repeat;
    filter: blur(10px);
    ${heightWidth('width', 70)};
    ${heightWidth('height', 70)};
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
  background: linear-gradient(0deg, #1e213d, #02021e);
`

const TitleWrapper = styled.div`
  display: flex;
  gap: 1rem;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  
  .title{

    font-weight: 900;
    
    // ${ text(5) };
  }
`

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
        <GradientText variant='h1' className='title' >
          Ready To Create <br /> Your Star ?</GradientText>
        <MotionBtn text={'Contact Me'} arrow fontLarge />
      </TitleWrapper>

      <FooterMeta/>

      <Footer/>

    </MailUsContainer>
  )
}

export default MailUs
