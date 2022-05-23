import React, { useContext } from "react";
import { AnimatePresence } from "framer-motion";
import BackgroundStars from "../../components/BackgroundStars";
import HeaderAppBar from "../../components/HeaderAppBar";
import ToolTip from "../../components/Fixed/ToolTip";
import ProgressCircle from "../../components/ScrollProgressCircle";
import Cursor from "../../components/Cursor";
import { BottomGradient, Main, PageContainer } from "./Styled";
import { MotionValueContext } from "../../contexts/MotionStateWrapper";
import ScreenOverlay from "../../components/ScreenOverlay";
import NavigationMenu from "../../components/NavigationMenu";
import LoadingSpinner from "../../components/LoadingSpinner";
import useGreeting from "../../hooks/useGreeting";

function Page( { children, path } ){
  const {
    variantsUtil: { isTop },
    inView,
    largeUp,
    mainAnimationController
  } = useContext( MotionValueContext );


  useGreeting();

  // const media = useMediaQuery(theme.breakpoints.down('md'))
  // const mediaLarge = useMotionValue(media)

  return (
    <PageContainer
      id="page-container"
      variants={{}}
      initial="initial"
      exit="exit"
      animate={mainAnimationController}
    >
      <LoadingSpinner />

      <ScreenOverlay />

      <BackgroundStars />

      <Cursor />

      <NavigationMenu />

      <HeaderAppBar />

      <Main data-scroll-container id="main-container">
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
  );
}

export default Page;
