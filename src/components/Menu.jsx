import React from 'react'
import '../styles/Menu.css'
import Button from './Button'
import ThemeToggle from './ThemeToggle'
import LanguageToggle from './LanguageToogle'
import { useTranslation } from '../translations'

const Menu = () => {
  const { t } = useTranslation()
  return (
    <nav className="menu-container">
      <Button children={t('home')} onClick={() => {}} className="menu-btn" />
      <Button children={t('about')} onClick={() => {}} className="menu-btn" />
      <Button children={t('skills')} onClick={() => {}} className="menu-btn" />
      <Button children={t('projects')} onClick={() => {}} className="menu-btn" />
      <Button children={t('contact')} onClick={() => {}} className="menu-btn" />
      <LanguageToggle />
      <ThemeToggle />
    </nav>
  )
}

export default Menu
