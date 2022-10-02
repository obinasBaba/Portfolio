import React from "react";
import styled from "styled-components";
import { Typography } from "@material-ui/core";
import { HeadLineTitle } from "../shared";
import { spacing, text } from "../../../../styles/mixins";

const CheckColumn = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-auto-flow: column;

  & > :last-child {
    grid-row: 1/ 3;
    grid-column: 3;
  }
`;

const InputItem = styled.div`
  display: flex;
  flex-flow: column;
  align-items: flex-start;

  ${spacing("mb", 2.5)};
`;

const CheckTitle = styled(Typography)`
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 1.3px;
  color: #a4b5c0;

  ${text(1)};
  ${spacing("mt", 0.5)};
`;

const CheckBody = styled(Typography)`
  font-weight: lighter;
  letter-spacing: 0.6px;
  line-height: 170%;
  color: #a4b5c0;

  ${text(0.8)};
`;

function Check({ values }) {
  const checkData = [
    {
      title: "Name",
      data: values.name !== "" ? values.name : "--",
    },
    {
      title: "E-mail",
      data: values.email !== "" ? values.email : "--",
    },
    {
      title: "Project",
      data: values.topic ? values.topic.join(", ") : "-",
    },
    {
      title: "Company",
      data: values.company !== "" ? values.company : "--",
    },
    {
      title: "Phone",
      data: values.phone !== "" ? values.phone : "--",
    },
    {
      title: "Message",
      data: values.message !== "" ? values.message : "--",
    },
  ];

  return (
    <div>
      <HeadLineTitle variant="h2">Are we good?</HeadLineTitle>

      <CheckColumn>
        {checkData.map(({ title, data }, idx) => (
          <InputItem>
            <CheckTitle varaint="subtitle2" gutterBottom>
              {title}
            </CheckTitle>
            <CheckBody varaint="subtitle2">{data}</CheckBody>
          </InputItem>
        ))}
      </CheckColumn>
    </div>
  );
}

export default Check;
