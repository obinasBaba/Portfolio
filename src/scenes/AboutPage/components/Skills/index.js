import React from "react";
import styled, { css } from "styled-components";
import {
  Container,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import { spacing, text } from "../../../../styles/mixins";
import SkillColumn from "./SkillColumn";
import { useLottiAssets } from "../../../../hooks/queries/useLottiAssets";
import { mediumUp } from "../../../../styles/mixins/breakpoints";
import { GradientTextStyle } from "../../../../components/GradientText";

const SkillsContainer = styled(Container)`
  ${spacing("mt", 10)};
`;
const SkillTitle = styled(Typography)`
  ${GradientTextStyle};
  line-height: 108%;
`;
const Text = styled(Typography)`
  letter-spacing: 0.07vmax;
  color: #7b8a9b;

  .contrast {
    color: var(--medium-blue-color);
    filter: drop-shadow(0 0 5px var(--medium-blue-color));
  }

  ${spacing("mt", 3)};

  ${text(0.95)};

  ${mediumUp(css`
    max-width: 45ch;
  `)};
`;

const SkillRow = styled.div`
  display: flex;
  flex-flow: column;
  gap: 10vmax;
  align-items: center;

  ${spacing("mt", 12)};

  ${mediumUp(css`
    gap: 0;
    flex-flow: row;
    justify-content: space-evenly;
    align-items: stretch;
  `)};
`;

function Skills() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("xxl"));
  const { build, prototype } = useLottiAssets();

  return (
    <SkillsContainer maxWidth={matches ? "xl" : "lg"}>
      <SkillTitle variant="h1">
        Skills &<br />
        expertise
      </SkillTitle>

      <Text>
        As a developer, working through structured design and development
        processes which help me crafting
        <span className="contrast"> beautiful web product</span> focused on
        simplicity and purpose is what i enjoy most in my work
      </Text>

      <SkillRow>
        <SkillColumn
          path={prototype.publicURL}
          title="design"
          text="I like finding my self in a process of changing an idea,thoughts or plan in to
                something engaging and memorable experience that can tell the aesthetic quality of it's
                intention then share it with people who care.
                "
          list={["wireframe", "interaction", "motion-design"]}
        />

        <SkillColumn
          path={build.publicURL}
          title="development"
          text="I write a beautiful code - delivered on time, on budget, and in full.
                my production philosophy is simple: hit milestones with
                reliability, with deliverables that exceed expectations"
          list={["pwa", "cms", "security", "api"]}
        />
      </SkillRow>
    </SkillsContainer>
  );
}

export default Skills;
