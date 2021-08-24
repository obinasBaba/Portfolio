import React, {useContext, useEffect, useRef} from 'react'
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
import {AppStateContext} from '../../../../contexts/AppStateContext'
import RightArrowLink
  from '../../../HomePage/Experiments/components/ExperimentTrack/RightArrowLink'

const ProjectDescription = ({ link, reversed, tags, title, url, index, exit }) => {

  const baffleRef = useRef(null)
  const titleRef = useRef(null)
  const {titleRect, setTitleRect} = useContext(AppStateContext)

  /* let b = baffle(document.querySelectorAll(`.baffled-${index}`), {
     characters: '▒█▓▒░<>/',
   });*/
  


  useEffect(() => {
    baffleRef.current = baffle(document.querySelectorAll(`.baffled-${index}`), {
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
    >
      <OverflowWrapper>
        <motion.div variants={tagsVariants} custom={{ baffle: baffleRef.current, exit: exit }} transition={transition} >

          <Tags className={`baffled-` + index} variant={'subtitle2'}>
            {tags}
          </Tags>
        </motion.div>
      </OverflowWrapper>

      <Title variants={titleVariant} transition={transition} ref={titleRef}>
        {
          title.split(' ').map( (word, i) =>

              <motion.span className='word' key={word + i}>

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
