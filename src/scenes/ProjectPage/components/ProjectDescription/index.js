import React, {useEffect, useRef} from 'react'
import MotionBtn from '../../../../components/MotionBtn'
import { motion } from 'framer-motion'
import {
  btnTxtVariants,
  containerVariant,
  tagsVariants,
  letterVariant,
  titleVariant,
  transition,
} from './Variants'
import { OverflowWrapper, ProjectDesc, Tags, Title } from './components'
import baffle from 'baffle'

const ProjectDescription = ({ link, reversed, tags, title, controller, url, index, location }) => {

  const baf = useRef(null)

  let b = baffle(document.querySelectorAll(`.baffled-${index}`), {
    characters: '▒█▓▒░<>/',
  });



  useEffect(() => {
    baf.current = baffle(document.querySelectorAll(`.baffled-${index}`), {
      characters: '▒█▓▒░<>/',
    });

    baffle(document.querySelectorAll(`.baffled-${index}`), {
      characters: '▒█▓▒░<>/',
    }).start().reveal(1000, 1400);
  }, [])

  return (
    <ProjectDesc
      reversed={reversed}
      variants={containerVariant}
      // animate={controller}
      // initial="initial"
      // initial={false}

      // exit="exit"

    >
      <OverflowWrapper>
        <motion.div variants={tagsVariants} custom={baf.current} transition={transition} >

          <Tags className={`baffled-` + index} variant={'subtitle2'}>
            {tags}
          </Tags>
        </motion.div>
      </OverflowWrapper>

      <Title variants={titleVariant} transition={transition}>
        {
          title.split(' ').map( (word, i) =>

              <motion.span className='word'>

                {
                  Array.from(word).map((c, i) =>

                      <motion.span
                        key={c + i}
                        className="letter"
                        variants={letterVariant}
                        transition={transition}
                      >
                        {c}
                      </motion.span>

                  )
                }&#160;

              </motion.span>

            )
        }
      </Title>

      <OverflowWrapper >

        <motion.div className='btn-wrapper' variants={btnTxtVariants} transition={transition}>
          <MotionBtn text="Case-Study" to={link} state={{path: url}} margin={false} />
        </motion.div>

      </OverflowWrapper>
    </ProjectDesc>
  )
}

export default ProjectDescription
