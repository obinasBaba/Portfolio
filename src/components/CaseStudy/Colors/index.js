import React from 'react';
import styled, { css } from 'styled-components';
import { spacing } from '../../../styles/mixins';
import {
  Container,
  Typography,
  useMediaQuery,
  useTheme,
} from '@material-ui/core';
import { largeUp } from '@/styles/mixins/breakpoints';

const ColorsPaletteContainer = styled(Container)`
  width: 100%;

  ${spacing('mt', 35)};

  //border: thin solid rebeccapurple;
`;

const ColorWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-flow: wrap;
  //z-index: 111;
  justify-content: space-evenly;

  margin-top: 4rem;

  img {
    max-width: 33%;
  }
;

  ${largeUp(css`
    justify-content: space-between;
    flex-flow: nowrap;

    img {
      max-width: 200px;
    }

  `)};

`;

const ColorBox = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  ${spacing('ph', 1)};
  //border: thin solid red;

  & > :last-child {
    transition: all 0.3s;
    ${spacing('mt', 4)};
  }

  &:hover > :first-child {
    box-shadow: 0 15px 25px 0 rgba(0 0 0 / 23%);
  }

  &:hover > :last-child {
    color: ${({ themeColor }) => themeColor};
    text-shadow: 0em 0.1em 0.3em rgba(0, 0, 0, 0.52);
    //display: none;
  }
`;

const Color = styled.div`
  border-radius: 50%;
  background-color: ${({ hex }) => hex};
  width: clamp(130px, 15vw, 160px);
  height: clamp(130px, 15vw, 160px);
  box-shadow: 0 5px 10px 0 rgba(0 0 0 / 33%);
  transition: all 0.3s;
`;

const ColorPalette = ({ colors, themeColor }) => {

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('xxl'));

  return (
    <ColorsPaletteContainer maxWidth={matches ? 'xl' : 'lg'}>

      <Typography variant='h2' gutterBottom> Palette </Typography>

      <ColorWrapper>
        {colors.map(({ publicURL }) => (
          <img src={publicURL} alt='' key={publicURL} />
        ))}
      </ColorWrapper>
    </ColorsPaletteContainer>
  );
};

export default ColorPalette;
