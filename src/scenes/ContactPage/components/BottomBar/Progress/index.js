import React from 'react'
import styled from 'styled-components'
import {motion, useMotionValue, useTransform} from 'framer-motion'

const ProgressContainer = styled.div`
  width: 180px;
  height: 2px;

  background-color: rgba(43, 93, 145, 0.31);
`

const ProgressLine = styled( motion.div )`
  position: relative;
  height: 100%;
  //width: 60%;
  background-color: #5d6c7b;
  transition: transform .7s cubic-bezier(0.6, 0.01, 0, 0.9);
`

function Progress({ step  }) {


  const scaleX =  useTransform( step, [0, 5], [0, 1])


  return (
    <ProgressContainer>
      <ProgressLine style={{ scaleX,  originX: 0 }} />
    </ProgressContainer>
  )
}

export default React.memo(Progress)
