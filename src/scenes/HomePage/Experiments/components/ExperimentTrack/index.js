import React from 'react'
import { useExperimentAssets } from '../../../../../hooks/queries/useExperimentAssets'
import Item from './Item'
import styled, { css } from 'styled-components'
import { mediumUp } from '../../../../../styles/mixins'
import ScrollGallery
  from '../../../../../components/ScrollGallery/ScrollGallery'

export const Track = styled.section`
  width: 100%;
  position: relative;
  
  display: flex;
  align-items: center;
  flex-flow: wrap;

  ${mediumUp(css`
    flex-flow: nowrap;
  `)};
`

const ExperimentTrack = () => {
  const { exp1, exp2, exp3, exp4 } = useExperimentAssets()

  return (


    <Track>

      {[exp1, exp2, exp3, exp4].map(({ publicURL }, index) => (
        <Item
          key={index}
          imgUrl={publicURL}
          title={'Experiments & Open Source'}
        />
      ))}

    </Track>
  )
}

export default ExperimentTrack
