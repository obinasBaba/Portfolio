import React, { useEffect } from 'react'
import MotionBtn from '../../../../../../../components/MotionBtn'
import { motion } from 'framer-motion'
import baffle from 'baffle/src/baffle'
import {descTxtVariants, transition, letterVariant, titleVariant, top} from './Variants'
import {ProjectDesc, Tags, OverflowWrapper, Title} from './Components'

const ProjectDescription = ({ link, reversed, tags, title }) => {
  useEffect(() => {
    let b = baffle(document.querySelectorAll('.baffled'), {
      characters: '▒█▓▒░<>/',
    })

    setTimeout(() => {
      b.once();
      setTimeout( () => {
        b.start().reveal(1300, 1300)
      }, 200)
    }, 0)

    return () => {
      b.stop()
    }
  }, [])

  return (
    <ProjectDesc
      reversed={reversed}
      variants={top}
      animate="animate"
      initial="initial"
    >
      <OverflowWrapper>
        <motion.div variants={descTxtVariants}>
          <Tags className="baffled" variant={'subtitle2'}>
            {' '}
            {tags}{' '}
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
