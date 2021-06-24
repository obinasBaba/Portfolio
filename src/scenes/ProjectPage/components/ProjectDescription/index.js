import React, { useEffect } from 'react'
import MotionBtn from '../../../../components/MotionBtn'
import { motion } from 'framer-motion'
import {
  btnTxtVariants,
  descTopVariant,
  descTxtVariants,
  letterVariant,
  titleVariant,
  transition,
} from './Variants'
import { OverflowWrapper, ProjectDesc, Tags, Title } from './components'
import baffle from 'baffle'

const ProjectDescription = ({ link, reversed, tags, title, controller, index }) => {

  let b = baffle(document.querySelectorAll(`.baffled-${index}`), {
    characters: '▒█▓▒░<>/',
  });


  useEffect(() => {
    baffle(document.querySelectorAll(`.baffled-${index}`), {
      characters: '▒█▓▒░<>/',
    }).start().reveal(700, 700);
  }, [])

  return (
    <ProjectDesc
      reversed={reversed}
      variants={descTopVariant}
      animate={controller}
      initial="initial"
      exit="exit"

    >
      <OverflowWrapper>
        <motion.div variants={descTxtVariants}
                    custom={b}>

          <Tags className={`baffled-` + index}
                layoutId={`tags ${index}`}

                variant={'subtitle2'}>
            {tags}
          </Tags>
        </motion.div>
      </OverflowWrapper>

      <Title
        variants={titleVariant}
        transition={transition}
        layoutId={`title ${index}`}
      >
        {Array.from(title).map((c, i) =>
          c === ' ' ? (
            ' '
          ) : (
            <motion.span
              key={c + i}
              className="letter"
              variants={letterVariant}
              transition={transition}
            >
              {c}
            </motion.span>
          )
        )}
      </Title>

      <OverflowWrapper transition={transition}
                       layoutId={`btn-${index}`}
                       >
        <motion.div className='btn-wrapper' variants={btnTxtVariants} transition={transition}>
          <MotionBtn text="Case-Study" to={link} margin={false} />
        </motion.div>
      </OverflowWrapper>
    </ProjectDesc>
  )
}

export default ProjectDescription
