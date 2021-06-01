/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */
// import React from 'react';
// import { AnimatePresence } from 'framer-motion'
//
// export const wrapPageElement = ({element }) => (
//   <AnimatePresence exitBeforeEnter >{element}</AnimatePresence>
// );

export const shouldUpdateScroll = ({
  routerProps: { location },
  getSavedScrollPosition,
}) => {

  /*if ( location.action === 'PUSH' )
  {
    console.log('push delayed')
    setTimeout( () => window.scrollTo(0,0), 1000 )
  }
  else{
    // console.log('delayed')
    const saved = getSavedScrollPosition(location);
    console.log(location, '-- Location')
    console.log(saved, '-- Saved')
    setTimeout( () => window.scrollTo( ...(saved) ), 1000)
  }*/

  return true
}
