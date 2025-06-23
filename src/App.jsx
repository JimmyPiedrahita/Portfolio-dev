import './App.css'
import Menu from './components/Menu'
import heroImage from './assets/images/hero.png'
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
import TrelloLogo from './assets/icons/trello.svg'
import { MdDownload } from 'react-icons/md'



function App() {
  const { t } = useTranslation()
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
          <img src={heroImage} alt="hero" />
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
            <CardSkill title="React" icon={ReactLogo} />
            <CardSkill title="Firebase" icon={FirebaseLogo} />
            <CardSkill title="Kotlin" icon={KotlinLogo} />
            <CardSkill title="Spring Boot" icon={SprintBootLogo} />
            <CardSkill title="PostgreSQL" icon={PostgresLogo} />
            <CardSkill title="Figma" icon={FigmaLogo} />
            <CardSkill title="Unity" icon={UnityLogo} />
            <CardSkill title="Android Studio" icon={AndroidLogo} />
            <CardSkill title="Git" icon={GitLogo} />
            <CardSkill title="GitHub" icon={GithubLogo} />
            <CardSkill title="Trello" icon={TrelloLogo} />
          </div>
        </section>
      </div>
    </>
  )
}

export default App
