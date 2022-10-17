import React from 'react';
import {
  Container, Typography, useMediaQuery, useTheme,
} from '@material-ui/core';
import SkillColumn from './SkillColumn';
import { useLottiAssets } from '@hooks/queries/useLottiAssets';
import * as s from './skills.module.scss';

function Skills () {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('xxl'));
  const { build, prototype } = useLottiAssets();

  return (<Container className={s.container} maxWidth={matches ? 'xl' : 'lg'}>
    <Typography className={s.title} variant='h1'>
      Skills &<br />
      expertise
    </Typography>

    <Typography className={s.text}>
      As a developer, working through structured design and development
      processes which help me crafting
      <span className='contrast'> beautiful web product</span> focused on
      simplicity and purpose is what i enjoy most in my work
    </Typography>

    <div className={s.row}>
      <SkillColumn
        path={prototype.publicURL}
        title='design'
        text="I like finding my self in a process of changing an idea,thoughts or plan in to
                something engaging and memorable experience that can tell the aesthetic quality of it's
                intention then share it with people who care.
                "
        list={['wireframe', 'interaction', 'motion-design']}
      />

      <SkillColumn
        path={build.publicURL}
        title='development'
        text='I write a beautiful code - delivered on time, on budget, and in full.
                my production philosophy is simple: hit milestones with
                reliability, with deliverables that exceed expectations'
        list={['pwa', 'cms', 'security', 'api']}
      />
    </div>
  </Container>);
}

export default Skills;
