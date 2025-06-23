import { useLanguage } from '../hooks/useLanguage'
import '../styles/LanguageToggle.css'

const LanguageToggle = () => {
  const { toggleLanguage, isSpanish } = useLanguage()

  return (
    <button
      onClick={toggleLanguage} className="language-toggle">
      {isSpanish ? 'EN' : 'ES'}
    </button>
  )
}

export default LanguageToggle 