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
  const { exp1mp4, exp1webm, exp2mp4, exp2webm, exp3mp4, exp3webm, exp4mp4, exp4webm, } = useExperimentAssets()
  const expData = [
    {src: { mp4: exp1mp4, webm: exp1webm }, title: 'Elastic Search Bar'},
    {src: { mp4: exp2mp4, webm: exp2webm }, title: 'Mouse Hover effect'},
    {src: { mp4: exp3mp4, webm: exp3webm }, title: 'Menu Icon animation'},
    {src: { mp4: exp4mp4, webm: exp4webm }, title: 'TextField Interaction'},
  ]


  return (
    
    <Track>

      {expData.map(( item , index ) => (
        <Item
          key={item.src.publicURL}
          imgUrl={item.src}
          title={item.title}
          index={index}
        />
      ))}

    </Track>
  )
}

export default ExperimentTrack
