import React from 'react'
import styled, { css } from 'styled-components'
import {
  gridColWidth,
  gridify,
  xLargeDown,
  largeUp,
  mediumUp,
  spacing,
  xLargeUp,
} from '../../../../../../../styles/mixins'
import { Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import MotionBtn from '../../../../../../../components/MotionBtn'
import { Typography, useMediaQuery, useTheme } from '@material-ui/core'

const ProjectImg = styled.div`
  ${gridColWidth()}; //mobile-first
  background-color: ${({ theme }) => theme.palette.secondary.main};
  transform: scale(1);
  transition: transform 0.6s cubic-bezier(0.075, 0.82, 0.165, 1);

  & :hover{
    transform: scale(0.9);
  }


  & > a {
    overflow: hidden;
    display: flex;
    justify-content: start;
    align-items: center;

    ${spacing('pt', 6)};
    ${spacing('pb', 7)};

    ${({ reversed }) =>
      reversed
        ? css`
            ${spacing('pl', 9)};
            ${spacing('pr', 0)};
            justify-content: flex-end;
          `
        : css`
            ${spacing('pr', 9)};
            ${spacing('pl', 0)};
          `};

    & > div {
      display: block;
      overflow: hidden;
    }
  }

  ${mediumUp(css`
    ${({ reversed }) =>
      reversed ? gridColWidth(24, 65) : gridColWidth(1, 42)};
    grid-row: 1;
    //margin-right: 0;
  `)};
`

const ProjectDescription = styled.div`
  display: flex;
  flex-flow: column;
  z-index: 10;
  grid-row: 3;


  & > * + * {
    ${spacing('mt', 2)}
  }

  ${gridColWidth(8, 58)}
  ${spacing('pt', 3)};
  ${spacing('pb', 6)};


  ${mediumUp(css`
    ${({ reversed }) =>
      reversed ? gridColWidth(4, 28) : gridColWidth(39, 62)};
    ${spacing('pb', 0)};

    grid-row: 1;
  `)};

  ${largeUp(css`
    ${({ reversed }) => reversed ? gridColWidth(8, 28) : gridColWidth(39, 58)};
    ${spacing('pt', 6)};

  `)};


  & > :last-child { //motion-btn

    ${spacing('mt', 4.5)};


    //@include hl-margin(top, 60px);
    //@include hl-margin(bottom, 10px);
    //  @media screen and (min-width: $xl) {
    //  @include hl-margin(top, 40px);
    //  @include hl-margin(bottom, 30px);
    //  }
    //  @media screen and (max-width: $lg) {
    //  @include hl-margin(top, 30px);
    //  @include hl-margin(bottom, 40px);
    //  }
    //}

`

const Tags = styled( Typography )`
  font-weight: 300;
  line-height: 1.6em;
  letter-spacing: 0.5px;
  color: gray;
`

const ProjectScene = ({
  link,
  preview,
  reversed,
  tags,
  title,
  alt,
  imgTitle,
}) => {
  const theme = useTheme()
  const media = useMediaQuery(theme.breakpoints.up('md'))

  return (
    <>
      <ProjectImg reversed={reversed}>
        <Link to="/">
          <GatsbyImage
            alt={alt}
            key={title}
            className={'project-image'}
            image={getImage(preview)}
          />
        </Link>
      </ProjectImg>

      <ProjectDescription reversed={reversed}>
        <Tags variant={ 'subtitle2' } > {tags} </Tags>



        <Link to="/">
          {' '}
          <Typography
            variant={'h3'}
            style={{
              lineHeight: '1.25em',
              fontWeight: 700,
            }}
          >
            {title}
          </Typography>{' '}
        </Link>

        <MotionBtn text="Case-Study" />
      </ProjectDescription>
    </>
  )
}

export default ProjectScene
