import React from 'react'
import '../styles/MenuItem.css'

function Button({ label, to }) {
  return (
    <li>
      <a href={to} className="btn-menu">
        {label}
      </a>
    </li>
  )
}

export default Button