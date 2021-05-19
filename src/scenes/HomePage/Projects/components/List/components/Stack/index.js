import React from 'react'
import styled, { css } from 'styled-components'
import {
  gridColWidth, heightWidth,
  largeUp,
  mediumUp,
  spacing,
} from '../../../../../../../styles/mixins'
import { ReactSVG } from 'react-svg'

const StackList = styled.ul`
  display: flex;
  grid-row: 2;
  ${ gridColWidth(3, 30) };

  justify-content: space-between;
  align-items: center;
  list-style-type: none;
  padding: 0;
  ${spacing('mt', 3)};

  ${mediumUp(css`
    grid-row: 2;
    display: flex;

    ${ ({reversed}) => reversed ? gridColWidth(30, 59) : gridColWidth(3, 30)};
  `)};

  ${largeUp(css`
    ${ ({reversed}) => reversed ? gridColWidth(30, 59) : gridColWidth(3, 30)};
  `)};



  img {
    display: block;
    width: auto;
    margin: 0 auto;

    ${ heightWidth('height', 4) };
  }
`

const StackUsed = ({ reversed, items }) => {
  return (
    <StackList reversed={reversed}>
      {items.map(({ publicURL }) => {

        console.log(publicURL, 'public url -------')

        return (
          <li key={publicURL}>
            <img src={publicURL} alt="stack logo" loading={'lazy'} />
            {/*<ReactSVG src={publicURL} />*/}
          </li>
        )
      })}
    </StackList>
  )
}

export default StackUsed
