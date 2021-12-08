import {useContext, useLayoutEffect} from 'react'
import FontLoaded from 'fontfaceobserver'
import {AppStateContext} from '../contexts/AppStateContext'
import OverlayController
  from '../components/BackgroundOverlay/OverlayController'

const useLoadingFonts = ( setLoading ) => {

  const {  setBackgroundOverlay } = useContext(AppStateContext)

  useLayoutEffect(() => {
    // if ( fontLoaded.get() )
    //   return;

    let elianto = new FontLoaded('Elianto-Regular')
    let poppins = new FontLoaded('Poppins Black')
    let icons = new FontLoaded('shapes')

    Promise.all([elianto.load(), poppins.load(), icons.load()])
      .then(() => {
        setBackgroundOverlay(false)
        setTimeout(() => {

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