import React, {useEffect, useRef, useState} from 'react'
import styled from 'styled-components'
import { spacing, text } from '../../../../styles/mixins'
import { Typography } from '@material-ui/core'
import { Design } from './Icons'
import useOnScreen from '../../../../hooks/useOnScreen'
import {motion, useAnimation} from 'framer-motion'

const StyledCard = styled.div`
  position: relative;
  padding: 2rem 4rem 2rem;
  background-image: linear-gradient(
    137.81deg,
    #e7a28f 3.52%,
    #f9d6ac 41.89%,
    #fbfefc 96.77%
  );
  max-width: 54ch;
  border-radius: 20px;
  box-shadow: 0 40px 49px 0 rgba(0 0 0/ 16%);
  color: #02021e;

  display: flex;
  flex-flow: column;

  ${spacing('mt', 8)};
  
  &:first-child{
    // ${spacing('ml', 50)};

  }


  & .card-title {
    z-index: 1;
    font-family: var(--poppins);
    letter-spacing: -1px;
    font-weight: 900;
    //font-family: "Bodoni Moda", sans-serif;

    ${spacing('mb', 1.6)};
  }

  p {
    ${text(1.02)};
  }

  & svg {
    margin-left: -30px;
  }
`

const Num = styled( motion.div )`
  //content: '0${({ no }) => no}';
  position: absolute;
  top: -40%;
  right: -18%;
  font-family: "Bodoni Moda", sans-serif;
  font-weight: 900;
  letter-spacing: -3px;
  -webkit-text-stroke: 1.5px #3719ca;
  color: transparent;
  ${text(11)};
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
    if ( intersecting )
      controller.start('animate')

  }, [intersecting])


  return (
    <StyledCard no={index + 1} className='card' ref={cardRef}>

      <Num variants={keysVariants}
           initial='initial'
           animate={controller}
           transition={{...keysVariants.transition, delay: .3}}
      >0{index+1}</Num>

      <Design path={path} rocket={index === 4} design={index === 1} />
      <Typography variant="h3" className="card-title">
        {title}
      </Typography>
      <Typography>{txt}</Typography>

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