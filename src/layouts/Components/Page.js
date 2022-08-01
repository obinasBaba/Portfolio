import React, { useCallback, useContext, useRef } from "react";
import { AnimatePresence } from "framer-motion";
import BackgroundStars from "../../components/BackgroundStars";
import HeaderAppBar from "../../components/HeaderAppBar";
import ToolTip from "../../components/Fixed/ToolTip";
import ProgressCircle from "../../components/ScrollProgressCircle";
import { BottomGradient, Main, PageContainer } from "./Styled";
import { MotionValueContext } from "../../contexts/MotionStateWrapper";
import ScreenOverlay from "../../components/ScreenOverlay";
import NavigationMenu from "../../components/NavigationMenu";
import LoadingSpinner from "../../components/LoadingSpinner";
import { AppStateContext } from "../../contexts/AppStateContext";
import { LocomotiveScrollProvider } from "../../contexts/LocoMotive";

// import {} from '@re'


function Page( { children, path } ){
  const {
    variantsUtil: { isTop },
    inView,
    largeUp,
    mainAnimationController
  } = useContext( MotionValueContext );

  const container = useRef( null );

  const { currentPath } = useContext( AppStateContext );


  // const media = useMediaQuery(theme.breakpoints.down('md'))
  // const mediaLarge = useMotionValue(media)

  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
        getDirection: true,
        getSpeed: true
      }}
      containerRef={container} // height change detection
      watch={[]}
      onLocationChange={useCallback(
        ( scroll ) =>
          scroll.scrollTo( 0, {
            duration: 0,
            disableLerp: true
          } ),
        []
      )}
      location={currentPath}>

      <PageContainer
        id="page-container"
        variants={{}}
        initial="initial"
        exit="exit"
        animate={mainAnimationController}
        ref={container} data-scroll-container={true}
      >
        <LoadingSpinner />

        <ScreenOverlay />

        <BackgroundStars />

        {/* <Cursor />*/}

        <NavigationMenu />

        <HeaderAppBar />

        <Main data-scroll-container id="main-container" data-scroll-section={true}>
          <AnimatePresence
            exitBeforeEnter
            custom={{ path, isTop, inView, largeUp }}
          >
            {children}
          </AnimatePresence>
        </Main>

        <BottomGradient className="btm-gradient hide-bg" />

        <ProgressCircle />

        <ToolTip />
      </PageContainer>
    </LocomotiveScrollProvider>

  );
}

export default Page;
