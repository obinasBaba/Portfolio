import React from 'react';
import ExperimentTrack from './components/ExperimentTrack';
import HeadlineTitle from '../../../components/Headline';
import * as s from './experiment.module.scss';

function Experiments () {
  return (<div className={s.container}>
    <HeadlineTitle
      title=' Web is fun'
      subtitle='Experiments & Open Source'
      mb={4}
    />

    <ExperimentTrack />
  </div>);
}

export default Experiments;
