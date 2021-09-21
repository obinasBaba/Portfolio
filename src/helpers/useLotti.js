import {useEffect, useRef} from 'react'
import lotti from 'lottie-web'

const useLotti = (path, ref, loopReverse=false) => {

  const lottiRef = useRef(null)

  useEffect(() => {
    lotti.destroy(path)

    setTimeout(() => {
      if (true ) {
        lottiRef.current = lotti.loadAnimation({
          name: path,
          container: ref.current,
          renderer: 'svg',
          loop: loopReverse,
          autoplay: true,
          path: path,
        })

        let r = 1;
        // l.addEventListener('data_ready', () => {})
        if ( !loopReverse ){
          lottiRef.current.addEventListener('complete', () => {
            1 === r ? r = -1 : -1 === r && (r = 1);
            lottiRef.current.setDirection(r);
            lottiRef.current.play();
          })
        }

      }

    }, 1000)

    // return ( ) => lotti.destroy(path)

  }, [])

  return lottiRef.current;
}

export default useLotti;