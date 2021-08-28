import React, { useContext, useEffect, useRef } from 'react'
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
import Cursor from '../../components/Cursor'
import useLoadingFonts from '../../hooks/useFonts'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'


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


gsap.registerPlugin(ScrollTrigger);

const Page = ({ children, path }) => {
  const { loadingPage, currentPath, variantsUtil: { isTop } } = useContext(AppStateContext)

  useLoadingFonts()

  return (
    <PageContainer>
      <SkyColor />
      <BackgroundStars />
      <HeaderAppBar />

      <canvas className="canvas" key={'pointer-map'} />

      <Main data-scroll-container>
        <AnimatePresence exitBeforeEnter  custom={{ path, cPath:  currentPath}}>


        {loadingPage ?
             <LoadingSpinner />
           :
            <React.Fragment key='Main-Content'>
                <Cursor path={path} />
                {children}
            </React.Fragment>
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
