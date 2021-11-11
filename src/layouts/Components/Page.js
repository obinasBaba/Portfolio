import React, { useContext } from 'react'
import BackgroundStars from '../../components/BackgroundStars'
import HeaderAppBar from '../../components/HeaderAppBar'
import { AnimatePresence } from 'framer-motion'
import ToolTip from '../../components/Fixed/ToolTip'
import ProgressCircle from '../../components/ScrollProgressCircle'
import { AppStateContext } from '../../contexts/AppStateContext'
import Cursor from '../../components/Cursor/Cursor'
import { BottomGradient, Main, PageContainer, SkyColor } from './Styled'

const Page = ({ children, path }) => {
  const {
    backgroundOverlay,
    currentPath,
    bottomGradient,
    variantsUtil: { isTop },
  } = useContext(AppStateContext)

  return (
    <PageContainer>
      <SkyColor />
      <BackgroundStars />

      {!backgroundOverlay && <Cursor path={currentPath} key={'cursor'} /> }

      {!backgroundOverlay && <HeaderAppBar />}


      <Main data-scroll-container id="main-container">
        <AnimatePresence exitBeforeEnter custom={{ path, cPath: currentPath, isTop }}>
          {children}
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
