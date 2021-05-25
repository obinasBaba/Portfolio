import React from 'react'
import styled from 'styled-components'
import { spacing } from '../../../styles/mixins'
import {Container, Typography} from '@material-ui/core'

const ColorsPaletteFlex = styled.div `
  width: 100%;
  display: flex;
  flex-flow: wrap;
  z-index: 11;
  justify-content: space-evenly;
  ${ spacing('mt', 17) };

  color: ${ ({theme}) => theme.palette.primary.main };
`

const ColorBox = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  ${spacing('ph', 1)};


  & > :last-child {
    transition: all .3s;
    ${spacing('mt', 4)};
  }

  &:hover > :first-child {
    box-shadow: 0 15px 25px 0 rgba(0 0 0 / 23%);
  }

  &:hover > :last-child {
    color: ${({ themeColor }) => themeColor};
    text-shadow: 0.1em 0.1em 0.3em rgba(0, 0, 0, 0.52);
  }

`

const Color = styled.div`
  border-radius: 50%;
  background-color: ${({ hex }) => hex};
  width: clamp(130px, 15vw, 160px);
  height: clamp(130px, 15vw, 160px);
  box-shadow: 0 5px 20px 0 rgba(0 0 0 / 33%);
  transition: all .3s;
`

const ColorPalette = ({ colors, themeColor }) => {
  const tempColors = [
    { name: '$amber', hex: '#ff4200' },
    { name: '$flame-pea', hex: '#373839' },
    { name: '$pearl-bush', hex: '#b3b3b3' },
    { name: '$white', hex: '#ffffff' },
    { name: '$spartan', hex: '#737373' },
  ]

  return (
    <ColorsPaletteFlex maxWidth={false} fixed={true}  >
      {tempColors.map(({ name, hex }) => (
        <ColorBox themeColor='rgba(255,66,0,0.84)' key={hex} >
          <Color hex={hex} />
          <Typography variant="subtitle2" style={{
            letterSpacing: 1,
          }} > {name} </Typography>
        </ColorBox>
      ))}
    </ColorsPaletteFlex>
  )
}

export default ColorPalette
