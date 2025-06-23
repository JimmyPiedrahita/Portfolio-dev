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
        <section className="hero-section">
          <div className="hero-section-content">
            <div className="greeting">
              <p>{t('hello')}</p>
            </div>
            <h1>Jimmy Piedrahita</h1>
            <h3>SOFTWARE DEVELOPER |</h3>
          </div>
          <img src={heroImage} alt="hero" />
        </section>
        <section className="hero-section">
          <div className="hero-section-content">
            <div className="greeting">
              <p>{t('hello')}</p>
            </div>
            <h1>Jimmy Piedrahita</h1>
            <h3>SOFTWARE DEVELOPER |</h3>
          </div>
          <img src={heroImage} alt="hero" />
        </section>
        <section className="hero-section">
          <div className="hero-section-content">
            <div className="greeting">
              <p>{t('hello')}</p>
            </div>
            <h1>Jimmy Piedrahita</h1>
            <h3>SOFTWARE DEVELOPER |</h3>
          </div>
          <img src={heroImage} alt="hero" />
        </section>
        <section className="hero-section">
          <div className="hero-section-content">
            <div className="greeting">
              <p>{t('hello')}</p>
            </div>
            <h1>Jimmy Piedrahita</h1>
            <h3>SOFTWARE DEVELOPER |</h3>
          </div>
          <img src={heroImage} alt="hero" />
        </section>
      </div>
    </>
  )
}

export default App
