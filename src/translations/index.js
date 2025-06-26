import { useLanguage } from '../hooks/useLanguage'
export const translations = {
    es: {
      // Phases
      phases: {
        phase1: 'Desarrollador de software',
        phase2: 'Arquitecto de soluciones',
        phase3: 'Diseñador de experiencias'
      },

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

      // Contact me
      contactMe: 'Mantengamonos en contacto',

      // Hero
      hello: 'Hola, soy',

      // About
      aboutDescription: {
        part1: 'Me gusta aprender haciendo',
        part2: ', suelo meterme en retos que me obligan a salir de lo básico.',
        part3: ' Soy ordenado',
        part4: ' con el código que programo y tambien en la vida, siempre',
        part5: ' planeo los desarrollos lo suficiente',
        part6: ', para que me represente de la mejor manera. Además de programar',
        part7: ' tengo formación en metodologías ágiles',
        part8: ', tengo habilidades fuertes en ',
        part9: 'liderazgo y comunicación.',
        part10: ' Estoy en constante crecimiento personal y tecnico, me gusta que se valore las ideas frescas.'
      }
    },
    en: {
        // Phases
        phases: {
          phase1: 'Software developer',
          phase2: 'Solutions architect',
          phase3: 'Experience designer'
        },

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
        hello: 'Hello, I\'m',

        // Contact me
        contactMe: 'Let\'s keep in contact',

        // About
        aboutDescription: {
          part1: 'I like to learn by doing',
          part2: ', I tend to get involved in challenges that force me to go beyond the basics.',
          part3: ' I am orderly',
          part4: ' with the code I program and also in life, always',
          part5: ' plan the developments sufficiently',
          part6: ', so that I represent the best way. In addition to programming',
          part7: ' I have training in agile methodologies',
          part8: ', I have strong',
          part9: ' leadership and communication skills.',
          part10: ' I am constantly growing personally and technically, I like to value fresh ideas.'
        }
      }
  }
  
  // Función helper para obtener traducciones
  export const t = (key, language = 'es', params = {}) => {
    // Soporte para claves anidadas usando notación de puntos
    const keys = key.split('.')
    let translation = translations[language]
    for (const k of keys) {
      translation = translation?.[k]
      if (translation === undefined) return key
    }
    if (typeof translation !== 'string') return key
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