import React, { useContext, useEffect } from 'react'
import BackgroundStars from '../../components/BackgroundStars'
import HeaderAppBar from '../../components/HeaderAppBar'
import { AnimatePresence } from 'framer-motion'
import ToolTip from '../../components/Fixed/ToolTip'
import ProgressCircle from '../../components/ScrollProgressCircle'
import Cursor from '../../components/Cursor'
import { BottomGradient, Main, PageContainer, SkyColor } from './Styled'
import LoadingSpinner from '../../components/LoadingSpinner'
import { MotionValueContext } from '../../contexts/MotionStateWrapper'
import { BackgroundOverlayStateContext } from '../../contexts/AppStateContext'
import styled from 'styled-components'

const LoadingBgBackup = styled.div`
  background-image: linear-gradient(
    137.81deg,
    #5d6c7b 0%,
    #a4b5c0 50.89%,
    #bfd0d9 120.77%
  );
  width: 100%;
  height: 100%;

  &.loaded {
    display: none;
  }
`

const Page = ({ children, path }) => {
  const {
    variantsUtil: { isTop },
    inView,
    largeUp,
    toolTipsData,
  } = useContext(MotionValueContext)

  const { backgroundOverlay } = useContext(BackgroundOverlayStateContext)

  useEffect(() => {
    if (backgroundOverlay) return

    setTimeout(() => {
      toolTipsData.set({
        text: [
          '🖖 hello human, welcome to my space.',
          "careful, i haven't done building this ship, you may find some broken parts",
          'aside from that enjoy..,',
        ],
        timer: [3500, 4400, 4000],
        show: true,
      })
    }, 2000)
  }, [backgroundOverlay])

  // const media = useMediaQuery(theme.breakpoints.up('xl'))
  // const mediaLarge = useMotionValue(media)

  return (
    <PageContainer id="page-container">
      <LoadingBgBackup className="loading-backup" />

      <SkyColor />

      <BackgroundStars />

      <Cursor />

      <HeaderAppBar />

      <LoadingSpinner />

      <Main data-scroll-container id="main-container">
        <AnimatePresence
          exitBeforeEnter
          custom={{ path, cPath: undefined, isTop, inView, largeUp }}
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
