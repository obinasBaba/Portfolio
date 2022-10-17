import React from 'react';
import styled, { css } from 'styled-components';
import {
  useExperimentAssets,
} from '../../../../../hooks/queries/useExperimentAssets';
import Item from './Item';
import { mediumUp } from '../../../../../styles/mixins/breakpoints';

export const Track = styled.section`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  flex-flow: wrap;

  ${mediumUp(css`
    flex-flow: nowrap;
    justify-content: space-evenly;
  `)};
`;

function ExperimentTrack () {
  const {
    exp1mp4,
    exp1webm,
    exp2mp4,
    exp2webm,
    exp3mp4,
    exp3webm,
    exp4mp4,
    exp4webm,
  } = useExperimentAssets();
  const expData = [
    {
      src: { mp4: exp1mp4.publicURL, webm: exp1webm.publicURL },
      title: 'Elastic Search Bar',
    },
    {
      src: { mp4: exp2mp4.publicURL, webm: exp2webm.publicURL },
      title: 'Mouse Hover effect',
    },
    {
      src: { mp4: exp3mp4.publicURL, webm: exp3webm.publicURL },
      title: 'Menu Icon animation',
    },
    {
      src: { mp4: exp4mp4.publicURL, webm: exp4webm.publicURL },
      title: 'TextField Interaction',
    },
  ];

  return (
    <Track>
      {expData.map((item, index) => (
        <Item
          key={item.src.mp4 + index}
          imgUrl={item.src}
          title={item.title}
          index={index}
        />
      ))}
    </Track>
  );
}

export default ExperimentTrack;
