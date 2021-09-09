import React from 'react'
import styled from 'styled-components'
import { Container, Typography } from '@material-ui/core'
import { spacing, text } from '../../../../styles/mixins'
import SkillColumn from './SkillColumn'
import {useLottiAssets} from '../../../../hooks/queries/useLottiAssets'

const SkillsContainer = styled(Container)`
  ${spacing('mt', 6)};
  
`
const SkillTitle = styled(Typography)`
  font-family: Elianto-Regular, serif;
  letter-spacing: -2.2px;

  line-height: 95%;
`
const Text = styled(Typography)`
  max-width: 50ch;
  color: #7b8a9b;


  ${text(1.2)};
  ${spacing('mt', 6)};
`

const SkillRow = styled.div`
  display: flex;
  justify-content: space-between;

  ${spacing('mt', 6)};

`

const Skills = () => {

  const { build, prototype} = useLottiAssets()

  return (
    <SkillsContainer data-scroll-section maxWidth="lg">
      <SkillTitle variant="h1">
        Skills &<br />
        expertise
      </SkillTitle>

      <Text>
        as a developer, i stand where creativity meets technology. i am deeply
        connected to the digital world, but at the same time rooted in nature
        combining both areas is what is enjoy most in my work
      </Text>

      <SkillRow>
        <SkillColumn
          path={prototype.publicURL}
          title="design"
          text="i am curious to go beyond ordinary boundaries
         and create memorable & usable experiences by melding
         design with function."

          list={['Web', 'interaction', 'systems']}
        />

        <SkillColumn
          path={build.publicURL}
          title="development"
          text="always starting from scratch, i aim to build innovative &
           flexible solutions that are both flawless and capable of growing with time"

          list={['front-end', 'cms', 'e-commerce', 'api']}
        />

      </SkillRow>


    </SkillsContainer>
  )
}

export default Skills
