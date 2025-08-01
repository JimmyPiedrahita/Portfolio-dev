import './App.css'
import Menu from './components/Menu'
import LaptopModel from './components/LaptopModel'
import { useTranslation } from './translations'
import CursorJellyBlob from './components/CursorJellyBlob'
import CardSkill from './components/CardSkill'
import TypeWriter from './components/TypeWriter'
import './styles/TypeWriter.css'
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
import Work1 from './assets/images/project1.webp'
import Work2 from './assets/images/project2.webp'
import Work3 from './assets/images/project3.webp'
import Work4 from './assets/images/project4.webp'
import Work5 from './assets/images/project5.webp'
import Work6 from './assets/images/project6.webp'
import { useState } from 'react'
import ContactForm from './components/ContactForm'

function App() {
  const { t } = useTranslation()

  // Defined projects with categories
  const projects = [
    {
      image: Work1,
      name: 'UniScan',
      description: t('projectDescriptions.uniScan'),
      technologies: ['Java', 'Firebase', 'Android Studio'],
      githubUrl: 'https://github.com/JimmyPiedrahita/UniScan',
      siteUrl: null,
      category: 'mobile', 
    },
    {
      image: Work2,
      name: 'ReportApp',
      description: t('projectDescriptions.reportApp'),
      technologies: ['Java', 'Firebase', 'Android Studio'],
      githubUrl: 'https://github.com/JimmyPiedrahita/ReportApp',
      siteUrl: null,
      category: 'mobile',
    },
    {
      image: Work3,
      name: 'Filtro Protector',
      description: t('projectDescriptions.filterProtector'),
      technologies: ['Kotlin', 'Android Studio'],
      githubUrl: 'https://github.com/JimmyPiedrahita/filtro-protector',
      siteUrl: null,
      category: 'mobile',
    },
    {
      image: Work4,
      name: 'PaintChat',
      description: t('projectDescriptions.paintChat'),
      technologies: ['Java', 'Firebase', 'Android Studio'],
      githubUrl: 'https://github.com/JimmyPiedrahita/PaintChat',
      siteUrl: null,
      category: 'mobile',
    },
    {
      image: Work5,
      name: 'SketchVibes',
      description: t('projectDescriptions.sketchVibes'),
      technologies: ['PHP', 'MySql', 'bootstrap'],
      githubUrl: 'https://github.com/JimmyPiedrahita/SketchVibes',
      siteUrl: 'https://practicas.me/SketchVibes/public/index.php',
      category: 'web',
    },
    {
      image: Work6,
      name: 'Frutastic Shoot',
      description: t('projectDescriptions.frutasticShoot'),
      technologies: ['C#', 'Unity'],
      githubUrl: 'https://github.com/JimmyPiedrahita/frutastic-shoot',
      siteUrl: 'https://jimmypiedrahita.itch.io/frutastic-shoot',
      category: 'videogames',
    },
  ];
  const [selectedCategory, setSelectedCategory] = useState('all');
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
            <h2><TypeWriter phrases={[t('phases.phase1'), t('phases.phase2'), t('phases.phase3')]} /></h2>
          </div>
          <LaptopModel />
        </section>
        <section id='about' className="about-section" >
          <h2 className="about-section-title">{t('tittleAbout')}</h2>
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
          <a href="/documents/CV Jimmy Piedrahita - Full Stack.pdf" download className="about-section-button">
            <MdDownload className="button-icon" />
            {t('download')}
          </a>
        </section>
        <section id='skills' className="skills-section">
          <h2 className="skills-section-title">{t('skills')}</h2>
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
          <h2 className="projects-section-title">{t('projects')}</h2>
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
            {filteredProjects.map((project) => (
              <CardProject
                key={project.name}
                image={project.image}
                name={project.name}
                description={project.description}
                technologies={project.technologies}
                githubUrl={project.githubUrl}
                siteUrl={project.siteUrl}
              />
            ))}
          </div>
        </section>
        <section id='contact' className="contact-section">
          <h2 className="contact-section-title">{t('contactMe')}</h2>
          <div className='contact-container'>
            <div className='container-social-media'>
              <a className='social-icon' target='_blank' href="https://www.facebook.com/JAPB2002" aria-label="Perfil de Facebook">
                <FaFacebook size={32} />
              </a>
              <a className='social-icon' target='_blank' href="https://www.instagram.com/jimmy_ap7" aria-label="Perfil de Instagram">
                <FaInstagram size={32} />
              </a>
              <a className='social-icon' target='_blank' href="https://github.com/JimmyPiedrahita" aria-label="Perfil de GitHub">
                <FaGithub size={32} />
              </a>
              <a className='social-icon' target='_blank' href="https://www.linkedin.com/in/jimmypiedrahita" aria-label="Perfil de LinkedIn">
                <FaLinkedin size={32} />
              </a>
              <a className='social-icon' target='_blank' href="mailto:jimmy22piedrahita@gmail.com" aria-label="Enviar correo electrónico">
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
