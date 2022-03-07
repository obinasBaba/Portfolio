import React, {useContext, useEffect} from 'react'
import BackgroundStars from '../../components/BackgroundStars'
import HeaderAppBar from '../../components/HeaderAppBar'
import {AnimatePresence} from 'framer-motion'
import ToolTip from '../../components/Fixed/ToolTip'
import ProgressCircle from '../../components/ScrollProgressCircle'
import Cursor from '../../components/Cursor'
import {BottomGradient, Main, PageContainer, SkyColor} from './Styled'
import LoadingSpinner from '../../components/LoadingSpinner'
import {MotionValueContext} from '../../contexts/MotionStateWrapper'
import {BackgroundOverlayStateContext} from "../../contexts/AppStateContext";

const Page = ({ children, path }) => {
  const {
    variantsUtil: { isTop }, inView, largeUp, toolTipsData
  } = useContext(MotionValueContext);

    const {  backgroundOverlay } = useContext(BackgroundOverlayStateContext)


    useEffect(() => {
        if (backgroundOverlay) return;

        setTimeout(() => {
            toolTipsData.set({
                text: ['🖖 hello human, welcome to my space.',
                    'careful, i haven\'t done building this ship, you may find some broken parts', 'aside from that enjoy..'],
                timer: [3500, 4400, 4000],
                show: true,
            })
        }, 1800)
    }, [backgroundOverlay])


  // const media = useMediaQuery(theme.breakpoints.up('xl'))
  // const mediaLarge = useMotionValue(media)



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
