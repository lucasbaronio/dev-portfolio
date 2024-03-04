import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: {
      en: {
        translation: {
          myName: 'Lucas Baronio',
          hello: {
            tab: '_hello',
            subtitle: 'Hi all. I am',
            career: 'Software Engineer Fullstack',
            badge: 'Working for PedidosYa',
          },
          about: {
            tab: '_about-me',
            sideBar: {
              personalInfo: '',
              bio: 'bio',
              aBitAboutMe: '_a-bit-about-me',
              experience: 'experience',
              fullstack: '_fullstack',
              devops: '_devops',
              skills: 'skills',
              techStack: '_tech-stack',
              tools: '_tools',
              education: 'education',
              university: '_university',
              highSchool: '_high-school',
              interests: '_interests',
            },
            aboutMe: {
              title: 'A bit about me',
              description: {
                part1:
                  'I am a technology enthusiast from a very young age, and my passion for the tech world has been a driving force throughout my career. I initially began my journey in the realm of DevOps but soon realized that my true calling lay in the world of programming.',
                part2:
                  'With a degree in Software Engineering, I am dedicated to crafting high-quality and scalable web applications that not only meet user needs but also create a significant impact. My goal is to continually provide value to users through innovative and impactful web solutions.',
              },
            },
            myExperience: {
              title: 'My experience',
              description: 'description',
              timeline: [
                {
                  company: 'PedidosYa',
                  tag: 'Latest',
                  date: 'Oct. 2021 - Today',
                  position: 'Software Engineer Fullstack',
                  description:
                    'Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.',
                  icon: 'CODE',
                },
                {
                  company: 'FletesApp',
                  date: 'Feb. 2021 - Jul. 2021',
                  position: 'Freelance software developer',
                  description:
                    'As a freelancer, I was able to carry out a project with another colleague for a client that needed a mobile application whose objective was to connect freight drivers with people who need their services. The App was implemented using React Native as the client-level language and Goland in the backend.',
                  icon: 'CAR',
                },
                {
                  company: 'KnowHow Uy',
                  date: 'Ago. 2015 - Sep. 2021',
                  position: 'DevOps',
                  description:
                    'In the more than 6 years working in the company, I was performing tasks as DBA/DevOps for more than 40 clients from all over Latin America. Improving and streamlining installation, configuration and monitoring tasks of database engines such as: MySQL, PostgreSQL, MongoDB, Oracle, SQL Server and Redis.',
                  icon: 'DATABASE',
                },
              ],
            },
            myTechStack: {
              title: 'My Tech Stack',
              description: "Technologies I've been working with recently",
            },
            tools: {
              title: 'Tools',
              description: "Technologies I've been working with recently",
            },
            myEducation: {
              title: 'My education',
              description: 'description',
              timeline1: {
                university: 'ORT Uruguay University',
                years: '2013 - 2019',
                title: 'Software Engineer',
                description: 'Get started with dozens of web components and interactive elements.',
              },
              timeline2: {
                university: 'ORT Uruguay University',
                years: '2013 - 2017',
                title: 'Software Engineer Assistant',
                description: 'Get started with dozens of web components and interactive elements.',
              },
              timeline3: {
                university: 'Juan Zorrilla de San Martin High School',
                years: '1006 - 2012',
                description: 'Get started with dozens of web components and interactive elements.',
              },
            },
          },
          projects: {
            tab: '_projects',
            myProjects: {
              title: 'My projects',
              description:
                'During my career as a software developer I have been able to implement some short- to long-range projects. Each of these projects has been an opportunity to apply my technical and creative skills. Below, I present a list of them.',
              projects: [
                {
                  title: 'Snake Game',
                  subtitle: "The best snake game you've ever tried",
                  description:
                    'Experience the nostalgia of the classic Snake game made with well-known languages ​​such as HTML and javascript',
                  desktopImg: 'SNAKE_GAME_DESKTOP',
                  mobileImg: 'SNAKE_GAME_MOBILE',
                  deployURL: 'https://snake-game-cl9o9zkag-lucasbaronio.vercel.app/',
                  projectURL: 'https://github.com/lucasbaronio/snake-game',
                },
                {
                  title: 'Snake Game',
                  subtitle: "The best snake game you've ever tried",
                  description:
                    'Experience the nostalgia of the classic Snake game made with well-known languages ​​such as HTML and javascript',
                  desktopImg: 'SNAKE_GAME_DESKTOP',
                  mobileImg: 'SNAKE_GAME_MOBILE',
                  deployURL: 'https://snake-game-cl9o9zkag-lucasbaronio.vercel.app/',
                  projectURL: 'https://github.com/lucasbaronio/snake-game',
                },
                {
                  title: 'Snake Game',
                  subtitle: "The best snake game you've ever tried",
                  description:
                    'Experience the nostalgia of the classic Snake game made with well-known languages ​​such as HTML and javascript',
                  desktopImg: 'SNAKE_GAME_DESKTOP',
                  mobileImg: 'SNAKE_GAME_MOBILE',
                  deployURL: 'https://snake-game-cl9o9zkag-lucasbaronio.vercel.app/',
                  projectURL: 'https://github.com/lucasbaronio/snake-game',
                },
                {
                  title: 'Snake Game',
                  subtitle: "The best snake game you've ever tried",
                  description:
                    'Experience the nostalgia of the classic Snake game made with well-known languages ​​such as HTML and javascript',
                  desktopImg: 'SNAKE_GAME_DESKTOP',
                  mobileImg: 'SNAKE_GAME_MOBILE',
                  deployURL: 'https://snake-game-cl9o9zkag-lucasbaronio.vercel.app/',
                  projectURL: 'https://github.com/lucasbaronio/snake-game',
                },
              ],
            },
            githubContributions: {
              title: 'Github contributions',
              description:
                'These are some of my contributions on Github on a personal level and working for companies',
              info: 'contributions in the last year',
              less: 'Less',
              more: 'More',
            },
          },
          contact: {
            tab: '_contact-me',
            title: "Let's Talk!",
            inputs: {
              name: {
                label: '_name',
                required: 'This field is required',
                maxLength: 'El nombre y apellido no puede tener más de 100 caracteres.',
              },
              email: {
                label: '_email',
                required: 'This field is required',
                valid: 'Please enter a correct email',
                maxLength: 'Email cannot be longer than 100 characters.',
              },
              message: {
                label: '_message',
                required: 'This field is required',
                maxLength: 'Message cannot be longer than 200 characters.',
              },
              submit: {
                label: 'submit-message',
              },
            },
            toast: {
              success: 'Message sent successfully',
              error: 'An error occurred while sending the message',
            },
          },
          footer: {
            branch: 'main',
            findMeIn: 'find me in:',
            madeWith: 'Made with',
            github: 'lucasbaronio',
          },
        },
      },
      es: {
        translation: {
          myName: 'Lucas Baronio',
          hello: {
            tab: '_hola',
            subtitle: 'Hola a todos. Soy',
            career: 'Ingeniero de Software Fullstack',
            badge: 'Trabajando para PedidosYa',
          },
          about: {
            tab: '_acerca-de-mi',
            sideBar: {
              bio: 'biografía',
              aBitAboutMe: '_sobre-mi',
              experience: 'experiencia',
              fullstack: '_fullstack',
              devops: '_devops',
              skills: 'habilidades',
              techStack: '_tecnologías',
              tools: '_herramientas',
              education: 'educación',
              university: '_universidad',
              highSchool: '_bachillerato',
              interests: '_intereses',
            },
            aboutMe: {
              title: 'Un poco sobre mi',
              description: {
                part1:
                  'Soy un entusiasta de la tecnología desde muy joven y mi pasión por el mundo de la tecnología ha sido un motor a lo largo de mi carrera. Inicialmente comencé mi viaje en el ámbito de DevOps, pero pronto me di cuenta de que mi verdadera vocación residía en el mundo de la programación.',
                part2:
                  'Licenciado en Ingeniería de Software, me dedico a crear aplicaciones web escalables y de alta calidad que no solo satisfagan las necesidades del usuario sino que también generen un impacto significativo. Mi objetivo es brindar valor continuamente a los usuarios a través de soluciones web innovadoras e impactantes.',
              },
            },
            myExperience: {
              title: 'Mi experiencia',
              description: 'descripción',
              timeline: [
                {
                  company: 'PedidosYa',
                  tag: 'Último',
                  date: 'Oct. 2021 - Today',
                  position: 'Software Engineer Fullstack',
                  description:
                    'Obtenga acceso a más de 20 páginas, incluido un diseño de panel, gráficos, tablero kanban, calendario y páginas de marketing y comercio electrónico para pedidos anticipados.',
                  icon: 'CODE',
                },
                {
                  company: 'FletesApp',
                  date: 'Feb. 2021 - Jul. 2021',
                  position: 'Desarrollador de software independiente',
                  description:
                    'Como freelance, pude llevar a cabo con otro compañero un proyecto para un cliente que necesitaba una aplicación mobile cuyo objetivo era conectar fleteros con personas que necesitan sus servicios. La App se implementó utilizando React Native como lenguaje a nivel cliente y Goland en el backend.',
                  icon: 'CAR',
                },
                {
                  company: 'KnowHow Uy',
                  date: 'Ago. 2015 - Sep. 2021',
                  position: 'DevOps',
                  description:
                    'En los mas de 6 años trabajando en la empresa, estuve desempeñando tareas como DBA/DevOps para mas de 40 clientes de todo Latinoamérica. Mejorando y agilizando tareas de instalación, configuración y monitoreo de motores de base de datos tales como: MySQL, PostgreSQL, MongoDB, Oracle, SQL Server y Redis.',
                  icon: 'DATABASE',
                },
              ],
            },
            myTechStack: {
              title: 'Mis conocimiento tecnológico',
              description: 'con las que he estado trabajando recientemente',
            },
            tools: {
              title: 'Herramientas',
              description: 'con las que he estado trabajando recientemente',
            },
            myEducation: {
              title: 'Mi educación',
              description: 'descripción',
              timeline1: {
                university: 'Universidad ORT Uruguay',
                years: '2013 - 2019',
                title: 'Ingeniero en Sistemas',
                description: 'Comience con docenas de componentes web y elementos interactivos.',
              },
              timeline2: {
                university: 'Universidad ORT Uruguay',
                years: '2013 - 2017',
                title: 'Asistente de Ingeniero en Sistemas',
                description: 'Comience con docenas de componentes web y elementos interactivos.',
              },
              timeline3: {
                university: 'Colegio Juan Zorrilla de San Martin',
                years: '1006 - 2012',
                description: 'Comience con docenas de componentes web y elementos interactivos.',
              },
            },
          },
          projects: {
            tab: '_proyectos',
            myProjects: {
              title: 'My projects',
              description:
                'Durante mi trayectoria como desarrollador de software he podido implementar algunos proyectos de corto a largo alcance. Cada uno de estos proyectos ha sido una oportunidad para aplicar mis habilidades técnicas y creativas. A continuación, les presento una lista de los mismos.',
              projects: [
                {
                  title: 'La viborita',
                  subtitle: 'El mejor juego de la viborita que hayas jugado',
                  description:
                    'Experimenta la nostalgia del clásico juego de Snake realizado con lenguajes mas que conocidos como son HTML y javascript',
                  desktopImg: 'SNAKE_GAME_DESKTOP',
                  mobileImg: 'SNAKE_GAME_MOBILE',
                  deployURL: 'https://snake-game-cl9o9zkag-lucasbaronio.vercel.app/',
                  projectURL: 'https://github.com/lucasbaronio/snake-game',
                },
                {
                  title: 'La viborita',
                  subtitle: 'El mejor juego de la viborita que hayas jugado',
                  description:
                    'Experimenta la nostalgia del clásico juego de Snake realizado con lenguajes mas que conocidos como son HTML y javascript',
                  desktopImg: 'SNAKE_GAME_DESKTOP',
                  mobileImg: 'SNAKE_GAME_MOBILE',
                  deployURL: 'https://snake-game-cl9o9zkag-lucasbaronio.vercel.app/',
                  projectURL: 'https://github.com/lucasbaronio/snake-game',
                },
                {
                  title: 'La viborita',
                  subtitle: 'El mejor juego de la viborita que hayas jugado',
                  description:
                    'Experimenta la nostalgia del clásico juego de Snake realizado con lenguajes mas que conocidos como son HTML y javascript',
                  desktopImg: 'SNAKE_GAME_DESKTOP',
                  mobileImg: 'SNAKE_GAME_MOBILE',
                  deployURL: 'https://snake-game-cl9o9zkag-lucasbaronio.vercel.app/',
                  projectURL: 'https://github.com/lucasbaronio/snake-game',
                },
                {
                  title: 'La viborita',
                  subtitle: 'El mejor juego de la viborita que hayas jugado',
                  description:
                    'Experimenta la nostalgia del clásico juego de Snake realizado con lenguajes mas que conocidos como son HTML y javascript',
                  desktopImg: 'SNAKE_GAME_DESKTOP',
                  mobileImg: 'SNAKE_GAME_MOBILE',
                  deployURL: 'https://snake-game-cl9o9zkag-lucasbaronio.vercel.app/',
                  projectURL: 'https://github.com/lucasbaronio/snake-game',
                },
              ],
            },
            githubContributions: {
              title: 'Contribuciones en Github',
              description:
                'Estas son algunas de mis contribuciones en Github a nivel personal y trabajando para empresas',
              info: 'contribuciones en el último año',
              less: 'Menos',
              more: 'Más',
            },
          },
          contact: {
            tab: '_contacto',
            title: 'Hablemos!',
            inputs: {
              name: {
                label: '_nombre',
                required: 'Este campo es requerido',
                maxLength: 'El nombre y apellido no puede tener más de 100 caracteres.',
              },
              email: {
                label: '_correo-electrónico',
                required: 'Este campo es requerido',
                valid: 'Por favor, ingrese un correo electrónico correcto',
                maxLength: 'El correo electrónico no puede tener más de 100 caracteres.',
              },
              message: {
                label: '_mensaje',
                required: 'Este campo es requerido',
                maxLength: 'El mensaje no puede tener más de 200 caracteres.',
              },
              submit: {
                label: 'enviar-mensaje',
              },
            },
            toast: {
              success: 'Mensaje enviado correctamente',
              error: 'Ocurrió un error al enviar el mensaje',
            },
          },
          footer: {
            branch: 'master',
            findMeIn: 'me encontrás:',
            madeWith: 'Hecho con',
            github: 'lucasbaronio',
          },
        },
      },
    },

    debug: true,
    fallbackLng: 'en',

    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
  });

export default i18n;
