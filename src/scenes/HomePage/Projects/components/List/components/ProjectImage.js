import React from 'react'
import styled, { css } from 'styled-components'
import {
  gridColWidth,
  mediumUp,
  spacing,
} from '../../../../../../styles/mixins'
import { motion } from 'framer-motion'
import { Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'



const ProjectImg = styled( motion.div )`
  ${ gridColWidth() }; //mobile-first
  padding: 0;
  cursor: pointer;
  position: relative;


  ${ mediumUp(css`
    ${ ({ reversed }) => reversed ? gridColWidth(24, 65) : gridColWidth(1,
            42) };
    grid-row: 1;
    //margin-right: 0;
  `) };

  .motion-div-1 {
    background: ${ ({ theme }) => theme.palette.secondary.main };
    
  }

  .motion-div-2 {
    width: 100%;
    height: 100%;
    overflow: hidden;
    display: flex;
    justify-content: start;
    align-items: center;

    ${ spacing('pt', 6) };
    ${ spacing('pb', 7) };

    ${ ({ reversed }) =>
            reversed
                    ? css`
                      ${ spacing('pl', 9) };
                      ${ spacing('pr', 1) };
                      justify-content: flex-end;
                    `
                    : css`
                      ${ spacing('pr', 9) };
                      ${ spacing('pl', 1) };
                    ` };

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

const containerVariants = {

  hover: {},

  transition: {
    delayChildren: 3.5,
  }
};

const div1_Variants = {
  hover: {
    scale: .9,
    transition: {
      ...transition,
      delayChildren: .01
    }
  }
}

const div2_Variants = {
  initial: {
    scale: 1
  },

  hover: (o) => ({
    x: o.reversed ? -60 : 60,
    transition: {
      ...transition,
      duration: .6,
    }
  })
};

const ProjectImage = ({ reversed, alt, link, preview, title }) => {
  return (
    <ProjectImg reversed={reversed}
                variants={containerVariants}
                initial={'initial'}
                animate={'animate'}
                transition={transition}
                whileHover='hover'>

      <motion.div className="motion-div-1"
                  variants={div1_Variants}
                  transition={transition}
      >

        <motion.div className='motion-div-2'
                    custom={ { reversed } }
                    transition={transition}
                    variants={div2_Variants}

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

      </motion.div>

    </ProjectImg>
  )
}

export default ProjectImage
