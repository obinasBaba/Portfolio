import React from 'react'
import styled, { css } from 'styled-components'
import {
  gridColWidth, largeUp,
  mediumUp,
  spacing,
} from '../../../../../../../styles/mixins'


const StyledProjectDescription = styled.div`
  display: flex;
  flex-flow: column;
  z-index: 10;
  grid-row: 3;


  & > * + * {
    ${spacing('mt', 2)}
  }

  ${gridColWidth(8, 58)}
  ${spacing('pt', 3)};
  ${spacing('pb', 6)};


  ${mediumUp(css`
    ${({ reversed }) =>
  reversed ? gridColWidth(4, 28) : gridColWidth(39, 62)};
    ${spacing('pb', 0)};

    grid-row: 1;
  `)};

  ${largeUp(css`
    ${({ reversed }) => reversed ? gridColWidth(8, 28) : gridColWidth(39, 58)};
    ${spacing('pt', 6)};

  `)};


  & > :last-child { //motion-btn
    ${spacing('mt', 4.5)};
`


const ProjectDescription = ( {children, reversed} ) => {
  return (
    <StyledProjectDescription reversed={reversed}>
      {children}
    </StyledProjectDescription>
  )
}

export default ProjectDescription
