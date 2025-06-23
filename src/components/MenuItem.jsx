import React from 'react'
import '../styles/MenuItem.css'

function Button({ label, to, active }) {
  const handleClick = (e) => {
    if (to === '#home') {
      e.preventDefault()
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }
  return (
    <li>
      <a
        href={to}
        className={`btn-menu${active ? ' active' : ''}`}
        onClick={handleClick}
      >
        {label}
      </a>
    </li>
  )
}

export default Button