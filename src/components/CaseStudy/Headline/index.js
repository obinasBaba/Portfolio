import React from 'react';
import {
  HeadlineContainer,
  ImageWrapper,
  InnerWrapper,
  Texts,
} from './Components';
import { motion } from 'framer-motion';
import MotionBtn from '../../MotionBtn';

import {
  btnVariant,
  containerVariants,
  imgWrapperVariant,
  innerVariant,
  textsVariant,
  titleVariant,
  transition,
} from './variants';
import Tags from './components/Tags';
import Title
  from '../../../scenes/ProjectPage/components/ProjectDescription/components/Title';

const Headline = ({ tags, title, liveUrl, media }) => (
  <HeadlineContainer variants={containerVariants}>
    <Texts variants={textsVariant} transition={transition}>
      <Tags txt={tags} />

      <Title
        title={title}
        variants={{
          title: titleVariant,
          transition,
        }}
      />

      <motion.div
        variants={{}}
        // transition={transition}
        style={{ color: 'white' }}
      >
        <MotionBtn margin={false} text='Visit Site' to={liveUrl}
                   external={true}
                   variants={{}}
                   textMotionProps={{
                     variants: btnVariant,
                     transition: transition,
                   }}

        />
      </motion.div>
    </Texts>

    <ImageWrapper variants={imgWrapperVariant} transition={transition}>
      <InnerWrapper variants={innerVariant} transition={transition}>
        <motion.img
          src={media}
          // src={TestPreview}
        />
      </InnerWrapper>
    </ImageWrapper>
  </HeadlineContainer>
);

export default Headline;
