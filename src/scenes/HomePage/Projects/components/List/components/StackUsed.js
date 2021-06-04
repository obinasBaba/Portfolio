import React from 'react'
import styled, { css } from 'styled-components'
import {
  gridColWidth,
  heightWidth,
  largeUp,
  mediumUp,
  spacing,
} from '../../../../../../styles/mixins'
import {ReactSVG} from 'react-svg'

const StackList = styled.ul`
  grid-row: 2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style-type: none;
  padding: 0;
  
  ${gridColWidth(3, 30)};
  ${spacing('mt', 1)};

  ${mediumUp(css`
    grid-row: 2;
    display: flex;

    ${({ reversed }) =>
      reversed ? gridColWidth(40, 59) : gridColWidth(6, 20)};
  `)};
  
  ${ largeUp( css`

    ${({ reversed }) =>
            reversed ? gridColWidth(19, 35) : gridColWidth(6, 20)};
  ` ) };
  

  img {
    display: block;
    width: auto;
    margin: 0 auto;
    object-fit: cover;
    ${heightWidth('width', 3)};
    ${heightWidth('height', 3)};
  }
  
`

const StackUsed = ({ reversed, items }) => {
  return (
    <StackList reversed={reversed}>
      {items.map(({ publicURL }) => {
        return (
          <li key={publicURL}>
            <img src={publicURL} alt="stack logo" loading={'lazy'} />
          </li>
        )
      })}
    </StackList>
  )
}

export default StackUsed
