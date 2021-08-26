import React from 'react'
import {motion, useTransform} from 'framer-motion'
import styled from 'styled-components'

const BigPlanetContainer = styled( motion.div )`
  position: absolute;
  left: -23%;
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
  background: linear-gradient(258.52deg,
    #3719ca -132.34%,
  rgba(55, 25, 202, 0) 22.57%),
  linear-gradient(283.68deg,
  rgba(235, 174, 149, 0) 45.54%,
  rgba(235, 174, 149, 0.19) 130.68%),
  linear-gradient(3.27deg, #02021e 13.68%, #262147 142.62%);

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
