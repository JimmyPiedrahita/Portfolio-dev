import './App.css'
import Menu from './components/Menu'
import LaptopModel from './components/LaptopModel'
import { useTranslation } from './translations'
import CursorJellyBlob from './components/CursorJellyBlob'
import CardSkill from './components/CardSkill'
import ReactLogo from './assets/icons/react.svg'
import FirebaseLogo from './assets/icons/firebase.svg'
import KotlinLogo from './assets/icons/kotlin.svg'
import SprintBootLogo from './assets/icons/spring-boot.svg'
import PostgresLogo from './assets/icons/postgres.svg'
import FigmaLogo from './assets/icons/figma.svg'
import UnityLogo from './assets/icons/unity.svg'
import AndroidLogo from './assets/icons/android-studio.svg'
import GitLogo from './assets/icons/git.svg'
import GithubLogo from './assets/icons/github.svg'
import JavaLogo from './assets/icons/java.svg'
import CSharpLogo from './assets/icons/csharp.svg'
import PhpLogo from './assets/icons/php.svg'
import MySqlLogo from './assets/icons/mysql.svg'
import TrelloLogo from './assets/icons/trello.svg'
import { MdDownload } from 'react-icons/md'
import { FaFacebook, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import CardProject from './components/CardProject'
import Work1 from './assets/images/work1.png'
import Work2 from './assets/images/work2.png'
import Work3 from './assets/images/work3.png'
import { useState } from 'react'
import ContactForm from './components/ContactForm'

function App() {
  const { t } = useTranslation()
  // Definir proyectos con categoría
  const projects = [
    {
      image: Work1,
      name: 'SkecthVibes',
      technologies: ['PHP', 'MySql'],
      githubUrl: 'https://github.com/JimmyPiedrahita/SketchVibes',
      category: 'web',
    },
    {
      image: Work2,
      name: 'Frutastic Shoot',
      technologies: ['C#', 'Unity'],
      githubUrl: 'https://github.com/JimmyPiedrahita/frutastic-shoot',
      category: 'videogames',
    },
    {
      image: Work3,
      name: 'ReportApp',
      technologies: ['Java', 'Android Studio'],
      githubUrl: 'https://github.com/JimmyPiedrahita/Report_App',
      category: 'mobile',
    },
  ];
  // Estado para el filtro
  const [selectedCategory, setSelectedCategory] = useState('all');
  // Filtrar proyectos
  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(p => p.category === selectedCategory);
  return (
    <>
      <CursorJellyBlob />
      <Menu />
      <div className="main-container">
        <section id="home" className="hero-section">
          <div className="hero-section-content">
            <div className="greeting">
              <p>{t('hello')}</p>
            </div>
            <h1>Jimmy Piedrahita</h1>
            <h3>SOFTWARE DEVELOPER |</h3>
          </div>
          <LaptopModel />
        </section>
        <section id='about' className="about-section" >
          <h1 className="about-section-title">{t('about')}</h1>
          <p className="about-section-description">
            <span className="highlight-description">{t('aboutDescription.part1')}</span>
            <span>{t('aboutDescription.part2')}</span>
            <span className="highlight-description">{t('aboutDescription.part3')}</span>
            <span>{t('aboutDescription.part4')}</span>
            <span className="highlight-description">{t('aboutDescription.part5')}</span>
            <span>{t('aboutDescription.part6')}</span>
            <span className="highlight-description">{t('aboutDescription.part7')}</span>
            <span>{t('aboutDescription.part8')}</span>
            <span className="highlight-description">{t('aboutDescription.part9')}</span>
            <span>{t('aboutDescription.part10')}</span>
          </p>
          <button className="about-section-button">
            <MdDownload style={{ marginRight: '8px', verticalAlign: 'middle' }} />
            {t('download')}
          </button>
        </section>
        <section id='skills' className="skills-section">
          <h1 className="skills-section-title">{t('skills')}</h1>
          <div className="skills-container-cards">
            <CardSkill title="Kotlin" icon={KotlinLogo} />
            <CardSkill title="Java" icon={JavaLogo} />
            <CardSkill title="PHP" icon={PhpLogo} />
            <CardSkill title="C#" icon={CSharpLogo} />
            <CardSkill title="PostgreSQL" icon={PostgresLogo} />
            <CardSkill title="MySql" icon={MySqlLogo} />
            <CardSkill title="Firebase" icon={FirebaseLogo} />
            <CardSkill title="React" icon={ReactLogo} />
            <CardSkill title="Spring Boot" icon={SprintBootLogo} />
            <CardSkill title="Android Studio" icon={AndroidLogo} />
            <CardSkill title="Figma" icon={FigmaLogo} />
            <CardSkill title="Unity" icon={UnityLogo} />
            <CardSkill title="Git" icon={GitLogo} />
            <CardSkill title="GitHub" icon={GithubLogo} />
            <CardSkill title="Trello" icon={TrelloLogo} />
          </div>
        </section>
        <section id='projects' className="projects-section">
          <h1 className="projects-section-title">{t('projects')}</h1>
          <div className='menu-projects'>
            <button
              className={`menu-projects-button${selectedCategory === 'all' ? ' active' : ''}`}
              onClick={() => setSelectedCategory('all')}
            >
              {t('all')}
            </button>
            <button
              className={`menu-projects-button${selectedCategory === 'mobile' ? ' active' : ''}`}
              onClick={() => setSelectedCategory('mobile')}
            >
              {t('mobile')}
            </button>
            <button
              className={`menu-projects-button${selectedCategory === 'web' ? ' active' : ''}`}
              onClick={() => setSelectedCategory('web')}
            >
              {t('web')}
            </button>
            <button
              className={`menu-projects-button${selectedCategory === 'videogames' ? ' active' : ''}`}
              onClick={() => setSelectedCategory('videogames')}
            >
              {t('videogames')}
            </button>
          </div>
          <div className='projects-container'>
            {filteredProjects.map((project, idx) => (
              <CardProject
                key={project.name}
                image={project.image}
                name={project.name}
                technologies={project.technologies}
                githubUrl={project.githubUrl}
              />
            ))}
          </div>
        </section>
        <section id='contact' className="contact-section">
          <h1 className="contact-section-title">{t('contactMe')}</h1>
          <div className='contact-container'>
            <div className='container-social-media'>
              <a className='social-icon' target='_blank' href="https://www.facebook.com/JAPB2002">
                <FaFacebook size={32} />
              </a>
              <a className='social-icon' target='_blank' href="https://www.instagram.com/jimmy_ap7">
                <FaInstagram size={32} />
              </a>
              <a className='social-icon' target='_blank' href="https://github.com/JimmyPiedrahita">
                <FaGithub size={32} />
              </a>
              <a className='social-icon' target='_blank' href="https://www.linkedin.com/in/jimmypiedrahita">
                <FaLinkedin size={32} />
              </a>
              <a className='social-icon' target='_blank' href="mailto:jimmy22piedrahita@gmail.com">
                <MdEmail size={32} />
              </a>
            </div>
            <ContactForm />
          </div>
        </section>
      </div>
    </>
  )
}

export default App
