import React, {useContext, useEffect, useRef, useState} from 'react'
import styled from 'styled-components'
import { SkyColor } from '../Components/SkyColor'
import BackgroundStars from '../../components/BackgroundStars'
import HeaderAppBar from '../../components/HeaderAppBar'
import { Main } from './index'
import { AnimatePresence, motion } from 'framer-motion'
import LoadingSpinner from '../../components/LoadingSpinner'
import ToolTip from '../../components/Fixed/ToolTip'
import ProgressCircle from '../../components/ScrollProgressCircle'
import { AppStateContext } from '../../contexts/AppStateContext'
import useLoadingFonts from '../../hooks/useFonts'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import Cursor from '../../components/Cursor'

export const PageContainer = styled.div`
  position: relative;
  display: flex;
  flex-flow: column;
  //border: thick solid crimson;
  //overflow: hidden;
  //z-index: 0;

  canvas[resize] {
    width: 100%;
    height: 100%;
  }

  & .canvas {
    position: fixed;
    width: 100vw;
    height: 100vh;
    z-index: var(--cIndex);
    pointer-events: none;
    //border: thin solid blue;
  }
`

const BottomGradient = styled.div`
  position: fixed;
  //z-index: 1;
  top: 10%;
  left: 0;
  bottom: 0;
  right: 0;
  pointer-events: none;

  background-image: var(--bottom-gradient);
  transition: all 0.35s ease-in-out;
`

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


      <Main data-scroll-container>

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
