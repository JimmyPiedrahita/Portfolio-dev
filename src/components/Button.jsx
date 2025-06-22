import React from 'react'
import '../styles/Button.css'

function Button({ children, onClick, className }) {
  return (
    <button className={`button ${className}`} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button