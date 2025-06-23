import './App.css'
import Menu from './components/Menu'
import heroImage from './assets/images/hero.png'
import { useTranslation } from './translations'
import CursorJellyBlob from './components/CursorJellyBlob'

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
          <button className="about-section-button">{t('download')}</button>
        </section>
      </div>
    </>
  )
}

export default App
