import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { FaExternalLinkAlt } from 'react-icons/fa'
import '../styles/CardProject.css'

function CardProject({ name, image, githubUrl, siteUrl, description, technologies = [] }) {
  return (
    <div className="card-project">
      <img src={image} alt={name} className="card-project-image" />
      <div className="card-project-content">
        <h3 className="card-project-title">{name}</h3>
        <p className="card-project-description">{description}</p>
        <div className="card-project-footer">
          <div className="card-project-technologies">
            {technologies.map((tech, idx) => (
              <span className="technology" key={idx}>{tech}</span>
            ))}
          </div>
          <div className="card-project-buttons">
            {githubUrl && githubUrl !== '#' && githubUrl !== '' && (
              <a
                href={githubUrl}
                className="project-btn github-btn"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Ver proyecto ${name} en GitHub`}
              >
                <FaGithub size={20} />
              </a>
            )}
            {siteUrl && siteUrl !== '#' && siteUrl !== '' && (
              <a
                href={siteUrl}
                className="project-btn site-btn"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visitar sitio web de ${name}`}
              >
                <FaExternalLinkAlt size={18} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardProject