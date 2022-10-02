import React from "react";
import styled from "styled-components";
import { Typography } from "@material-ui/core";
import { spacing, text } from "../../styles/mixins";

const ContactContainer = styled.div`
  display: flex;
  align-self: stretch;
  width: 100%;
  justify-content: space-between;
  align-items: flex-start;
`;

const Content = styled.div`
  display: flex;
  flex: 1;
  flex-flow: column;
  justify-content: flex-start;

  border: thin solid red;

  ${spacing("gap", 1)};
`;

const Inlay = styled.div`
  & > :first-child {
    text-transform: uppercase;
    font-weight: 300;
    letter-spacing: 2px;

    ${text(0.7)};
  }

  & > {
    margin-top: 1rem;
    ${text(0.5)};
  }
`;

const Number = styled.div`
  width: 48%;
`;

function ContactInfo() {
  return (
    <ContactContainer>
      <Number>1</Number>

      <Content>
        <h3>Contact Information</h3>

        <Inlay>
          <Typography variant="subtitle2">General</Typography>
          <span>hi@henzzo.io</span>
          <span>+251 923 3655 39</span>
        </Inlay>

        <Inlay>
          <Typography variant="subtitle2">Vat number</Typography>
          <span>*************</span>
        </Inlay>
      </Content>
    </ContactContainer>
  );
}

export default ContactInfo;
