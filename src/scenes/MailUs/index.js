import React, { useContext, useEffect } from 'react'
import styled from 'styled-components'
import { spacing, text } from '../../styles/mixins'
import Logo from './logo.svg'
import { AppStateContext } from '../../contexts/AppStateContext'
import { GradientText } from '../../components/GradientText'
import FooterMeta from './FooterMeta'
import Footer from '../../components/Footer'
import GalaxyButton from '../ContactPage/components/BottomBar/GalaxyButton'
import useOnScreen from '../../hooks/useOnScreen'
import MotionBtn from "../../components/MotionBtn";
import {Typography} from "@material-ui/core";

const MailUsContainer = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-align: center;

  max-width: 100%;
  margin: 0 auto;
  width: 100%;
  //height: calc(100vh - 142px);
  //min-height: 100vh;
  overflow: hidden;
  box-sizing: border-box;
  z-index: 0;

  //border: thin solid red;

  ${spacing('mt', 22)};
  ${spacing('pt', 22)};
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
  height: calc(100% + (var(--indent) * 1000px));

  background: linear-gradient(to bottom, rgba(30, 33, 61, 0%) 0%, #02021e 20%);

  //background-color:  #02021e;
`

const TitleWrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;

  ${spacing('mb', 5)};
  ${spacing('gap', 5)};

  .title {
    //font-weight: 900;
    font-family: var(--eli);
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


  return (
    <MailUsContainer
        // data-scroll-section={true}
        // data-scroll data-scroll-class='footer'

    >
      <Background />
      <LogoEffect />

      <TitleWrapper>
        <GradientText variant="h1" className="title">
          Ready To Create <br /> Your Star ?
        </GradientText>

        <MotionBtn text="Contact" to='/contact' data-pointer='focus' data-pointer-color='#02021e' />

      </TitleWrapper>

      <FooterMeta />

      <Footer />


    </MailUsContainer>
  )
}

export default MailUs
