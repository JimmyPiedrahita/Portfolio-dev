import { useTheme } from '../hooks/useTheme'
import '../styles/ThemeToggle.css'
import "@theme-toggles/react/css/InnerMoon.css"
import { InnerMoon } from "@theme-toggles/react"

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme()

  return (
    <InnerMoon duration={750} toggled={!isDarkMode} toggle={toggleTheme} />
  )
}

export default ThemeToggle
