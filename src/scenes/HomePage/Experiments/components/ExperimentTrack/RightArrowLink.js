import React from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'
import {useProjectSvg} from '../../../../../hooks/queries/useProjectSvg'
import {ReactSVG} from 'react-svg'



const RightArrowContainer = styled( motion.div )`
  display: flex;
  align-items: center;
  justify-content: space-between;
  //border: thin solid yellow;
  width: 100%;
  //margin-top: -10px;
  //height: 50px;
  height: min-content;
`

const ArrowLine = styled.div`
  width: 100%;
  height: 1px;
  //background-color: lightcoral;
  background-image: linear-gradient(
          to right,
          #e7a28f 13.52%,
          #f9d6ac 41.89%,
          #fbfefc 86.77%
  );
  border-radius: 500px;
  flex: .99;
`

const Arrow = styled.div`
  //border: thin solid green;
  max-width: 50px;
  width: 25px;
  //height: 50px; 
  
  //height: 70px;
  
  svg{
    max-width: 100%;
    width: 100%;
    //border: thin solid rebeccapurple;
  }
`

const RightArrowLink = () => {

  const {rightArrow} = useProjectSvg();

  return (
    <RightArrowContainer>
      <ArrowLine/>
      <Arrow>
        <ReactSVG src={rightArrow.publicURL} />
      </Arrow>
    </RightArrowContainer>
  )
}

export default RightArrowLink
