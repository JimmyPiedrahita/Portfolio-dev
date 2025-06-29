import React, { useState } from 'react'
import { FaGithub } from 'react-icons/fa'
import '../styles/CardProject.css'

function CardProject({ name, image, githubUrl, technologies = [] }) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="card-project"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={image} alt={name} className="card-project-image" />
      {githubUrl && (
        <a
          href={githubUrl}
          className={`github-btn${isHovered ? ' visible' : ''}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Ver proyecto ${name} en GitHub`}
        >
          <FaGithub size={28} />
        </a>
      )}
      <div className="card-project-title">
        <h3>{name}</h3>
      </div>
      <div className="card-project-technologies">
        {technologies.map((tech, idx) => (
          <span className="technology" key={idx}>{tech}</span>
        ))}
      </div>
    </div>
  )
}

export default CardProject