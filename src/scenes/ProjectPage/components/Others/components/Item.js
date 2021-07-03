import React from 'react'
import {ListItem} from './index'
import {motion, useAnimation} from 'framer-motion'

const itemVariant = {
  initial: {},
  animate: {},
  exit: {},
  hover(c){

  },
  hoverEnd: {}
}

const titleVariant = {
  initial: {},
  animate: {},
  exit: {},
  hover: {

    transition: {
      staggerChildren: .05,
      staggerDirection: .5
    }
  },
  hoverEnd: {}
};

const letterVariant = {
  initial: {},
  animate: {},
  exit: {},
  hover:{
    y: [null, -30, 0],
    opacity: [1, 0, 1],
    transition: {
      duration: .2,
    },
  },
  hoverEnd: {}
};

const Item = ( { onHoverStart, title, customData} ) => {

  const itemController = useAnimation();


  return (
    <ListItem variants={itemVariant}
              animate={itemController}
              onHoverStart={() => {

                onHoverStart();

                if ( customData.hovering() )
                  itemController.start('hover')

              }}
    >
      <motion.h1 variants={titleVariant} >
        {
          Array.from(title)
            .map((letter, index) =>
              <motion.span variants={letterVariant}>{letter}</motion.span>
            )
        }
      </motion.h1>
    </ListItem>
  )
}

export default Item
