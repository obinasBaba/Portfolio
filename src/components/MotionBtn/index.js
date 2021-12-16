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
  //cursor: pointer;
  width: fit-content;
  letter-spacing: 2px;
  font-weight: 300;
  transition: all 0.3s;
  padding: 0.7rem;
  z-index: 2;
  //border: thin solid red;

  ${spacing('m', 1)};
  ${spacing('mr', 1.9)};
  

  &::before {
    content: '';
    z-index: -1;
    position: absolute;
    display: block;
    background: ${({ clr }) => (clr ? clr : '#e7a28f')};
    border-radius: 50%;

    ${spacing('left', -1)};

    width: 50px;
    height: 50px;
    transition: all 0.3s ease;
  }

  & > :first-child {
    // ${spacing('mr', 1.5)};
  }

  & > :nth-child(2n) {
    //margin-top: 4.5px;
  }
  
  & .btn-txt{
    margin: 0;
    padding: 0;
    //line-height: 0;
  }

  &:hover {
    transform: translateX(15px);
    color: #02021e;

    &::before {
      width: 115%;
      border-radius: 30px;
      transition: all 0.5s cubic-bezier(0.77, 0, 0.175, 1);
    }
  }
  
  a{
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 999;
    cursor: none;
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
  to,
  state = {},
  fontLarge,
  clr,
  variants = {},
  external = false,
  margin = true,
  layoutId = false,
  arrowClr = '#fff',
  onClick, ...props

}) => {
  const controls = useAnimation()

  return (

      <Btn
        {...props}
        onClick={onClick}
        margin={margin.toString()}
        clr={clr}

      >

        {to &&  <Link to={to} state={state}
                      data-pointer='focus'
                      data-pointer-color='#02021e'
                      data-tooltip
                      data-tooltip-text='wanna visit my contact page?'
        />}

        <Typography
          variant="body1"
          className='btn-txt'
          style={{
            letterSpacing: '3px',
            textShadow: '0.1em 0.1em 0.3em #000',
          }}
          noWrap={true}
        >
          {text}
        </Typography>
      </Btn>

  )
}

export default MotionBtn
