import { useContext, useLayoutEffect } from 'react'
import FontLoaded from 'fontfaceobserver'
import { BackgroundOverlayStateContext } from '../contexts/AppStateContext'

const useLoadingFonts = setLoading => {
  const { setBackgroundOverlay } = useContext(BackgroundOverlayStateContext)

  useLayoutEffect(() => {
    // if ( fontLoaded.get() )
    //   return;

    let elianto = new FontLoaded('Elianto-Regular')
    let poppins = new FontLoaded('Poppins Black')
    let icons = new FontLoaded('shapes')

    Promise.all([elianto.load(), poppins.load(), icons.load()])
      .then(() => {
        setTimeout(() => {
          setBackgroundOverlay(false)
          // fontLoaded.set(true)
          // setFontFinish(true)

          // queueMicrotask(() => )
        }, 1500)
      })
      .catch(console.error)

    return () => {}
  }, [])
}

export default useLoadingFonts;