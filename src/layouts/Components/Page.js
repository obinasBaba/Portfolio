import React, { useContext, useState } from 'react'
import BackgroundStars from '../../components/BackgroundStars'
import HeaderAppBar from '../../components/HeaderAppBar'
import { AnimatePresence, useMotionValue } from 'framer-motion'
import ToolTip from '../../components/Fixed/ToolTip'
import ProgressCircle from '../../components/ScrollProgressCircle'
import Cursor from '../../components/Cursor'
import { BottomGradient, Main, PageContainer, SkyColor } from './Styled'
import useLoadingFonts from '../../hooks/useFonts'
import LoadingSpinner from '../../components/LoadingSpinner'
import { useMediaQuery, useTheme } from '@material-ui/core'
import { MotionValueContext } from '../../contexts/MotionStateWrapper'

const Page = ({ children, path }) => {

  const {
    variantsUtil: { isTop },
  } = useContext(MotionValueContext)

  // const [fontFinish, setFontFinish] = useState(fontLoaded.get())
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up('lg'))

  const media = useMediaQuery(theme.breakpoints.up('xl'))
  const mediaLarge = useMotionValue(media)
  const [loading, setLoading] = useState(true)

  useLoadingFonts(setLoading)

  return (
    <PageContainer id="page-container">
      <SkyColor />
      <BackgroundStars />

      <Cursor />

      <HeaderAppBar />

      <LoadingSpinner />

      <Main data-scroll-container id="main-container">
        <AnimatePresence
          exitBeforeEnter
          custom={{ path, cPath: 'currentPath', isTop, mediaLarge }}
        >
          {children}
        </AnimatePresence>
      </Main>

      <BottomGradient className="btm-gradient" />

      <ProgressCircle />

      <ToolTip />
    </PageContainer>
  )
}

export default Page
