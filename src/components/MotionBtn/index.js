import React from 'react'
import { Typography } from '@material-ui/core'
import { motion, useAnimation } from 'framer-motion'
import styled from 'styled-components'
import { spacing } from '../../styles/mixins'

const Btn = styled(motion.div)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  letter-spacing: 2px;
  font-family: var(--sofia-soft);
  font-weight: 300;
  transition: all 0.3s;
  padding: 0.7rem;
  ${ spacing( 'margin', 1 ) }
  

  & > :first-child {
    ${spacing('mr', 2)};
  }

  & > :nth-child(2n) {
    //margin-top: 4.5px;
  }

  &::before {
    content: '';
    z-index: -2;
    position: absolute;
    display: block;
    background: #e7a28f;
    border-radius: 100%;
    
    
    ${ spacing('left', -1) };
    
    width: 50px;
    height: 50px;
    transition: all 0.3s ease;
  }

  &:hover {
    transform: translateX(15px);

    &::before {
      width: 118%;
      border-radius: 30px;
      transition: all 0.5s cubic-bezier(0.77, 0, 0.175, 1);
    }
  }
`

const MotionBtn = ({ text = 'CASE-STUDY', ...props }) => {
  const controls = useAnimation()

  return (
    <Btn
      onHoverEnd={() => {
        controls.set({ x: 0 })
        controls.stop()
      }}
      onHoverStart={() => {
        controls.start({
          x: [0, 15, 0],
          transition: {
            yoyo: Infinity,
          },
        })
      }}
    >
      <Typography variant="body2" style={{
        letterSpacing: '3px',
        textShadow: '0.1em 0.1em 0.3em #000',
      }}  noWrap={true}>
        CASE-STUDY

      </Typography>

      <motion.svg
        width="21"
        animate={controls}
        height="12"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g transform="translate(0 1)" fill="white">
          <rect
            transform="rotate(180 10 5)"
            y="4"
            width="29"
            height="2"
            rx="1"
          />
          <path
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15 10l5-5-5-5"
          />
        </g>
      </motion.svg>
    </Btn>
  )
}

export default MotionBtn
