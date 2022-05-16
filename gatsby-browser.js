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


export const onRouteUpdate = ( { location } ) => {
    if ( process.env.NODE_ENV !== 'production' ) {
        return null;
    }

    const pagePath = location ? location.pathname + location.search + location.hash : undefined;
    setTimeout( () => {
        if ( typeof gtag === 'function' ) {
            gtag( 'event', 'page_view', { page_path: pagePath } );
        }
    }, 100 );
};

/*
export const shouldUpdateScroll = ( obj ) => {



  const {pathname, routerProps: { location }, getSavedScrollPosition} = obj;


  if ( location.action === 'PUSH' )
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
  }

  // console.log(pathname)
  // console.log(obj)


  if ( pathname === '/blog' ){
    setTimeout(() => {
      window.scrollTo(0, 0)
    }, 1200)
    return false;
  }

  if ( pathname === '/' && obj.prevRouterProps && obj.prevRouterProps.location.pathname === '/blog' ){
    const saved = getSavedScrollPosition(location);
    setTimeout( () => {
      // console.log('scrolling to saved', saved)
      window.scrollTo( ...(saved) )
    }, 1100)

    return false;
  }

  if ( location.action === 'PUSH' ) {
    setTimeout( () => window.scrollTo(0,0), 1000 )
  }
  else{
    // console.log(location)
    // console.log('delayed')
    const saved = getSavedScrollPosition(location);
    setTimeout( () => {
      window.scrollTo( ...(saved) )
    }, 1100)

    return false;
  }


  return false;

}
*/
