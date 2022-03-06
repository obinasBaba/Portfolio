import {useContext, useEffect, useLayoutEffect, useState} from 'react'
import FontLoaded from 'fontfaceobserver'
import { BackgroundOverlayStateContext } from '../contexts/AppStateContext'

const useLoadingFonts = () => {
  const { setBackgroundOverlay, backgroundOverlay } = useContext(BackgroundOverlayStateContext)/*
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    if (!loaded) return;
    setBackgroundOverlay(false)
    // window.requestIdleCallback(() => setBackgroundOverlay(false));

  }, [loaded])*/

  useEffect(() => {
    if ( !backgroundOverlay )
      return;

    document.body.classList.remove('no-cursor')

    let elianto = new FontLoaded('Elianto-Regular')
    // let poppins = new FontLoaded('Poppins Black')
    let icons = new FontLoaded('shapes')

    Promise.all([elianto.load(),])
      .then(() => {
        setTimeout(() => {
            setBackgroundOverlay(false)
            // setLoaded(true)
        }, 1500)

        // setTimeout(() => {
          Promise.all([icons.load()])
              .then(() => {
                document.body.classList.add('no-cursor')
              })
        // })

      })
      .catch(console.error)

    return () => {}
  }, [])
}

export default useLoadingFonts;