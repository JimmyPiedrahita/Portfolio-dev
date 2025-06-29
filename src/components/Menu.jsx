import React, { useEffect, useState, useRef } from 'react'
import '../styles/Menu.css'
import MenuItem from './MenuItem'
import ThemeToggle from './ThemeToggle'
import LanguageToggle from './LanguageToogle'
import { useTranslation } from '../translations'
import { FaBars, FaTimes } from 'react-icons/fa'

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
  const [menuOpen, setMenuOpen] = useState(false)
  const observerRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      // Si el menú está abierto en móvil, mantener isFixed en true
      // para evitar que desaparezca cuando se hace scroll al principio
      if (menuOpen || window.scrollY > 0) {
        setIsFixed(true)
      } else {
        setIsFixed(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [menuOpen])

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 50) {
        setActiveSection('home');
        return;
      }
      const sectionElements = sections.map(s => document.getElementById(s.id)).filter(Boolean);
      const viewportCenter = window.scrollY + window.innerHeight / 2;
      let closestSection = 'home';
      let minDistance = Infinity;
      sectionElements.forEach(section => {
        const rect = section.getBoundingClientRect();
        const sectionCenter = rect.top + window.scrollY + rect.height / 2;
        const distance = Math.abs(viewportCenter - sectionCenter);
        if (distance < minDistance) {
          minDistance = distance;
          closestSection = section.id;
        }
      });
      setActiveSection(closestSection);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }
  
  const closeMenu = () => {
    setMenuOpen(false);
  }

  return (
    <nav className={`menu-container${isFixed ? ' fixed' : ''}${menuOpen ? ' menu-open' : ''}`}>
      <div className="menu-mobile-header">
        <button className="menu-toggle-btn" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      <ul className={`menu-list${menuOpen ? ' show' : ''}`}>
        {sections.map(section => (
          <MenuItem
            key={section.id}
            label={t(section.labelKey)}
            to={`#${section.id}`}
            active={activeSection === section.id}
            onClick={closeMenu}
          />
        ))}
        <li className="toggle-list-item">
          <div className="toggle-container">
            <LanguageToggle />
            <ThemeToggle />
          </div>
        </li>
      </ul>
    </nav>
  )
}

export default Menu
