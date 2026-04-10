import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Componente da inserire in App.jsx — torna in cima ad ogni cambio di pagina
const ScrollToTop = () => {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])
  return null
}

export default ScrollToTop
