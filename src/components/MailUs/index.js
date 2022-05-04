import React from 'react'
import styled from 'styled-components'
import { spacing, text } from '../../styles/mixins'
import Logo from './logo.svg'
import { GradientText } from '../GradientText'
import FooterMeta from './FooterMeta'
import Footer from '../Footer'
import MotionBtn from '../MotionBtn'

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

  ${spacing( 'mt', 22 )};
  ${spacing( 'pt', 22 )};
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

  ${spacing( 'mb', 5 )};
  ${spacing( 'gap', 5 )};

  .titleTxt {
    //font-weight: 900;
    font-family: var(--eli);
      // ${text( 5 )};
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

function MailUs(){


    return (
        <MailUsContainer
            // data-scroll-section={true}
            // data-scroll data-scroll-class='footer'

        >
            <Background/>
            <LogoEffect/>

            <TitleWrapper>
                <GradientText variant="h1" className="titleTxt">
                    Ready To Create <br/> Your Star ?
                </GradientText>

                <MotionBtn text="Contact" to='/contact' data-pointer='focus'/>

            </TitleWrapper>

            <FooterMeta/>

            <Footer/>


        </MailUsContainer>
    )
}

export default MailUs
