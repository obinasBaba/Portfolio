import React, { useContext, useEffect, useLayoutEffect } from 'react'
import styled from 'styled-components'
import { spacing, text } from '../../styles/mixins'
import { AnimatePresence, motion, useAnimation } from 'framer-motion'
import { AppStateContext } from '../../contexts/AppStateContext'
import Typography from '@material-ui/core/Typography'

const InfoChipContainer = styled(motion.div)`
  position: fixed;
  bottom: 6%;
  left: 4%;
  //z-index: 100;
`

// dataset.about

const Excerpt = styled(Typography)`
  //flex: 1;
  color: rgba(0, 0, 0, 0.7);
  line-height: 0;
  margin: 0;
  padding: 0;

  text-shadow: 0 3px 3px rgba(0, 0, 0, 0.35);
  text-transform: uppercase;
  letter-spacing: 0.6px;
  ${text(0.7)};
`

const ToolTipWrapper = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #123;
  opacity: 0.9;
  border-radius: 500px;
  box-sizing: border-box;
  background-image: linear-gradient(
    137.81deg,
    #e7a28f 3.52%,
    #f9d6ac 41.89%,
    #fbfefc 96.77%
  );

  & .dot {
    height: 6px;
    width: 6px;
    margin-top: 4px;
    border-radius: 50%;
    background-color: #020b16;
  }

  ${spacing('ph', 1.5)};
  ${spacing('pv', 1)};
  ${spacing('gap', 0.7)};
`

const containerVariant = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  exit: {
    y: -20,
    opacity: 0,
  },
}

const ToolTip = ({ txt }) => {
  const { toolTip, setToolTip } = useContext(AppStateContext)

  const { loadingPage } = useContext(AppStateContext)
  const controll = useAnimation()

  useEffect(() => {}, [])

  useEffect(() => {
    if (loadingPage) return

    const toolTipElements = document.querySelectorAll('[data-tooltip-text]')
    // console.log(toolTipElements)

    toolTipElements.forEach(el => {
      // console.log(el)

      el.addEventListener('mouseenter', element => {
        // console.log('toolEnter')

        setToolTip({
          text: element.target.dataset.tooltipText,
          show: true,
        })
      })

      el.addEventListener('mouseleave', () => {
        // console.log('toolLeave')

        setToolTip({
          text: '',
          show: false,
        })
      })
    })
  }, [loadingPage])

  return (
    <InfoChipContainer>
      <AnimatePresence exitBeforeEnter>
        {toolTip.show && (
          <ToolTipWrapper
            variants={containerVariant}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              duration: .8,
              ease: [0.6, 0.01, 0, 0.9],
            }}
            // key={txt}
          >
            <motion.span className="dot" />
            <Excerpt>{toolTip.text}</Excerpt>
          </ToolTipWrapper>
        )}
      </AnimatePresence>
    </InfoChipContainer>
  )
}

export default ToolTip
