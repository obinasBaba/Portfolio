import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import MotionBtn from '../../components/MotionBtn'
import { heightWidth, spacing, text } from '../../styles/mixins'
import Logo from './logo.svg'
import { AppStateContext } from '../../contexts/AppStateContext'
import { GradientText } from '../../components/GrdientText'
import FooterMeta from './FooterMeta'
import Footer from '../../components/Footer'

const MailUsContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  //height: calc(100vh - 142px);
  //min-height: 100vh;
  overflow: hidden;
  box-sizing: border-box;
  z-index: 0;

  //border: thin solid red;

  ${spacing('mt', 12)};
`

const Background = styled.span`
  //display: inline-block;
  //display: none;
  position: absolute;
  width: 100%;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  //height: calc(100% + (var(--indent) * 1000px));
  background: linear-gradient(
    to bottom,
    rgba(30, 33, 61, 0%) 0%,
    #02021e 60%
  );
`

const TitleWrapper = styled.div`
  display: flex;
  gap: 1rem;
  flex-flow: column;
  align-items: center;
  justify-content: center;

  .title {
    font-weight: 900;
    // ${text(5)};
  }
`

const LogoEffect = styled.div`
  position: absolute;
  background-image: url(${Logo});
  background-repeat: no-repeat;
  background-position: center;
  filter: blur(2px);
  z-index: -1;

  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`

const MailUs = () => {
  const elRef = React.useRef(null)
  const { isContactOpen, setContactModal } = useContext(AppStateContext)
  const { setHeaderGradient } = useContext(AppStateContext)

  useEffect(() => {
    function removeGradient(MailUsRef) {
      const el = MailUsRef.current.getBoundingClientRect().top
      return el < 120 ? setHeaderGradient(false) : setHeaderGradient(true)
    }

    let removeGradientOnScroll = removeGradient(elRef)

    window.addEventListener('scroll', () => removeGradientOnScroll)
    return () => window.removeEventListener('scroll', removeGradientOnScroll)
  })

  return (
    <MailUsContainer ref={elRef}>
      <Background />

      <LogoEffect />

      <TitleWrapper>
        <GradientText variant="h1" className="title">
          Ready To Create <br /> Your Star ?
        </GradientText>
        <MotionBtn
          text={'Contact Me'}
          arrow={false}
          fontLarge
          onClick={() => setContactModal(!isContactOpen)}
        />
      </TitleWrapper>

      <FooterMeta />

      <Footer />
    </MailUsContainer>
  )
}

export default MailUs
