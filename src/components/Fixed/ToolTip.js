import React, {useContext} from 'react'
import styled from 'styled-components'
import { spacing, text } from '../../styles/mixins'
import { AnimatePresence } from 'framer-motion'
import {AppStateContext} from '../../contexts/AppStateContext'

const InfoChipContainer = styled.div`
  position: absolute;
  bottom: 6%;
  left: 4%;
  color: #123;
  border-radius: 500px;
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  opacity: .8;
  
  .txt {
    text-shadow: 0 3px 3px rgba(0, 0, 0, 0.51);
    text-transform: uppercase;
    letter-spacing: 0.6px;
    ${text(0.75)};
    
    .dot{
      margin-left: 5px;
      ${text(.2)};
    }
  }
  
  & .dot{
    font-family: 'jaro.io icons',sans-serif;
    line-height: -.3;

    ${text(.3)};
  }
  
  background-image: linear-gradient(
          137.81deg,
          #e7a28f 3.52%,
          #f9d6ac 41.89%,
          #fbfefc 96.77%
  );
  
  ${spacing('ph', 2)};
  ${spacing('pv', 1)};
`

const ToolTip = () => {

  const { toolTip, setToolTip } = useContext(AppStateContext)


  return (
    <AnimatePresence>
      {
        toolTip.show
          &&
        <InfoChipContainer>
          <span className='dot' >h</span>
          <div className='txt' >
            {toolTip.text}
            <span className='dot' >hhh</span>
          </div>
        </InfoChipContainer>
      }
    </AnimatePresence>

  )
}

export default ToolTip
