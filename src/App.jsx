import './App.css'
import Menu from './components/Menu'
import heroImage from './assets/images/hero.png'
import { useTranslation } from './translations'

function App() {
  const { t } = useTranslation()
  return (
    <>
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
        <section id="about" style={{height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <h2>About</h2>
        </section>
        <section id="skills" style={{height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <h2>Skills</h2>
        </section>
        <section id="projects" style={{height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <h2>Projects</h2>
        </section>
        <section id="contact" style={{height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <h2>Contact</h2>
        </section>
      </div>
    </>
  )
}

export default App
