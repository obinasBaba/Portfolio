import React from 'react'
import {motion, useAnimation} from 'framer-motion'
import styled from 'styled-components'
import {spacing, text} from '../../../../../styles/mixins'
import { GradientText } from '../../../../../components/GradientText'
import {Typography} from '@material-ui/core'

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

const ListItem = styled( motion.li )`
  //border: thin solid red;
  padding: 0;
  margin: 0;
  
  ${spacing('p', 2)};
  //flex: 1 1 32%;

  .title{
    line-height: 180%;
    
    span{
      display: inline-block;
    }
  }

`

const Tags = styled.div`
  display: flex;
  align-items: center;
  //flex-flow: column;
  text-transform: uppercase;
  letter-spacing: 2px;
  line-height: 0;

  ${ spacing('gap', 1) };

  
  p{
    ${ text(.6) };
    font-weight: lighter;
    opacity: .6;
  }
  
`



const DescTxt = styled( Typography )`
  font-weight: lighter;
  max-width: 40ch;

  ${text(.9)};
`



const Item = ( { onHoverStart, title, customData} ) => {

  const itemController = useAnimation();


  return (
    <ListItem variants={itemVariant}
              animate={itemController}
              onHoverStart={() => {
                onHoverStart();
              }}
    >
      <GradientText variant='h3' className='title' >
        {title}
      </GradientText>

      <Tags>
        <p>Identity</p>
        <p>Cms</p>
        <p>Prototyping</p>
        <p>System</p>
      </Tags>

      <DescTxt className='approach-desc' >
        a fairly unique movie streaming service that intends to cover the niche of rather
        uncoventional treasures.
      </DescTxt>


    </ListItem>
  )
}

export default Item
