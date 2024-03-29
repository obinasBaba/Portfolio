/* eslint-disable consistent-return */
/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

// gatsby-ssr.js

import React from 'react';
import { Partytown } from '@builder.io/partytown/react';

// You might prefer to add these as an env vars
const ORIGIN = 'https://www.googletagmanager.com';
const GATSBY_GA_MEASUREMENT_ID = 'G-Y2SV1LE72G';

export const onRenderBody = ( { setHeadComponents } ) => {
    if ( process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'test' ) return null;

    setHeadComponents( [
        <Partytown key="partytown" forward={['gtag']}/>,
        <script key="google-analytics" type="text/partytown" src={`${ORIGIN}/gtag/js?id=${GATSBY_GA_MEASUREMENT_ID}`}/>,
        <script
            key="google-analytics-config"
            type="text/partytown"
            dangerouslySetInnerHTML={{
                __html: `window.dataLayer = window.dataLayer || [];
        window.gtag = function gtag(){ window.dataLayer.push(arguments);}
        gtag('js', new Date()); 
        gtag('config', '${GATSBY_GA_MEASUREMENT_ID}', { send_page_view: false })`
            }}
        />
    ] );
};
