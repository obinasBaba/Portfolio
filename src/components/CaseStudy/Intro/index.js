import React from 'react';
import { Typography, useMediaQuery, useTheme } from '@material-ui/core';
import {
  container,
  text,
  textWrapper,
  vidDesc,
  vidWrapper,
  wrapper,
} from './intro.module.scss';
import VideoPlayer from '@/pages/projects/vigoza/components/VideoView';

const Intro = ({ intro }) => {
  const { desc, themeColor, title, logoUrl, color } = intro;

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <div
      className={container}
    >

      <div className={wrapper}>

        <div className={textWrapper}>
          <Typography variant='h1' >
            background
          </Typography>

          <Typography className={text}

                      variant={matches && 'body1'}>{desc}</Typography>
        </div>

        <div className={vidWrapper}>
          <VideoPlayer />
          <div className={vidDesc}>
            <Typography variant='h4' gutterBottom>An invitation</Typography>
            <Typography className={text} variant={matches && 'body1'}>just as
              kayam's music is vibrant, so should be the
              website. an immersive parallax effect serves as a magical entry
              into
              a dreamlike world full of things to
              discover. to create the effect, each of the 16 separate layers
              follow an individual motion pattern, which is
              controlled by the user's scroll progression.</Typography>
          </div>
        </div>

      </div>


    </div>
  );
};

export default Intro;
