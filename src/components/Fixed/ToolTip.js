import React, {useContext, useEffect} from 'react'
import styled from 'styled-components'
import { spacing, text } from '../../styles/mixins'
import {AnimatePresence, motion} from 'framer-motion'
import { AppStateContext } from '../../contexts/AppStateContext'
import Typography from '@material-ui/core/Typography'

const InfoChipContainer = styled( motion.div )`
  position: absolute;
  bottom: 6%;
  left: 4%;
  z-index: 10;
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

const containerVariant = {
  initial: {
    x: 20,
    opacity: 0,
  },
  animate(){
    console.log('amiate function')
    return  {
      opacity: 0,
      x: 0
    }
  },

  exit: {
    x: -20,
    opacity: 0,
  },
}

const ToolTip = () => {
  const { toolTip, setToolTip } = useContext(AppStateContext)

  useEffect(() => {
    const toolTipElements = document.querySelectorAll('[data-tooltip] ')
    toolTipElements.forEach( el => {

      el.addEventListener('mouseenter', element => {
        setToolTip({
          text: element.target.dataset.tooltipText,
          show: true
        })
      })

      el.addEventListener('mouseleave', () => {
        setToolTip({
          text: '',
          show: false
        })
      })

    } )

  }, [])

  return (
    <AnimatePresence>
      {
        toolTip.show &&
        <InfoChipContainer  vairants={containerVariant}
                            initial='initial'
                            animate='animate'
                            exit='exit'
        >


          <motion.span className="dot" />
          <Excerpt>{toolTip.text}</Excerpt>
        </InfoChipContainer>
      }
    </AnimatePresence>
  )
}

export default ToolTip
