import React from 'react'
import styled, {css} from 'styled-components'
import {GatsbyImage, getImage} from 'gatsby-plugin-image'
import {spacing} from "../../../styles/mixins";
import {largeUp} from "../../../styles/mixins/breakpoints";

const WebViewContainer = styled.section`
  display: grid;
  place-items: center;

  ${spacing( 'mt', 22 )}:
  //width: 70%;

  .mock-wrapper {
    max-width: 90%;
    overflow: hidden;
    margin: 0 auto;

    img {
      object-fit: cover;
      max-width: 100%;
      max-height: 100%;
      margin: 0 auto 0 -20px;

    }
  }
`

const MobileContainer = styled.div`
  align-self: start;
  justify-self: end;
`

const WebContainer = styled.div`
    width: 100%;
`

const WebViewWrapper = styled.div`
  width: 70%;
`

const WebView = ({web, mobile, tempWebView}) => {
    return (
        <WebViewContainer>

            <div className="mock-wrapper">
              {/*  <GatsbyImage alt={tempWebView.publicURL}
                             className={'web-view'}
                             objectFit='cover'
                             image={getImage(tempWebView)}/>*/}
                <img src={tempWebView.publicURL} alt=""/>
            </div>

           {/* <WebContainer>
                <GatsbyImage alt={web.publicURL}
                             className={'web-view'}
                             objectFit='cover'
                             image={getImage(web)}/>
            </WebContainer>

            <MobileContainer>
                <GatsbyImage alt={mobile.publicURL}
                             className={'mobile-view'}
                             objectFit='cover'
                             image={getImage(mobile)}/>
            </MobileContainer>*/}

        </WebViewContainer>
    );
};

export default WebView;
