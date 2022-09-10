import React, {useRef} from 'react'
import styled, {css} from 'styled-components'
import Progress from './Progress'
import {spacing} from '../../../../styles/mixins'
import GalaxyButton from './GalaxyButton'
import {largeUp} from "../../../../styles/mixins/breakpoints";
import MotionBtn from '@components/MotionBtn';

const BottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  //border: thin solid red;
  
  width: 100%;
  padding: 0;
  
  ${spacing('mt', 19)};
  ${spacing('gap', 7)};
  
  ${largeUp( css`
    gap: 0;

    ${spacing('mt', 11.5)};
    ${spacing('pr', 5)};

  ` )};
`

function BottomBar({nextProps, backProps, step, control}) {


  return (
    <BottomContainer  >
      {/*<GalaxyButton text='Back' stateValue={control} {...backProps} />*/}

      <MotionBtn text='back' {...backProps} />

      <Progress step={step}/>

      {/*<GalaxyButton stateValue={control}  {...nextProps} />*/}
      <MotionBtn text='next' {...nextProps} />

    </BottomContainer>
  )
}

export default BottomBar
