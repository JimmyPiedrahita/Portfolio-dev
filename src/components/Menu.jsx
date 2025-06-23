import React, { useEffect, useState, useRef } from 'react'
import '../styles/Menu.css'
import MenuItem from './MenuItem'
import ThemeToggle from './ThemeToggle'
import LanguageToggle from './LanguageToogle'
import { useTranslation } from '../translations'

const sections = [
  { id: 'home', labelKey: 'home' },
  { id: 'about', labelKey: 'about' },
  { id: 'skills', labelKey: 'skills' },
  { id: 'projects', labelKey: 'projects' },
  { id: 'contact', labelKey: 'contact' },
]

const Menu = () => {
  const { t } = useTranslation()
  const [isFixed, setIsFixed] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const observerRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsFixed(true)
      } else {
        setIsFixed(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const sectionElements = sections.map(s => document.getElementById(s.id)).filter(Boolean)
    if (observerRef.current) {
      observerRef.current.disconnect()
    }
    let prevRatio = 0
    observerRef.current = new window.IntersectionObserver(
      (entries) => {
        // Ordenar por el ratio de intersección y top
        const visible = entries
          .filter(e => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio || a.boundingClientRect.top - b.boundingClientRect.top)
        if (visible.length > 0) {
          setActiveSection(visible[0].target.id)
        }
      },
      {
        root: null,
        rootMargin: '0px 0px -60% 0px', // activa cuando la sección está en la parte superior
        threshold: [0.2, 0.5, 0.8],
      }
    )
    sectionElements.forEach(el => observerRef.current.observe(el))
    return () => {
      if (observerRef.current) observerRef.current.disconnect()
    }
  }, [])

  return (
    <nav className={`menu-container${isFixed ? ' fixed' : ''}`}>
      <ul className="menu-list">
        {sections.map(section => (
          <MenuItem
            key={section.id}
            label={t(section.labelKey)}
            to={`#${section.id}`}
            active={activeSection === section.id}
          />
        ))}
        <LanguageToggle />
        <ThemeToggle />
      </ul>
    </nav>
  )
}

export default Menu
