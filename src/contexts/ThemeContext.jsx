import { createContext, useContext, useState, useEffect } from 'react'

const ThemeContext = createContext()

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme debe ser usado dentro de un ThemeProvider')
  }
  return context
}

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Obtener el tema guardado en localStorage o usar el tema del sistema
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      return savedTheme === 'dark'
    }
    // Detectar preferencia del sistema
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  const toggleTheme = () => {
    setIsDarkMode(prev => !prev)
  }

  const setTheme = (theme) => {
    setIsDarkMode(theme === 'dark')
  }

  // Aplicar clase no-transition durante la carga inicial
  useEffect(() => {
    // Agregar clase para prevenir transiciones durante la carga inicial
    document.documentElement.classList.add('no-transition');
    
    // Quitar la clase después de un momento para permitir transiciones futuras
    const timeoutId = setTimeout(() => {
      document.documentElement.classList.remove('no-transition');
    }, 100);
    
    return () => clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    // Guardar el tema en localStorage
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light')
    
    // Aplicar el tema al documento
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light')
  }, [isDarkMode])

  const value = {
    isDarkMode,
    toggleTheme,
    setTheme,
    theme: isDarkMode ? 'dark' : 'light'
  }

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}