import React, { useEffect, useLayoutEffect } from 'react';
import useUpdatePath from '@hooks/useUpdatePath';
import ProjectPage from '@scenes/ProjectPage';
import useToolTip from '@hooks/useToolTip';
import Seo from '@components/seo';
import { useLocomotiveScroll } from '@contexts/LocoMotive';

function Projects ({ path }) {
  useUpdatePath(path);

  useToolTip(' [data-tooltip-text]');
  // useRefreshMouseListeners(".project-work-container [data-pointer]");
  const { locoInstance } = useLocomotiveScroll();

  useLayoutEffect(() => {
    locoInstance?.stop();
    console.log('instance : ', window.locoInstance);

    return () => {
      console.log('destroying locomtive: ', locoInstance);
      // window.fullpage_api.destroy()
      locoInstance?.start();
      locoInstance?.update();
      // window.locoInstance = null;
      // locoInstance?.init();
      // locoInstance?.start();
      // locoInstance.scrollTo(0, {duration: 0})
    };
  }, []);

  useEffect(() => {
    return () => {
      console.log('useEffect destroying locomtive: ', locoInstance);

      // window.fullpage_api.destroy()
      // window.locoInstance?.start();
    }
  }, [])



  return (
    <>
      <Seo
        title='Projects'
        description='A destination of aesthetic pleasure, here you will get your dose of inspiration, as well as find a possible way to implement your business idea.'
      />
      <ProjectPage />
    </>
  );
}

export default Projects;
