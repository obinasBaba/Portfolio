import React from 'react'
import { Typography } from '@material-ui/core'
import { motion, useAnimation } from 'framer-motion'
import styled, {css} from 'styled-components'
import { spacing } from '../../styles/mixins'
import { Link } from 'gatsby'

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
  z-index: 2;

  ${spacing('m', 1)};

  ${ ( {margin} ) => margin ? '' : spacing('mv', 0) };

  &::before {
    content: '';
    z-index: -1;
    position: absolute;
    display: block;
    background: ${({ clr }) => (clr ? clr : '#e7a28f')};
    border-radius: 100%;

    ${spacing('left', -1)};

    width: 50px;
    height: 50px;
    transition: all 0.3s ease;
  }

  & > :first-child {
    ${spacing('mr', 1.5)};
  }

  & > :nth-child(2n) {
    //margin-top: 4.5px;
  }

  &:hover {
    transform: translateX(15px);

    &::before {
      width: ${({ arrow }) => (arrow ? '105%' : '100%')};
      border-radius: 30px;
      transition: all 0.5s cubic-bezier(0.77, 0, 0.175, 1);
    }
  }
`

const tempVar = {
  initial: {
    x: 250,
  },
}

const MotionBtn = ({
  text = 'CASE-STUDY',
  arrow = true,
  to = '#',
  fontLarge,
  clr,
  variants = {},
  external = false,
  margin = true,
}) => {
  const controls = useAnimation()

  return (
    // <motion.div variants={variants}>

    <Link to={to}>
      <Btn
        margin={margin}
        arrow={arrow}
        clr={clr}
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
        <Typography
          variant="body1"
          style={{
            letterSpacing: '3px',
            textShadow: '0.1em 0.1em 0.3em #000',
          }}
          noWrap={true}
        >
          {text}
        </Typography>

        {arrow && (
          <div style={{}}>
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
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10l5-5-5-5"
                />
              </g>
            </motion.svg>
          </div>
        )}
      </Btn>
    </Link>

    // </motion.div>
  )
}

export default MotionBtn
