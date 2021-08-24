import {useContext, useLayoutEffect} from 'react'
import FontLoaded from 'fontfaceobserver'
import {AppStateContext} from '../contexts/AppStateContext'

const useLoadingFonts = () => {

  const { events } = useContext(AppStateContext)

  useLayoutEffect(() => {

    events.addLoader()

    let elianto = new FontLoaded('Elianto-Regular')
    let poppins = new FontLoaded('Poppins Black')
    let icons = new FontLoaded('shapes')

    // console.log( 'path : ', path)

    Promise.all([elianto.load(), poppins.load(), icons.load()])
      .then(() => {
        events.finishLoading()
      })
      .catch(console.error)

    return () => {}
  }, [])
}

export default useLoadingFonts;