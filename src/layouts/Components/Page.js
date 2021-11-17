import React, { useContext, useEffect, useState } from "react";
import BackgroundStars from '../../components/BackgroundStars'
import HeaderAppBar from '../../components/HeaderAppBar'
import { AnimatePresence } from 'framer-motion'
import ToolTip from '../../components/Fixed/ToolTip'
import ProgressCircle from '../../components/ScrollProgressCircle'
import { AppStateContext } from '../../contexts/AppStateContext'
import Cursor from '../../components/Cursor'
import { BottomGradient, Main, PageContainer, SkyColor } from './Styled'
import useLoadingFonts from "../../hooks/useFonts";
import LoadingSpinner from "../../components/LoadingSpinner";
import BackgroundOverlay from "../../components/BackgroundOverlay";

const Page = ({ children, path }) => {
  const {
    backgroundOverlay,
    currentPath,
    bottomGradient,
    fontLoaded,
    variantsUtil: { isTop },
  } = useContext(AppStateContext)


  const [fontFinish, setFontFinish] = useState(fontLoaded.get())

  useLoadingFonts(fontLoaded, setFontFinish)

  return (
    <PageContainer id='page-container'>
      <SkyColor />
      <BackgroundStars />

      {!backgroundOverlay && <Cursor path={currentPath} loadingOverlay={backgroundOverlay} /> }

      {!backgroundOverlay && <HeaderAppBar />}

      <LoadingSpinner key='sakldfja;lskdf' fontFinish={fontFinish}/>


      <Main data-scroll-container id="main-container">
        <AnimatePresence exitBeforeEnter custom={{ path, cPath: currentPath, isTop }}>
          { !backgroundOverlay &&
          <React.Fragment key="Main-Content">
            <AnimatePresence exitBeforeEnter custom={{ path, cPath: currentPath, isTop }}>
              {children}
            </AnimatePresence>
          </React.Fragment>
          }
        </AnimatePresence>


      </Main>

      {bottomGradient && <BottomGradient />}

      {!backgroundOverlay && (
        <>
          <ToolTip />
          <ProgressCircle />
        </>
      )}
    </PageContainer>
  )
}

export default Page
