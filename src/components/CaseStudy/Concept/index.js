import React from "react";
import styled from "styled-components";
import { Container, Typography } from "@material-ui/core";
import { spacing } from "../../../styles/mixins";
import cover from "./Vigoza-Big-Cover@2x.jpg";

const ConceptContainer = styled.div`
  display: flex;
  flex-flow: column;
  ${spacing("mv", 13)};

  & .cover {
    background: url(${cover}) no-repeat center;
    background-size: cover;
    //background-repeat: no-repeat;
    height: 55rem;
    width: 100%;
  }
`;

const ConceptTxtWrapper = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${spacing("ph", 8)};
  ${spacing("mb", 15)};

  .concept {
    letter-spacing: 0.2em;
  }

  .concept-desc {
    max-width: 46ch;
    line-height: 160%;
  }
`;

const Concept = () => {
  return (
    <ConceptContainer>
      <ConceptTxtWrapper maxWidth="xl" fixed={true}>
        <Typography variant="h3" className="concept">
          CONCEPT
        </Typography>
        <Typography className="concept-desc">
          Since the university is near an the main target is students, i tried
          to create a stylish atmosphere with a Wesctern feel rather that
          inorganic atmosphere of a typical hair salon. for the key visuals, i
          Photographed the tools and hair styleing products that i usually use,
          and adjusted theme to look like a magazine while.
        </Typography>
      </ConceptTxtWrapper>

      <div className="cover" />
    </ConceptContainer>
  );
};

export default Concept;
