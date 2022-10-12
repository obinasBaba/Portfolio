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
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

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

  ${largeUp(css`
    justify-content: space-between;
    flex-flow: nowrap;

    img {
      max-width: 200px;
    }
  `)};
`;

const ColorPalette = ({ colors, themeColor }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('xxl'));

  return (
    <ColorsPaletteContainer maxWidth={matches ? 'xl' : 'lg'}>
      <Typography variant='h2' gutterBottom>
        Palette
      </Typography>

      <ColorWrapper>
        {colors.map((colorImg) => (
          // <img src={publicURL} alt="" key={colorImg?.publicURL} />
          <GatsbyImage
            key={colorImg?.publicURL}
            alt='elements used in the project'
            image={getImage(colorImg)}
          />
        ))}
      </ColorWrapper>
    </ColorsPaletteContainer>
  );
};

export default ColorPalette;
