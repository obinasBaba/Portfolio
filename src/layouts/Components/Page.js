import React, { useCallback, useContext, useRef } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useMotionBreakPoint } from '@contexts/BreakPoint';
import { LocomotiveScrollProvider } from '@contexts/LocoMotive';
import { AppStateContext } from '@contexts/AppStateContext';
import { MotionValueContext } from '@contexts/MotionStateWrapper';
import BackgroundStars from '@components/BackgroundStars';
import HeaderAppBar from '@components/HeaderAppBar';
import ToolTip from '@components/Fixed/ToolTip';
import ProgressCircle from '@components/ScrollProgressCircle';
import ScreenOverlay from '@components/ScreenOverlay';
import NavigationMenu from '@components/NavigationMenu';
import { BottomGradient, Main, PageContainer } from './Styled';
import useCursor from '@/layouts/Components/useCursor';

// import {} from '@re'

function Page ({ children, path }) {
  const {
    variantsUtil: { isTop },
    inView,
    mainAnimationController,
    screenOverlayEvent,
  } = useContext(MotionValueContext);

  const container = useRef(null);

  const { currentPath } = useContext(AppStateContext);
  const { breakpoint } = useMotionBreakPoint();
  useCursor();

  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
        getDirection: true,
        getSpeed: true,
      }}
      containerRef={container} // height change detection
      watch={[]}
      onLocationChange={useCallback(
        (scroll) =>
          scroll.scrollTo(0, {
            duration: 0,
            disableLerp: true,
          }),
        [],
      )}

      location={currentPath}>

      <PageContainer
        id='page-container'
        variants={{}}
        initial='initial'
        exit='exit'
        // animate={mainAnimationController}
        animate={screenOverlayEvent.get() === 'closed'
          ? 'animate'
          : mainAnimationController}
        ref={container}
        data-scroll-container={true}
      >
        {/*<LoadingPage />*/}

        <ScreenOverlay />

        <BackgroundStars />

        {/*<Cursor />*/}

        <NavigationMenu />

        <HeaderAppBar />

        <Main id='main-container' data-scroll-section={true}>
          <AnimatePresence
            exitBeforeEnter
            custom={{ path, isTop, inView, /* largeUp */ breakpoint }}
          >
            {children}
          </AnimatePresence>
        </Main>

        <BottomGradient className='btm-gradient' />

        <ProgressCircle />

        <ToolTip />
      </PageContainer>
    </LocomotiveScrollProvider>

  );
}

export default Page;
