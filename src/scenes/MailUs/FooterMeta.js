import React from 'react'
import styled, { css } from 'styled-components'
import { Container, Typography } from '@material-ui/core'
import { mediumUp, spacing } from '../../styles/mixins'
import { motion } from 'framer-motion'
import { Link } from 'gatsby'

const FooterMetaContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  flex-flow: column;

  ${spacing('mv', 5)};

  ${mediumUp(css`
    flex-flow: row wrap;
  `)};
`

const MetaColumn = styled.div`
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  //border: thin solid lightcoral;

  & .title {
    ${spacing('mb', 1.5)};
    font-weight: bolder;
    letter-spacing: 1px;
  }

  & .link-txt {
    ${spacing('mt', 0.5)};
    font-weight: 300;
    letter-spacing: 1.2px;
  }
`

const Hover = styled(motion.div)`
  position: relative;
  text-decoration: none;
  color: inherit;
  //cursor: pointer;
  //border: thin solid red;

  & a {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 10;
  }

  & .title {
    ${spacing('mb', 0.5)};
    font-weight: bolder;
    letter-spacing: 1px;
  }

  .wrapper {
    position: absolute;
    top: auto;
    bottom: auto;
    width: 40%;
    //overflow: hidden;
    //border: thin solid red;

    //transform-origin: left;
  }

  .line {
    width: 100%;
    background-color: white;
    height: 1px;
  }

  .inlay {
  }
`

const line1Variants = {
  transition: {
    duration: 0.8,
    // ease: 'easeIn',
    // times: [0, 1, 1, 1],
  },

  initial: {
    opacity: 0,
    x: 0,
    scaleX: 1,
  },
  animate: {
    opacity: 0,
    x: 0,
    scaleX: 1,
    transition: {
      opacity: { duration: 0.4 },
      default: {
        delay: 0.4,
        duration: 0,
      },
    },
  },

  hover: {
    opacity: 1,
    x: 10,
    originX: 'right',
    scaleX: [null, 0],
  },
  exit: {},
}

const line2Variant = {
  transition: {},

  initial: {
    opacity: 0,
    scaleX: 0,
    x: -10,
  },

  animate: {
    opacity: 0,
    scaleX: 0,
    x: -10,
    transition: {
      opacity: {
        duration: 0.5,
      },
      x: {
        delay: 0.5,
        duration: 0,
      },
      scaleX: {
        delay: 0.5,
        duration: 0,
      },
      default: {
        duration: 0,
      },
    },
  },

  hover: {
    x: 0,
    opacity: 1,
    originX: 'left',
    scaleX: [null, 1],
    transition: {
      delay: 0.4,
      duration: 0.8,
    },
  },
}

const FooterMeta = () => {
  const titleData = ['Explore', 'Social', 'Contact', 'Henzzo.io']

  const data = [
    [
      {
        txt: 'Home',
        link: '/',
      },
      {
        txt: 'about',
        link: '/',
      },
      {
        txt: 'projects',
        link: '/projects',
      },
      'blogs',
      {
        txt: 'contact',
        link: '/',
      },
    ],
    [
      {
        txt: 'Dribble',
        link: '/',
      },
      {
        txt: 'Linkedin',
        link: '/',
      },
      {
        txt: 'Github',
        link: '/',
      },
      {
        txt: 'Readers-Corner',
        link: '/',
      },
    ],
    [
      {
        txt: 'hi@henzzo.io',
        link: '/',
      },
      {
        txt: '+251-923-3655-39',
        link: '/',
      },
    ],
    [
      {
        txt: 'Addis-Abeba',
      },
      {
        txt: '2020 Pop',
      },
      {
        txt: 'Ethiopia',
      },
    ],
    // ['hi@henzzo.io', '+251 923 3655 39'],
    // ['Addis-Abeba,', '2020 Pop,', 'Ethiopia,'],
  ]

  return (
    <FooterMetaContainer maxWidth="lg" disableGutters={true}>
      {titleData.map((title, i) => {
        return (
          <MetaColumn key={title + i}>
            <Typography variant="h5" className="title">
              {title}
            </Typography>

            {data[i].map(({ txt, link }) => (
              <Hover
                key={txt + title}
                variants={{}}
                whileHover="hover"
                initial="initial"
                animate="animate"
                exit="exit"
              >
                {link && <Link to={'link'} />}

                <Typography
                  key={Math.random()}
                  className="link-txt"
                  variant="subtitle2"
                >
                  {txt}
                </Typography>

                <motion.div className="wrapper">
                  <motion.div
                    className="line top"
                    variants={line1Variants}
                    transition={line1Variants.transition}
                  />
                  <motion.div
                    className="line bottom"
                    variants={line2Variant}
                    transition={line1Variants.transition}
                  />
                </motion.div>
              </Hover>
            ))}
          </MetaColumn>
        )
      })}
    </FooterMetaContainer>
  )
}

export default FooterMeta
