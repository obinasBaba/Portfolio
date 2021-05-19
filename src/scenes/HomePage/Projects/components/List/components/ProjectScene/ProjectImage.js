import React from 'react'
import styled, { css } from 'styled-components'
import {
  gridColWidth,
  mediumUp,
  spacing,
} from '../../../../../../../styles/mixins'
import { motion } from 'framer-motion'
import { Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'



const ProjectImg = styled( motion.div )`
  ${gridColWidth()}; //mobile-first
  background-color: ${({ theme }) => theme.palette.secondary.main};
  //transform: scale(1);
  //transition: transform 0.6s cubic-bezier(0.075, 0.82, 0.165, 1);

  & :hover {
    //transform: scale(0.9);
  }

  ${mediumUp(css`
    ${({ reversed }) => reversed ? gridColWidth(24, 65) : gridColWidth(1, 42)};
    grid-row: 1;
    //margin-right: 0;
  `)};

  .motion-div {
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
            ${spacing('pr', 1)};
            justify-content: flex-end;
          `
        : css`
            ${spacing('pr', 9)};
            ${spacing('pl', 1)};
          `};

    & > div {
      display: block;
      overflow: hidden;
    }
  }

  
`

const transition = {
  duration: .6,
  ease: [0.075, 0.82, 0.165, 1],
}

const topVariant = {
  hover: {
    scale: .9,
  },
  transition: {
    delayChildren: .2,
  }
};

const wrapperVariant = {
  initial: {
    scale: 1
  },

  hover: (o) => ({
    x: o.reversed ? -50 : 50,
    transition: {
      ...transition,
      duration: .6,
    }
  })
};

const ProjectImage = ({ reversed, alt, link, preview, title }) => {
  return (
    <ProjectImg reversed={reversed}
                variants={topVariant}
                initial={'initial'}
                animate={'animate'}
                transition={transition}
                whileHover='hover'>

      <motion.div className='motion-div'
                  custom={ { reversed } }
                  transition={transition}
                  variants={wrapperVariant}

      >

        <Link to={link}>
          <GatsbyImage
            alt={alt}
            key={title}
            className={'project-image'}
            image={getImage(preview)}
          />
        </Link>

      </motion.div>
    </ProjectImg>
  )
}

export default ProjectImage
