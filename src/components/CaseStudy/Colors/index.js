import React from 'react';
import {
  Container,
  Typography,
  useMediaQuery,
  useTheme,
} from '@material-ui/core';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import * as s from './palette.module.scss';

const ColorPalette = ({ colors, themeColor }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('xxl'));

  return (
    <Container className={s.container} maxWidth={matches ? 'xl' : 'lg'}>
      <Typography variant='h1' gutterBottom>
        Palette
      </Typography>

      <div className={s.wrapper}>
        {colors.map((colorImg) => (
          // <img src={publicURL} alt="" key={colorImg?.publicURL} />
          <div className={s.img} key={colorImg?.publicURL}>
            <GatsbyImage
              key={colorImg?.publicURL}
              alt='elements used in the project'
              image={getImage(colorImg)}
              objectFit='cover'
            />
          </div>

        ))}
      </div>
    </Container>
  );
};

export default ColorPalette;
