import React, { useContext, useLayoutEffect } from 'react'
import styled from 'styled-components'
import { SkyColor } from '../Components/SkyColor'
import BackgroundStars from '../../components/BackgroundStars'
import HeaderAppBar from '../../components/HeaderAppBar'
import { Main } from './index'
import { AnimatePresence } from 'framer-motion'
import LoadingSpinner from '../../components/LoadingSpinner'
import ToolTip from '../../components/Fixed/ToolTip'
import ProgressCircle from '../../components/ScrollProgressCircle'
import { AppStateContext } from '../../contexts/AppStateContext'
import FontLoaded from 'fontfaceobserver'
import Cursor from '../../components/Cursor'

export const PageContainer = styled.div`
  position: relative;
  display: flex;
  flex-flow: column;
  flex-direction: column;
  //border: thick solid crimson;
  overflow: hidden;
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
  const { loadingPage, events } = useContext(AppStateContext)

  useLayoutEffect(() => {
    // console.log('Spinner ::' , events)
    // magnetElements = loadingPage && new MagnetElement()

    // events.addLoader()

    let elianto = new FontLoaded('Elianto-Regular')
    let poppins = new FontLoaded('Poppins Black')
    let icons = new FontLoaded('shapes')

    // console.log( 'path : ', path)

    Promise.all([elianto.load(), poppins.load(), icons.load()])
      .then(() => {
        events.finishLoading()
      })
      .catch(console.error)

    return () => {}
  }, [])

  return (
    <PageContainer>
        <SkyColor />
        <BackgroundStars />
        <HeaderAppBar />

        <Main>
          <AnimatePresence exitBeforeEnter >
            {loadingPage ? (
              <LoadingSpinner />
            ) : (
              <AnimatePresence  custom={{ path: path }}>
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
