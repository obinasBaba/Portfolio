import React, {useContext, useEffect, useRef} from 'react'
import styled from 'styled-components'
import { spacing, text } from '../../styles/mixins'
import Typography from '@material-ui/core/Typography'
import {MotionValueContext} from "../../contexts/MotionStateWrapper";
import {useAnimation, motion} from "framer-motion";

const InfoChipContainer = styled.div`
  position: fixed;
  bottom: 6%;
  left: 4%;
  pointer-events: none;
  z-index: 18;

  & * {
    pointer-events: none;
  }
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

const ToolTipWrapper = styled( motion.div )`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #123;
  opacity: 0;
  border-radius: 500px;
  box-sizing: border-box;
  background-image: var(--gray_gradient);

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
    y: 25,
  },

  enter: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2 * .5,
      ease: 'easeIn'
    }
  },

  hide: {
    y: -25,
    opacity: 0,
    transition: {
      duration: 1.2 * .5,
      ease: [0.6, 0.01, 0, 0.9],
    }
  },
}

const ToolTip = () => {

  const { toolTipsData } = useContext(MotionValueContext)
  const toolTipTextNode = useRef(null)

  const controller = useAnimation()


  useEffect(() => {
    toolTipsData.onChange(v => {
      if (v.show){
        toolTipTextNode.current.textContent = v.text
        controller.start('enter')
      }else{
        controller.start('hide')
            .then(() => {
              // toolTipTextNode.current.textContent = ''
            })

      }
    })
  }, [])

  return (
    <InfoChipContainer>
      <ToolTipWrapper className='tool-tip-wrapper'
                      variants={containerVariant}
                      initial="initial"
                      animate={controller}
                      exit="exit"
      >
        <span className="dot" />
        <Excerpt className='tool-tip-excerpt' ref={toolTipTextNode}  />
      </ToolTipWrapper>
    </InfoChipContainer>
  )
}

export default ToolTip
