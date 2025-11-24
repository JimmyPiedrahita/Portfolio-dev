import { useLanguage } from '../hooks/useLanguage'
export const translations = {
    es: {
      // Frases
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
      sending: 'Enviando...',
      sent: 'Enviado',
      error: 'Error',
      download: 'Descargar CV',
      language: 'ES',
      all: 'Todos',
      web: 'Web',
      mobile: 'Movil',
      videogames: 'Videojuegos',
      openMenu: 'Abrir menú',
      closeMenu: 'Cerrar menú',
      
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

      // Contactame
      contactMe: 'Mantengámonos en contacto',

      // Saludo
      hello: 'Hola, soy',

      // Titulo
      tittleAbout: 'Sobre mi',

      // Efecto de éxito del formulario
      formSuccess: '¡Formulario enviado correctamente!',

      // Sobre mi
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
      },

      // Descripciones de proyectos
      projectDescriptions: {
        uniScan: 'Aplicación para visualizar y gestionar horarios de salones por medio de códigos QR.',
        reportApp: 'Aplicación para reportar y gestionar problemas en computadores de salas informáticas.',
        filterProtector: 'Filtro protector de luz azul para telefonos android.',
        paintChat: 'Red social para compartirse dibujos en tiempo real a modo de chat.',
        sketchVibes: 'Plataforma web para exponer dibujos personales.',
        frutasticShoot: 'Juego 2D para el aprender vocabulario sobre frutas por medio de audios.'
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
        sending: 'Sending...',
        sent: 'Sent',
        error: 'Error',
        download: 'Download CV',
        language: 'EN',
        all: 'All',
        web: 'Web',
        mobile: 'Mobile',
        videogames: 'Videogames',
        openMenu: 'Open menu',
        closeMenu: 'Close menu',
        
        // Themes
        lightMode: 'Light Mode',
        darkMode: 'Dark Mode',
        
        // Forms
        name: 'Name',
        email: 'Email',
        message: 'Message',
        
        // Placeholders
        enterName: 'Enter your name',
        enterEmail: 'Enter your email',
        enterMessage: 'Enter your message',

        // Hero
        hello: 'Hello, I\'m',

        // Tittle
        tittleAbout: 'About me',

        // Form success effect
        formSuccess: 'Form submitted successfully!',

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
        },

        // Project descriptions
        projectDescriptions: {
          uniScan: 'Application to view and manage classroom schedules using QR codes.',
          reportApp: 'Application to report and manage issues on computers in computer labs.',
          filterProtector: 'Blue light filter for Android phones.',
          paintChat: 'Social network for sharing drawings in real time as a chat.',
          sketchVibes: 'Web platform for showcasing personal drawings.',
          frutasticShoot: '2D game for learning vocabulary about fruits through audio.'
        }
      }
  }
  
  // Helper function to get translations
  export const t = (key, language = 'es', params = {}) => {
    const keys = key.split('.')
    let translation = translations[language]
    for (const k of keys) {
      translation = translation?.[k]
      if (translation === undefined) return key
    }
    if (typeof translation !== 'string') return key
    return translation.replace(/\{(\w+)\}/g, (match, param) => {
      return params[param] || match
    })
  }

  // Hook personalized for translations
  export const useTranslation = () => {
    const { language } = useLanguage()
    return {
      t: (key, params = {}) => t(key, language, params),
      language
    }
  }