import React from 'react'
import { useExperimentAssets } from '../../../../../hooks/queries/useExperimentAssets'
import Item from './Item'
import styled, { css } from 'styled-components'
import { mediumUp } from '../../../../../styles/mixins'

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
  const expData = [
    {src: exp1, title: 'Elastic Search Bar'},
    {src: exp2, title: 'Mouse Hover effect'},
    {src: exp3, title: 'Menu Icon animation'},
    {src: exp4, title: 'TextField Interaction'},
  ]


  return (
    
    <Track>

      {expData.map(( item , index ) => (
        <Item
          key={item.src.publicURL}
          imgUrl={item.src.publicURL}
          title={item.title}
          index={index}
        />
      ))}

    </Track>
  )
}

export default ExperimentTrack
