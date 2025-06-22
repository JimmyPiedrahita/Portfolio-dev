import { useLanguage } from '../hooks/useLanguage'
export const translations = {
    es: {
      // Navegación
      home: 'Inicio',
      about: 'Sobre mi',
      skills: 'Habilidades',
      projects: 'Proyectos',
      contact: 'Contacto',
      
      // Botones
      submit: 'Enviar',
      download: 'Descargar CV',
      language: 'ES',
      all: 'Todos',
      web: 'Web',
      mobile: 'Movil',
      videogames: 'Videojuegos',
      
      // Temas
      lightMode: 'Modo Claro',
      darkMode: 'Modo Oscuro',
      
      // Formularios
      name: 'Nombre',
      email: 'Correo electrónico',
      message: 'Mensaje',
      
      // Placeholders
      enterName: 'Ingresa tu nombre',
      enterEmail: 'Ingresa tu correo electrónico',
      enterMessage: 'Ingresa tu mensaje',

      // Hero
      hello: 'Hola, soy'
    },
    en: {
        // Navigation
        home: 'Home',
        about: 'About',
        skills: 'Skills',
        projects: 'Projects',
        contact: 'Contact',
        
        // Botones
        submit: 'Submit',
        download: 'Download CV',
        language: 'EN',
        all: 'All',
        web: 'Web',
        mobile: 'Mobile',
        videogames: 'Videogames',
        
        // Temas
        lightMode: 'Light Mode',
        darkMode: 'Dark Mode',
        
        // Formularios
        name: 'Name',
        email: 'Email',
        message: 'Message',
        
        // Placeholders
        enterName: 'Enter your name',
        enterEmail: 'Enter your email',
        enterMessage: 'Enter your message',

        // Hero
        hello: 'Hello, I\'m'
      }
  }
  
  // Función helper para obtener traducciones
  export const t = (key, language = 'es', params = {}) => {
    const translation = translations[language]?.[key] || key
    
    // Reemplazar parámetros en la traducción
    return translation.replace(/\{(\w+)\}/g, (match, param) => {
      return params[param] || match
    })
  }
  
  // Hook personalizado para traducciones
  export const useTranslation = () => {
    const { language } = useLanguage()
    
    return {
      t: (key, params = {}) => t(key, language, params),
      language
    }
  } 