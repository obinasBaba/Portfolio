import React, { useRef } from 'react'
import styled, { css } from 'styled-components'
import { useLottiAssets } from '../../../../hooks/queries/useLottiAssets'
import { Typography } from '@material-ui/core'
import { spacing, text } from '../../../../styles/mixins'
import TopicIllustration from './Topicillustration'

const TopicItemContainer = styled.div`
  position: relative;
  height: 200px;
  width: 300px;
  display: flex;
  flex-flow: column;
  align-items: flex-start;

  border-radius: 20px;
  background-color: #485564;
  transition: background-color 0.3s ease-in;

  &:hover {
    //background-color: #5d6c7b;;

    ${({ selected }) =>
      !selected &&
      css`
        background-color: #758593;
        transition: background-color 0.3s ease-out;
      `};
  }

  ${({ selected }) =>
    selected &&
    css`
      background-color: #758593;
    `};

  ${spacing('p', 2.7)};

  & .topic_checkbox {
    position: absolute;
    visibility: hidden;
  }
`

const TopicTitle = styled(Typography)`
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 1.3px;
  color: #02021e;

  ${text(1)};
  ${spacing('mt', 0.5)};
`

const TopicBody = styled(Typography)`
  font-weight: lighter;
  //color: #bac2d3;
  letter-spacing: 0.6px;
  line-height: 170%;
  color: #02021e;

  ${text(0.8)};
`

const TopicItem = ({ title, body, path, selected, ...props }) => {
  const checkboxRef = useRef(null)

  return (
    <TopicItemContainer
      selected={selected}
      data-pointer-color="#123"
      data-pointer="focus"
      onClick={() => {
        checkboxRef.current.click()
      }}
    >
      <input
        ref={checkboxRef}
        className="topic_checkbox"
        type="checkbox"
        {...props}
      />

      <TopicIllustration path={path} />

      <TopicTitle varaint="subtitle2" gutterBottom={true}>
        {title}
      </TopicTitle>

      <TopicBody variant="subtitle2">{body}</TopicBody>
    </TopicItemContainer>
  )
}

export default TopicItem
