import {useContext, useLayoutEffect} from 'react'
import FontLoaded from 'fontfaceobserver'
import {AppStateContext} from '../contexts/AppStateContext'
import OverlayController
  from '../components/BackgroundOverlay/OverlayController'

const useLoadingFonts = ( fontLoaded, setFontFinish ) => {

  const { events } = useContext(AppStateContext)

  useLayoutEffect(() => {
    if ( fontLoaded.get() )
      return;

    let elianto = new FontLoaded('Elianto-Regular')
    let poppins = new FontLoaded('Poppins Black')
    let icons = new FontLoaded('shapes')

    Promise.all([elianto.load(), poppins.load(), icons.load()])
      .then(() => {
        setTimeout(() => {
          OverlayController.getInstance().toggle(false , {
            duration: 800,
            delayPointsMax: 100,
            delayPerPath: 100,
          }, 1)

          fontLoaded.set(true)
          setFontFinish(true)


        }, 2000)
      })
      .catch(console.error)

    return () => {}
  }, [])
}

export default useLoadingFonts;