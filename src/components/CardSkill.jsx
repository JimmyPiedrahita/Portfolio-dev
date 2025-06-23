import React, { useState } from 'react'
import '../styles/CardSkill.css'

function CardSkill({ title, icon }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`card-skill${isHovered ? ' card-skill--hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="card-skill-content">
        <h4>{title}</h4>
        <img src={icon} alt={title} />
      </div>
    </div>
  )
}

export default CardSkill