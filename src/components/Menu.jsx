import React, { useEffect, useState } from 'react'
import '../styles/Menu.css'
import MenuItem from './MenuItem'
import ThemeToggle from './ThemeToggle'
import LanguageToggle from './LanguageToogle'
import { useTranslation } from '../translations'

const Menu = () => {
  const { t } = useTranslation()
  const [isFixed, setIsFixed] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsFixed(true)
      } else {
        setIsFixed(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`menu-container${isFixed ? ' fixed' : ''}`}>
      <ul className="menu-list">
        <MenuItem label={t('home')} to="#home" />
        <MenuItem label={t('about')} to="#about" />
        <MenuItem label={t('skills')} to="#skills" />
        <MenuItem label={t('projects')} to="#projects" />
        <MenuItem label={t('contact')} to="#contact" />
        <LanguageToggle />
        <ThemeToggle />
      </ul>
    </nav>
  )
}

export default Menu
