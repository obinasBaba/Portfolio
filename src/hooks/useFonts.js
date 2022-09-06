/** @format */

import { useContext, useEffect } from 'react';
import FontLoaded from 'fontfaceobserver';
import { MotionValueContext } from '../contexts/MotionStateWrapper';

const useLoadingFonts = ({ setBackgroundOverlay, backgroundOverlay }) => {
  const { toolTipsData } = useContext(MotionValueContext);

  useEffect(() => {
    if (!backgroundOverlay) return;

    document.body.classList.remove('no-cursor');

    const elianto = new FontLoaded('Elianto-Regular');
    // let poppins = new FontLoaded('Poppins Black')
    const icons = new FontLoaded('shapes');

    Promise.all([elianto.load()])
      .then(() => {
        setTimeout(() => {
          toolTipsData.set({
            show: false,
          });
          setBackgroundOverlay(false);
        }, 2700);

        Promise.all([icons.load()]).then(() => {
          document.body.classList.add('no-cursor');
        });
      })
      .catch(console.error);

    return () => {};
  }, []);
};

export default useLoadingFonts;
