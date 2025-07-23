import { createContext, useContext, useState, useEffect } from 'react'

const LanguageContext = createContext()

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage debe ser usado dentro de un LanguageProvider')
  }
  return context
}

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    // Obtain the saved language from localStorage or default to Spanish
    const savedLanguage = localStorage.getItem('language')
    if (savedLanguage && ['es', 'en'].includes(savedLanguage)) {
      return savedLanguage
    }
    // Detect the browser's language
    const browserLanguage = navigator.language.split('-')[0]
    return ['es', 'en'].includes(browserLanguage) ? browserLanguage : 'es'
  })

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'es' ? 'en' : 'es')
  }

  const changeLanguage = (lang) => {
    if (['es', 'en'].includes(lang)) {
      setLanguage(lang)
    }
  }

  useEffect(() => {
    // Save the language to localStorage
    localStorage.setItem('language', language)

    // Apply the language to the document
    document.documentElement.setAttribute('data-language', language)
  }, [language])

  const value = {
    language,
    toggleLanguage,
    changeLanguage,
    isSpanish: language === 'es',
    isEnglish: language === 'en'
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
} 