import React, { useContext, useState } from 'react'
import BackgroundStars from '../../components/BackgroundStars'
import HeaderAppBar from '../../components/HeaderAppBar'
import { AnimatePresence, useMotionValue } from 'framer-motion'
import ToolTip from '../../components/Fixed/ToolTip'
import ProgressCircle from '../../components/ScrollProgressCircle'
import {
  AppStateContext,
  MotionValueContext
} from "../../contexts/AppStateContext";
import Cursor from '../../components/Cursor'
import { BottomGradient, Main, PageContainer, SkyColor } from './Styled'
import useLoadingFonts from '../../hooks/useFonts'
import LoadingSpinner from '../../components/LoadingSpinner'
import { useMediaQuery, useTheme } from '@material-ui/core'

const Page = ({ children, path }) => {
  const {
    backgroundOverlay,
    currentPath,
    variantsUtil: { isTop },
  } = useContext(AppStateContext)


  // const [fontFinish, setFontFinish] = useState(fontLoaded.get())
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up('lg'))

  const media = useMediaQuery(theme.breakpoints.up('xl'))
  const mediaLarge = useMotionValue(media)

  useLoadingFonts()

  return (
    <PageContainer id="page-container">
      <SkyColor />
      <BackgroundStars />

      {!backgroundOverlay && matches && (
        <Cursor path={currentPath} loadingOverlay={backgroundOverlay} />
      )}

      {!backgroundOverlay && <HeaderAppBar />}

      <LoadingSpinner key="loader" backgroundOverlay={backgroundOverlay} />

      <Main data-scroll-container id="main-container">
        <AnimatePresence
          exitBeforeEnter
          custom={{ path, cPath: currentPath, isTop, mediaLarge }}
        >
          {!backgroundOverlay && (
            <React.Fragment key="Main-Content">
              <AnimatePresence
                exitBeforeEnter
                custom={{ path, cPath: currentPath, isTop }}
              >
                {children}
              </AnimatePresence>
            </React.Fragment>
          )}
        </AnimatePresence>
      </Main>

      <BottomGradient className='btm-gradient' />

      {!backgroundOverlay && <ProgressCircle />}

      {(!backgroundOverlay && matches) && <ToolTip />}

    </PageContainer>
  )
}

export default Page
