import React, {useContext, useEffect, useState} from 'react'
import MotionBtn from '../../../../../../../components/MotionBtn'
import {motion, useAnimation} from 'framer-motion'
import {descTxtVariants, transition, letterVariant, titleVariant, top} from './Variants'
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
      variants={top}
      animate={controller}
      initial="initial"
    >
      <OverflowWrapper>
        <motion.div variants={descTxtVariants}
                    custom={b}>

          <Tags className={` forI baffled-` + index} variant={'subtitle2'}>
            {tags}
          </Tags>
        </motion.div>
      </OverflowWrapper>

      <Title variants={titleVariant}>
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

      <OverflowWrapper>
        <motion.div variants={descTxtVariants}>
          <MotionBtn text="Case-Study" to={link} />
        </motion.div>
      </OverflowWrapper>
    </ProjectDesc>
  )
}

export default ProjectDescription
