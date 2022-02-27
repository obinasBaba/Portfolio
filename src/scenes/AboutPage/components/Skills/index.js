import React from 'react'
import styled, {css} from 'styled-components'
import { Container, Typography } from '@material-ui/core'
import {spacing, text} from '../../../../styles/mixins'
import SkillColumn from './SkillColumn'
import {useLottiAssets} from '../../../../hooks/queries/useLottiAssets'
import {largeUp} from "../../../../styles/mixins/breakpoints";

const SkillsContainer = styled(Container)`
  ${spacing('mt', 10)};
  
`
const SkillTitle = styled(Typography)`
  font-family: 'Elianto-Regular', serif;
  letter-spacing: -2.2px;
  margin-top: -5px;

  line-height: 108%;

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  // this one fixes gradient text line breaks safari bug: https://zellwk.com/blog/multi-line-gradient-links/
  -webkit-box-decoration-break: clone;

  background-image: linear-gradient(137.81deg,
  #5d6c7b 3.52%,
  #a4b5c0 41.89%,
  #bfd0d9 96.77%);
  
`
const Text = styled(Typography)`
  
  color: #7b8a9b;


  ${text(1.2)};
  ${spacing('mt', 6)};
  ${spacing('mb', 16)};

  ${largeUp( css`
    max-width: 45ch;
    ${spacing('mb', 0)};
  ` )};


  
`

const SkillRow = styled.div`
  display: flex;
  justify-content: space-between;
  gap: .5rem;
  

  ${spacing('mt', 6)};
  
  & > :last-child{
    align-items: flex-end;
    p{
      text-align: right;
    }
  }
  
  ${largeUp( css`
    max-width: 83%;
    gap: 0;

    & > :last-child{
      align-items: flex-start;
      p{
        text-align: initial;
      }
    }

  ` )};
  
  

`

const Skills = () => {

  const { build, prototype} = useLottiAssets()

  return (
    <SkillsContainer  maxWidth="lg">
      <SkillTitle variant="h1">
        Skills &<br />
        expertise
      </SkillTitle>

      <Text>
            as a developer, working through structured
          design and development processes which help me crafting beautiful
          web product focused on simplicity and purpose is what i enjoy most in my work
      </Text>

      <SkillRow>
        <SkillColumn
          path={prototype.publicURL}
          title="design"
          text="I like finding my self in a process of changing an idea,thoughts or plan in to
                something engaging and memorable experience that can tell the aesthetic quality of it's
                intention, and share it with people who care.
                "

          list={['wireframe', 'interaction', 'motion-design']}
        />

        <SkillColumn
          path={build.publicURL}
          title="development"
          text="always starting from scratch, i aim to build innovative &
           flexible solutions that are both flawless and capable of growing with time"

          list={['pwa', 'cms', 'security', 'api']}
        />

      </SkillRow>


    </SkillsContainer>
  )
}

export default Skills
