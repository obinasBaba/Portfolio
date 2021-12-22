import React from 'react'
import styled from 'styled-components'
import { spacing, text } from '../../styles/mixins'
import Typography from '@material-ui/core/Typography'

const InfoChipContainer = styled.div`
  position: fixed;
  bottom: 6%;
  left: 4%;
  pointer-events: none;

  & * {
    pointer-events: none;
  }
  //z-index: 100;
`

// dataset.about

const Excerpt = styled(Typography)`
  //flex: 1;
  color: rgba(0, 0, 0, 0.7);
  line-height: 0;
  margin: 0;
  padding: 0;

  text-shadow: 0 3px 3px rgba(0, 0, 0, 0.35);
  text-transform: uppercase;
  letter-spacing: 0.6px;
  
  ${text(0.7)};
`

const ToolTipWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #123;
  opacity: 0;
  border-radius: 500px;
  box-sizing: border-box;
  background-image: var(--gray_gradient);

  & .dot {
    height: 6px;
    width: 6px;
    margin-top: 4px;
    border-radius: 50%;
    background-color: #020b16;
  }

  ${spacing('ph', 1.5)};
  ${spacing('pv', 1)};
  ${spacing('gap', 0.7)};
`



const ToolTip = () => {

  return (
    <InfoChipContainer>
      <ToolTipWrapper className='tool-tip-wrapper'>
        <span className="dot" />
        <Excerpt className='tool-tip-excerpt' />
      </ToolTipWrapper>
    </InfoChipContainer>
  )
}

export default ToolTip
