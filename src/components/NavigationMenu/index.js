import React, {
  useLayoutEffect,
  useState,
  useContext,
  useCallback,
  useEffect,
} from 'react'
import { AnimatePresence } from 'framer-motion'
import NavMenu from '../NavMenu'
import { MotionValueContext } from '../../contexts/MotionStateWrapper'

export default function NavigationMenu() {
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  const { menuIsOpen: moMenuState, screenOverlayProxy } = useContext(
    MotionValueContext
  )

  useLayoutEffect(() => {
    moMenuState.onChange(v => {
      toggleMenu(v)
      setMenuIsOpen(v)
    })
  }, [])

  useEffect(() => {
    if (menuIsOpen) {
      setTimeout(() => {
        document.body.classList.add('menu_open')
      }, 1000)
    } else if (!menuIsOpen) {
      setTimeout(() => {
        document.body.classList.remove('menu_open')
      }, 1000)
    }
  }, [menuIsOpen])

  const toggleMenu = (v) => {
    if (!v)
      return setTimeout(() => {
        screenOverlayProxy.set({ state: v })
      }, 270)

    screenOverlayProxy.set({ state: v })

  }

  return (
    <AnimatePresence>
      {menuIsOpen && (
        <NavMenu closeMenu={() => moMenuState.set(!moMenuState.get())} />
      )}
    </AnimatePresence>
  )
}
