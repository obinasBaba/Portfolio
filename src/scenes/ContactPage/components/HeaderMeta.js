import React from 'react'
import styled from 'styled-components'
import { spacing } from '../../../styles/mixins'
import { Typography } from '@material-ui/core'
import {motion} from 'framer-motion'
import {transition} from './shared'

const HeaderMetaContainer = styled( motion.div )`
  display: flex;
  align-items: center;
  justify-content: center;

  ${spacing('gap', 3)};
  ${spacing('mt', 3)};

  & * {
    font-weight: lighter;
    color: #617683;
    letter-spacing: 1px;
  }
`

const metaVariants = {
  initial: {

  },

  animate: {
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.17,
      staggerDirection: -1,
    },
  },

  exit: {
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.17,
      staggerDirection: 1,
    },
  }
}

const childVariants = {
  initial: {
    opacity: 0,
    y: '-110%'
  },

  animate: {
    opacity: 1,
    y: 0,
  },

  exit: {
    opacity: 0,
    y: '-110%'
  }
}


const HeaderMeta = () => {
  return (
    <HeaderMetaContainer variants={metaVariants}
                         transition={transition}

    >

      <motion.div variants={childVariants}
                  transition={transition}
      >
        <Typography variant="body2">hi@henzzo.space</Typography>
      </motion.div>

      <motion.div variants={childVariants}
                  transition={transition}
      >
        <Typography variant="body2">+251 923 36 5539</Typography>
      </motion.div>

    </HeaderMetaContainer>
  )
}

export default HeaderMeta
