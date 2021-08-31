import {useContext, useLayoutEffect} from 'react'
import FontLoaded from 'fontfaceobserver'
import {AppStateContext} from '../contexts/AppStateContext'

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
          fontLoaded.set(true)
          setFontFinish(true)
        }, 0)
      })
      .catch(console.error)

    return () => {}
  }, [])
}

export default useLoadingFonts;