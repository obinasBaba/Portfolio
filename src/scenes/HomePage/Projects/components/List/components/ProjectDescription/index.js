import React, {useContext, useEffect, useState} from 'react'
import MotionBtn from '../../../../../../../components/MotionBtn'
import {motion, useAnimation} from 'framer-motion'
import {
  descTxtVariants,
  transition,
  letterVariant,
  titleVariant,
  descTopVariant,
  btnTxtVariants,
} from './Variants'
import {ProjectDesc, Tags, OverflowWrapper, Title} from './Components'
import {ExitStateContext} from '../../../../../../../contexts/ExitStateContext'
import baffle from 'baffle'

const ProjectDescription = ({ link, reversed, tags, title, controller, index }) => {

  let b = baffle(document.querySelectorAll(`.baffled-${index}`), {
    characters: '▒█▓▒░<>/',
  });


  useEffect(() => {
    baffle(document.querySelectorAll(`.baffled-${index}`), {
      characters: '▒█▓▒░<>/',
    }).start().reveal(4000,1000);
  }, [])

  return (
    <ProjectDesc
      reversed={reversed}
      variants={descTopVariant}
      animate={controller}
      initial="initial"
      exit='exit'
    >
      <OverflowWrapper>
        <motion.div variants={descTxtVariants}
                    custom={b}>

          <Tags className={` forI baffled-` + index} variant={'subtitle2'}>
            {tags}
          </Tags>
        </motion.div>
      </OverflowWrapper>

      <Title variants={titleVariant}
             transition={transition}
             layoutId={`title ${index}`} >
        {Array.from(title).map((c, i) =>
          c === ' ' ? (
            ' '
          ) : (
            <motion.span
              className="letter"
              variants={letterVariant}
              transition={transition}
            >
              {c}
            </motion.span>
          )
        )}
      </Title>




      <OverflowWrapper
        layoutId={`btn-${index}`}
        transition={transition}>

        <motion.div variants={btnTxtVariants}
                    transition={transition}>

          <MotionBtn text="Case-Study" to={link} margin={false}   />

        </motion.div>
      </OverflowWrapper>

    </ProjectDesc>
  )
}

export default ProjectDescription
