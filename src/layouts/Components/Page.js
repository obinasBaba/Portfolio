import React, {useContext, useEffect, useRef, useState} from 'react'
import BackgroundStars from '../../components/BackgroundStars'
import HeaderAppBar from '../../components/HeaderAppBar'
import { AnimatePresence, motion } from 'framer-motion'
import LoadingSpinner from '../../components/LoadingSpinner'
import ToolTip from '../../components/Fixed/ToolTip'
import ProgressCircle from '../../components/ScrollProgressCircle'
import { AppStateContext } from '../../contexts/AppStateContext'
import useLoadingFonts from '../../hooks/useFonts'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import Cursor from '../../components/Cursor'
import {PageContainer, BottomGradient, Main, SkyColor} from './Styled'
import BackgroundOverlay from '../../components/BackgroundOverlay'


gsap.registerPlugin(ScrollTrigger)

const Page = ({ children, path }) => {
  const {
    fontLoaded,
    currentPath,
    variantsUtil: { isTop },
  } = useContext(AppStateContext)

  const [fontFinish, setFontFinish] = useState(fontLoaded.get())

  useLoadingFonts(fontLoaded, setFontFinish)

  return (
    <PageContainer>
      <SkyColor />
      <BackgroundStars />
      <HeaderAppBar />
      <BackgroundOverlay/>


      <Main data-scroll-container id='main-container'>

        <AnimatePresence exitBeforeEnter custom={{ path, cPath: currentPath, isTop }}>
          {
            fontFinish ?
              <React.Fragment key="Main-Content">
                 <Cursor path={currentPath} key={'cursor'} />

                <AnimatePresence exitBeforeEnter custom={{ path, cPath: currentPath, isTop }}>
                  {children}
                </AnimatePresence>
              </React.Fragment>
              :
              <LoadingSpinner key={'lkasdjf;laksjdf'} />
          }
        </AnimatePresence>

      </Main>

      <BottomGradient />
      <ToolTip />
      <ProgressCircle />
    </PageContainer>
  )
}

export default Page
