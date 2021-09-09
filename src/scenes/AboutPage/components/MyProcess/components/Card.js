import React, {useEffect, useRef, useState} from 'react'
import styled, {css} from 'styled-components'
import {mediumUp, spacing, text, title} from '../../../../../styles/mixins'
import { Typography } from '@material-ui/core'
import { Illustration } from './Icons'
import useOnScreen from '../../../../../hooks/useOnScreen'
import {motion, useAnimation} from 'framer-motion'

const StyledCard = styled.div`
  position: relative;
  max-width: 54ch;
  border-radius: 20px;
  box-shadow: 0 40px 49px 0 rgba(0 0 0/ 16%);
  color: #02021e;

  background-image: var(--gray_gradient);

  display: flex;
  flex-flow: column;


  ${spacing('ph',
          6)};
  ${spacing('pt',
          8)};
  ${spacing('pb',
          7)};
  ${spacing('mt',
          8)};

  ${mediumUp(css`
    ${spacing('pt',
            6.5)};
    ${spacing('pb',
            4)};
  `)};

  & > * {
    //border: thin solid blueviolet;
  }


  & .card-title {
    z-index: 1;
    font-family: var(--poppins);
    letter-spacing: -1px;
    font-weight: 900;

    ${spacing('mb',
            1.6)};
  }

  .approach-desc {
    ${text(1.02)};
    color: #1e213d;
  }

  & svg {
    margin-left: -30px;
  }


`

const Num = styled( motion.div )`
  //content: '0${({ no }) => no}';
  position: absolute;
  top: -24%;
  right: -4%;
  font-family: "Bodoni Moda", sans-serif;
  font-weight: 900;
  letter-spacing: -3px;
  -webkit-text-stroke: 2.5px #02021e;
  color: transparent;
  ${text(7)};


  ${mediumUp(css`
    ${text(11)}; 
    right: -18%;
    top: -40%;
  `)};
  
`

const Keys = styled( motion.div )`
  display: flex;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  align-self: flex-end;
  font-weight: lighter;
  opacity: 0.8;
  text-shadow: 0 3px 3px rgba(0, 0, 0, 0.51);
  position: absolute;
  right: 0;
  bottom: 0;
  color: #1e213d;
  

  ${text(0.7)};
  ${spacing('mt', 2)};
  ${spacing('mb', 1)};
  ${spacing('mr', 3)};
`

const keysVariants = {
  initial: {
    y: '23%',
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1
  },

  transition: {
    ease: [0.6, 0.01, 0, 0.9],
    duration: 1.3,
  },
}

const Card = ({ txt, title, methodologies, index, path }) => {

  const cardRef = useRef(null)
  let intersecting = useOnScreen(cardRef, 0, '0% -42% 0% 0%')
  const [inView, setInView] = useState(false)
  const controller = useAnimation();


  useEffect(() => {
    if ( !inView )
      setInView(intersecting)

  }, [intersecting])

  useEffect(() => {
    if (intersecting) controller.start('animate')

  }, [intersecting])


  return (
    <StyledCard no={index + 1} className={`card card-${index}`} ref={cardRef}
                // data-scroll-direction='horizontal'
                // data-scroll-speed='4'
                // data-scroll
    >

      <Num variants={keysVariants}
           initial='initial'
           animate={controller}
           transition={{...keysVariants.transition, delay: .3}}
      >0{index+1}</Num>

      <Illustration path={path} rocket={index === 4} design={index === 1} />
      <Typography variant="h3" className="card-title">
        {title}
      </Typography>

      <Typography className='approach-desc' >{txt}</Typography>

      <Keys variants={keysVariants}
            initial='initial'
            animate={controller}
            transition={keysVariants.transition}
            exit='exit'
      >
       {methodologies}
      </Keys>
    </StyledCard>
  )
}

export default Card
