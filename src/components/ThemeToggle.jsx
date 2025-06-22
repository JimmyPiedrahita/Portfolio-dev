import React from 'react'
import { useTheme } from '../hooks/useTheme'
import '../styles/ThemeToggle.css'
import { FaSun, FaMoon } from 'react-icons/fa'

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme()

  return (
    <button onClick={toggleTheme}>
      {isDarkMode
        ? <FaSun size={28} className="icon-theme" />
        : <FaMoon size={28} className="icon-theme" />}
    </button>
  )
}

export default ThemeToggle
