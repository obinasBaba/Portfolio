import React, { useCallback, useContext, useRef } from "react";
import { AnimatePresence } from "framer-motion";
import { MotionValueContext } from "@contexts/MotionStateWrapper";
import { AppStateContext } from "@contexts/AppStateContext";
import { useMotionBreakPoint } from "@contexts/BreakPoint";
import { LocomotiveScrollProvider } from "@contexts/LocoMotive";
import BackgroundStars from "@components/BackgroundStars";
import HeaderAppBar from "@components/HeaderAppBar";
import ProgressCircle from "@components/ScrollProgressCircle";
import ScreenOverlay from "@components/ScreenOverlay";
import NavigationMenu from "@components/NavigationMenu";
import LoadingSpinner from "@components/LoadingSpinner";
import ToolTip from "@components/Fixed/ToolTip";
import { BottomGradient, Main, PageContainer } from "./Styled";
// import Cursor from "@components/Cursor";

// import {} from '@re'
// const Cursor = React.lazy( () => import( /* webpackPrefetch: true */ /* webpackChunkName: "Cursor" */  "@components/Cursor") );


function Page( { children, path } ){
  const {
    variantsUtil: { isTop },
    inView,
    mainAnimationController,
    largeUp
  } = useContext( MotionValueContext );

  const container = useRef( null );
  const { currentPath } = useContext( AppStateContext );
  const { breakpoint } = useMotionBreakPoint();


  return (
    <>

      <PageContainer
        id="page-container"
        variants={{}}
        initial="initial"
        exit="exit"
        animate={"animate"}
        ref={container} data-scroll-container={true}
      >
        {/*<LoadingSpinner />*/}

        {/*<ScreenOverlay />*/}

        <BackgroundStars />


        {/* <Suspense fallback={<div />}>
          <Cursor />
        </Suspense> */}

        {/*<NavigationMenu />*/}

        {/*<HeaderAppBar />*/}

        <Main id="main-container" data-scroll-section={true}>
          <AnimatePresence
            exitBeforeEnter
            custom={{ path, isTop, inView, largeUp, breakpoint }}
          >
            {children}
          </AnimatePresence>
        </Main>

        <BottomGradient className="btm-gradient hide-bg" />

        {/*<ProgressCircle />*/}

        <ToolTip />
      </PageContainer>
    </>

  );
}

export default Page;
