import React, {useContext, useEffect, useRef} from 'react'
import styled from 'styled-components'
import { SkyColor } from '../Components/SkyColor'
import BackgroundStars from '../../components/BackgroundStars'
import HeaderAppBar from '../../components/HeaderAppBar'
import { Main } from './index'
import {AnimatePresence, useElementScroll} from 'framer-motion'
import LoadingSpinner from '../../components/LoadingSpinner'
import ToolTip from '../../components/Fixed/ToolTip'
import ProgressCircle from '../../components/ScrollProgressCircle'
import { AppStateContext } from '../../contexts/AppStateContext'
import Cursor from '../../components/Cursor'
import useLoadingFonts from '../../hooks/useFonts'
import useLocoScroll from '../../hooks/useLocoScroll'

export const PageContainer = styled.div`
  position: relative;
  display: flex;
  flex-flow: column;
  //border: thick solid crimson;
  //overflow: hidden;
  //z-index: 0;
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
  transition: all .35s ease-in-out;

`

const Page = ({ children, path }) => {
  const { loadingPage, moScroll } = useContext(AppStateContext)

  useLoadingFonts();

  useLocoScroll(!loadingPage, moScroll )

  return (
    <PageContainer>
        <SkyColor />
        <BackgroundStars />
        <HeaderAppBar />

        <Main data-scroll-container >
          <AnimatePresence exitBeforeEnter >
            {loadingPage ? (
              <LoadingSpinner />
            ) : (
              <AnimatePresence exitBeforeEnter  custom={{ path: path }}>
                <Cursor path={path} />
                {children}
              </AnimatePresence>
            )}
          </AnimatePresence>
        </Main>

        <BottomGradient />
        <ToolTip />
        <ProgressCircle />
    </PageContainer>
  )
}

export default Page
