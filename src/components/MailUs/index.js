import React from "react";
import styled from "styled-components";
import { spacing } from "../../styles/mixins";
import Logo from "./logo.svg";
import { GradientText } from "../GradientText";
import FooterMeta from "./FooterMeta";
import Footer from "../Footer";
import MotionBtn from "../MotionBtn";

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

  ${spacing( "mt", 10 )};
  ${spacing( "pt", 10 )};
`;

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
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;

  ${spacing( "mb", 8 )};

  .titleTxt {
    font-family: var(--eli);
  }
`;

const LogoEffect = styled.div`
  position: absolute;
  background-image: url(${Logo});
  background-repeat: no-repeat;
  background-position: center;
  filter: blur(2px);
  z-index: -1;

  top: 10%;
  left: 0;
  right: 0;
  bottom: 0%;

  //display: none;
`;

function MailUs(){


  return (
    <MailUsContainer>
      <Background />
      <LogoEffect />

      <TitleWrapper>
        <GradientText variant="h1" className="titleTxt">
          Ready To Create <br /> Your Star ?
        </GradientText>

        <MotionBtn text="Contact" to="/contact" data-pointer="focus" />

      </TitleWrapper>

      <FooterMeta />

      <Footer />


    </MailUsContainer>
  );
}

export default MailUs;
