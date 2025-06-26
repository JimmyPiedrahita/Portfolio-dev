import React from 'react'
import '../styles/MenuItem.css'

function Button({ label, to, active, onClick }) {
  const handleClick = (e) => {
    e.preventDefault();
    if (to === '#home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const id = to.replace('#', '');
      const section = document.getElementById(id);
      if (section) {
        const sectionRect = section.getBoundingClientRect();
        const absoluteElementTop = sectionRect.top + window.pageYOffset;
        const middle = absoluteElementTop - (window.innerHeight / 2) + (sectionRect.height / 2);
        window.scrollTo({ top: middle, behavior: 'smooth' });
      }
    }
    // Cerrar el menú si hay una función onClick
    if (onClick) onClick();
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