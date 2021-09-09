import React from 'react'
import {motion, useTransform} from 'framer-motion'
import styled from 'styled-components'

const BigPlanetContainer = styled( motion.div )`
  position: absolute;
  left: -20%;
  perspective: 1000px;
  //transform: scale(.9);
`

const Planet = styled.div`
  //border: thin solid rgba(252, 213, 167, 0.65);
  height: 700px;
  width: 700px;
  perspective: 1000px;
  //top: -124%;
  //right: auto;
  //bottom: auto;
  box-shadow: 70px 120px 150px -30px rgba(2, 2, 30, 0.6);
  border-radius: 50%;

  background: linear-gradient(
          36.99deg,
          rgba(1, 1, 18, 0) 27.49%,
          #262147 78.93%
  ); 
`

const BigPlanet = ({progress}) => {


  return (
    <BigPlanetContainer>
      <Planet  />
    </BigPlanetContainer>
  )
}

export default BigPlanet
