/** @format */

import { useEffect, useRef } from 'react';
import Lotti from 'lottie-web';

const useLotti = (
  path,
  ref,
  loopReverse = false,
  autoPlay = false,
  inView = true,
) => {
  const lottiRef = useRef(null);

  useEffect(() => {
    if (!inView) return;

    // lotti.destroy(path)

    lottiRef.current = Lotti.loadAnimation({
      name: path,
      container: ref.current,
      renderer: 'svg',
      loop: loopReverse,
      autoplay: autoPlay,
      path,
    });

    let r = 1;
    // l.addEventListener('data_ready', () => {})
    if (!loopReverse) {
      lottiRef.current.addEventListener('complete', () => {
        r === 1 ? (r = -1) : r === -1 && (r = 1);
        lottiRef.current.setDirection(r);
        lottiRef.current.play();
      });
    }

    return () => Lotti.destroy(path);
  }, [inView]);

  return lottiRef;
};

export default useLotti;
