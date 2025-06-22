import React from 'react'
import '../styles/Menu.css'
import Button from './Button'
import ThemeToggle from './ThemeToggle'

const Menu = () => {
  return (
    <nav className="menu-container">
      <Button children="Home" onClick={() => {}} className="menu-btn" />
      <Button children="Services" onClick={() => {}} className="menu-btn" />
      <Button children="About" onClick={() => {}} className="menu-btn" />
      <Button children="Contact" onClick={() => {}} className="menu-btn" />
      <Button children="EN" onClick={() => {}} className="custom" />
      <ThemeToggle />
    </nav>
  )
}

export default Menu
