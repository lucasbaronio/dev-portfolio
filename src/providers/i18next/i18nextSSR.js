import i18next from 'i18next';
// import Backend from 'i18next-fs-backend';
import i18nextMiddleware from 'i18next-http-middleware';

i18next
  // .use(Backend)
  .use(i18nextMiddleware.LanguageDetector)
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
            downloadButton: 'Download CV',
          },
          about: {
            tab: '_about-me',
            sideBar: {
              personalInfo: '',
              bio: 'bio',
              aBitAboutMe: '_a-bit-about-me',
              experience: 'experience',
              pedidosYa: '_pedidos-ya',
              fletesApp: '_fletes-app',
              knowhowUy: '_knowhow-uy',
              conferences: 'conferences',
              pgkaz: '_PGKAZ',
              dbaas: '_DBaaS',
              mongoBkp: '_mongo-bkp',
              mongoWS: '_mongo-ws',
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
                  'I have been a technology enthusiast since I was young, and my passion for this field has been a driving force throughout my career. I initially started my journey in the DevOps realm, but soon realized that my true calling was in the world of programming.',
                part2:
                  'As a Software Engineer, I specialize in creating scalable, high-quality web applications that not only meet user needs but also make a significant impact. My goal is to continuously provide value to users through innovative and impactful web solutions.',
              },
            },
            myExperience: {
              title: 'My experience',
              description: '',
              timeline: [
                {
                  id: '_pedidos-ya',
                  company: 'PedidosYa',
                  tag: 'Latest',
                  date: 'Oct. 2021 - Today',
                  position: 'Software Engineer Fullstack',
                  description:
                    "PedidosYa is a food delivery company (present throughout Latin America) where 100% of its profits depend exclusively on its web platforms and mobile app. Within the company I find myself performing tasks as a web and backend developer providing services on the checkout screens and payment methods. Our main objective is to improve the user's payment experience, providing them with as many ways as possible to pay for their order in a secure way. Some data that represents the impact of my work since I have been in the company:",
                  icon: 'CODE',
                  stats: [
                    {
                      id: 1,
                      name: 'Users who made an order with at least one card',
                      value: '+18%',
                    },
                    {
                      id: 2,
                      name: 'We obtained the certificate for all our payment flows',
                      value: 'PCI',
                    },
                    { id: 3, name: 'New payment methods', value: '5' },
                  ],
                },
                {
                  id: '_fletes-app',
                  company: 'FletesApp',
                  date: 'Feb. 2021 - Jul. 2021',
                  position: 'React Native developer',
                  description:
                    'As a freelancer, I had the opportunity to collaborate with a colleague on a project for a specific client, developing a mobile application that connected transporters with users in need of their services. The app was implemented using React Native on the client side and Golang on the backend.',
                  icon: 'TRUCK',
                },
                {
                  id: '_knowhow-uy',
                  company: 'KnowHow Uy',
                  date: 'Ago. 2015 - Sep. 2021',
                  position: 'DBA/DevOps',
                  description:
                    'In over 6 years working at the company, I performed tasks as a DBA/DevOps for over 40 clients throughout Latin America. I improved and streamlined tasks related to installation, configuration, and monitoring of database engines such as MySQL, MariaDB PostgreSQL, MongoDB, Oracle, DB2, SQL Server y Redis.',
                  icon: 'DATABASE',
                  stats: [
                    {
                      id: 1,
                      name: 'The number of clients with whom I worked providing support',
                      value: '+40',
                    },
                    {
                      id: 2,
                      name: 'Are the number of database engines that I monitor, configure and support',
                      value: '6',
                    },
                  ],
                },
              ],
            },
            myConferences: {
              title: 'My conferences and blog',
              description: '',
              conferences: [
                {
                  id: '_PGKAZ',
                  title: 'PGKAZ: PostgreSQL + High Availability',
                  subtitle: 'Jan. 2021',
                  description:
                    'Implemented a new PostgreSQL database solution with high availability.',
                  desktopImg: 'PGKAZ_DESKTOP',
                  externalURL: '',
                  imageURL: 'https://www.knowhow.com.uy/?p=8523',
                },
                {
                  id: '_DBaaS',
                  title: 'VMaaS and DBaaS (PostgreSQL and MySQL) / KnowHow Uy',
                  subtitle: 'Dic. 2020',
                  description:
                    'Webinar held for clients and the general public on installation and deployment of PostgreSQL and MySQL instances with configuration of backups and replication by slaves, using Ansible and Jenkins.',
                  desktopImg: 'POSTGRES_MYSQL_DESKTOP',
                  externalURL: '',
                  imageURL: 'https://www.knowhow.com.uy/?p=8485',
                },
                {
                  id: '_mongo-bkp',
                  title: 'Mongodump and Mongorestore: what to take in mind?',
                  subtitle: 'Jul. 2019',
                  description:
                    'Writing technical blogs on database topics, monitoring, automations, etc.',
                  desktopImg: 'MONGO_BKP_DESKTOP',
                  externalURL: '',
                  imageURL: 'https://www.knowhow.com.uy/?p=7837',
                },
                {
                  id: '_mongo-ws',
                  title: 'MongoDB workshop / KnowHow Uy',
                  subtitle: 'Oct. 2017',
                  description: 'Didactic workshop carried out to train KnowHow staff.',
                  desktopImg: 'MONGODB_DESKTOP',
                  externalURL: '',
                  imageURL: '',
                },
              ],
            },
            myTechStack: {
              title: 'My Tech Stack',
              description:
                'with whom I carried out the different projects that were presented to me',
            },
            tools: {
              title: 'Tools',
              description: "I've been working with recently",
            },
            myEducation: {
              title: 'My education',
              description: '',
              timeline1: {
                university: 'ORT Uruguay University',
                years: '2013 - 2019',
                title: 'Software Engineer',
                description: 'Software Engineering Degree at the Faculty of Engineering.',
              },
              timeline2: {
                university: 'ORT Uruguay University',
                years: '2013 - 2017',
                title: 'Software Engineer Assistant',
                description: 'Intermediate degree awarded by the ORT University of Uruguay',
              },
              timeline3: {
                university: 'Juan Zorrilla de San Martin High School',
                years: '1006 - 2012',
                description: '',
              },
            },
          },
          projects: {
            tab: '_projects',
            sideBar: {
              projects: 'projects',
              snakeGame: '_snake-game',
              fletesApp: '_fletes-app',
              pimbay: '_pimbay',
              gitContributions: '_git-contributions',
            },
            myProjects: {
              title: 'My projects',
              description:
                'During my career as a software developer I have been able to implement some short- to long-range projects. Each of these projects has been an opportunity to apply my technical and creative skills. Below, I present a list of them.',
              projects: [
                {
                  id: '_snake-game',
                  title: 'Snake Game',
                  subtitle: "The best snake game you've ever tried!!!",
                  description:
                    'Experience the nostalgia of the classic Snake game made with well-known languages ​​such as HTML and javascript',
                  desktopImg: 'SNAKE_GAME_DESKTOP',
                  mobileImg: 'SNAKE_GAME_MOBILE',
                  externalURL: 'https://snake-game-cl9o9zkag-lucasbaronio.vercel.app/',
                  imageURL: 'https://github.com/lucasbaronio/snake-game',
                },
                {
                  id: '_fletes-app',
                  title: 'FletesApp',
                  subtitle:
                    'Moving what you imagine from one point to another has never been so easy.',
                  description:
                    'Mobile application implemented with React Native whose objective is to connect freight drivers with people who need their services.',
                  desktopImg: 'FLETES_APP_DESKTOP',
                  mobileImg: 'FLETES_APP_MOBILE',
                  externalURL: '',
                  imageURL: 'https://github.com/lucasbaronio/fletes-app',
                },
                {
                  id: '_pimbay',
                  title: 'Pimbay',
                  subtitle: 'What are you up to do today?',
                  description:
                    'Application implemented with React Native as a final year project with the focus on planning activities to do with other known and/or unknown people.',
                  desktopImg: 'PIMBAY_DESKTOP',
                  mobileImg: 'PIMBAY_MOBILE',
                  externalURL: '',
                  imageURL: 'https://github.com/lucasbaronio/pimbayMobile',
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
            sendMeAnEmail: {
              title: 'Send me an email',
              copyButton: 'Copy',
              copiedLabel: 'Copied',
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
            downloadButton: 'Descargar CV',
          },
          about: {
            tab: '_acerca-de-mi',
            sideBar: {
              bio: 'biografía',
              aBitAboutMe: '_sobre-mi',
              experience: 'experiencia',
              pedidosYa: '_pedidos-ya',
              fletesApp: '_fletes-app',
              knowhowUy: '_knowhow-uy',
              conferences: 'conferences',
              pgkaz: '_PGKAZ',
              dbaas: '_DBaaS',
              mongoBkp: '_mongo-bkp',
              mongoWS: '_mongo-ws',
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
                  'Soy un entusiasta de la tecnología desde muy joven y mi pasión por este mundo ha sido un motor a lo largo de mi carrera. Inicialmente comencé mi viaje en el ámbito de DevOps, pero pronto me di cuenta de que mi verdadera vocación estaba en el sector de la programación.',
                part2:
                  'Como Ingeniero de Software, me dedico a crear aplicaciones web escalables y de alta calidad que no solo satisfagan las necesidades del usuario sino que generen un impacto significativo. Mi objetivo es brindar valor continuamente a los usuarios a través de soluciones web innovadoras e impactantes.',
              },
            },
            myExperience: {
              title: 'Mi experiencia',
              description: '',
              timeline: [
                {
                  id: '_pedidos-ya',
                  company: 'PedidosYa',
                  tag: 'Último',
                  date: 'Oct. 2021 - Actualidad',
                  position: 'Software Engineer Fullstack',
                  description:
                    'PedidosYa es una empresa de delivery de comidas (presente en todo Latinoamérica) donde el 100% de sus ganancias dependen exclusivamente de sus plataformas web y app móvil. Dentro de la compañía me encuentro desempeñando tareas como desarrollador web y backend dando servicios en las pantallas del checkout y formas de pago. Nuestro principal objetivo es mejorar la experiencia de pago del usuario, brindándole la mayor cantidad de formas posibles para abonar su pedido y de una forma segura. Algunos datos que representan el impacto de mi trabajo desde que estoy en la empresa:',
                  icon: 'CODE',
                  stats: [
                    {
                      id: 1,
                      name: 'Usuarios que realizaron un pedido con al menos una tarjeta',
                      value: '+18%',
                    },
                    {
                      id: 2,
                      name: 'Obtuvimos el certificado para todos nuestros flujos de pago',
                      value: 'PCI',
                    },
                    { id: 3, name: 'Nuevos métodos de pago', value: '5' },
                  ],
                },
                {
                  id: '_fletes-app',
                  company: 'FletesApp',
                  date: 'Feb. 2021 - Jul. 2021',
                  position: 'Desarrollador React Native',
                  description:
                    'Como freelance, tuve la oportunidad de colaborar con un colega en un proyecto para un cliente específico, desarrollando una aplicación móvil que conectara a transportistas con usuarios que necesitaran de sus servicios. La App se implementó utilizando React Native como lenguaje a nivel cliente y Golang en el backend.',
                  icon: 'TRUCK',
                },
                {
                  id: '_knowhow-uy',
                  company: 'KnowHow Uy',
                  date: 'Ago. 2015 - Sep. 2021',
                  position: 'DBA/DevOps',
                  description:
                    'En más de 6 años trabajando en la empresa, desempeñé tareas como DBA/DevOps para más de 40 clientes de todo Latinoamérica. Mejorando y agilizando tareas de instalación, configuración y monitoreo de motores de base de datos tales como: MySQL, MariaDB PostgreSQL, MongoDB, Oracle, DB2, SQL Server y Redis.',
                  icon: 'DATABASE',
                  stats: [
                    {
                      id: 1,
                      name: 'Son la cantidad de clientes con la que trabajaba dando soporte',
                      value: '+40',
                    },
                    {
                      id: 2,
                      name: 'Son la cantidad los motores de base de datos que monitoreo, configuro y doy soporte',
                      value: '6',
                    },
                  ],
                },
              ],
            },
            myConferences: {
              title: 'Mis conferencias y blog',
              description: '',
              conferences: [
                {
                  id: '_PGKAZ',
                  title: 'PGKAZ: PostgreSQL + Alta Disponibilidad / KnowHow Uy',
                  subtitle: 'Jan. 2021',
                  description:
                    'Se implementó y escribió un blog sobre una nueva solución de base de datos PostgreSQL con alta disponibilidad.',
                  desktopImg: 'PGKAZ_DESKTOP',
                  // mobileImg: 'SNAKE_GAME_MOBILE',
                  externalURL: '',
                  imageURL: 'https://www.knowhow.com.uy/?p=8523',
                },
                {
                  id: '_DBaaS',
                  title: 'VMaaS y BDaaS (PostgreSQL y MySQL) / KnowHow Uy',
                  subtitle: 'Dic. 2020',
                  description:
                    'Webinar realizado para clientes y público en general sobre instalación y despliegue de instancias PostgreSQL y MySQL con configuración de respaldos y replicación por slaves, usando Ansible y Jenkins.',
                  desktopImg: 'POSTGRES_MYSQL_DESKTOP',
                  externalURL: '',
                  imageURL: 'https://www.knowhow.com.uy/?p=8485',
                },
                {
                  id: '_mongo-bkp',
                  title: 'Mongodump y Mongorestore: ¿qué tener en cuenta?',
                  subtitle: 'Jul. 2019',
                  description:
                    'Escritura y/o revisión de blogs técnicos sobre temas de bases de datos, monitoreo, automatizaciones, etc.',
                  desktopImg: 'MONGO_BKP_DESKTOP',
                  externalURL: '',
                  imageURL: 'https://www.knowhow.com.uy/?p=7837',
                },
                {
                  id: '_mongo-ws',
                  title: 'Administración de Base de Datos MongoDB',
                  subtitle: 'Oct. 2017',
                  description: 'Taller didáctico realizado para capacitar al personal de KnowHow.',
                  desktopImg: 'MONGODB_DESKTOP',
                  externalURL: '',
                  imageURL: '',
                },
              ],
            },
            myTechStack: {
              title: 'Mis conocimientos tecnológicos',
              description:
                'con los que llevé a cabo los distintos proyectos que se me fueron presentando',
            },
            tools: {
              title: 'Herramientas',
              description: 'con las que he estado trabajando recientemente',
            },
            myEducation: {
              title: 'Mi educación',
              description: '',
              timeline1: {
                university: 'Universidad ORT Uruguay',
                years: '2013 - 2019',
                title: 'Ingeniero en Sistemas',
                description: 'Carrera Ingeniería en Sistema en Facultad de Ingeniería.',
              },
              timeline2: {
                university: 'Universidad ORT Uruguay',
                years: '2013 - 2017',
                title: 'Asistente de Ingeniero en Sistemas',
                description: 'Titulo intermedio otorgado por la Universidad ORT del Uruguay',
              },
              timeline3: {
                university: 'Colegio Juan Zorrilla de San Martin',
                years: '1006 - 2012',
                description: '',
              },
            },
          },
          projects: {
            tab: '_proyectos',
            sideBar: {
              projects: 'proyectos',
              snakeGame: '_la-vivorita',
              fletesApp: '_fletes-app',
              pimbay: '_pimbay',
              gitContributions: '_git-contribuciones',
            },
            myProjects: {
              title: 'My projects',
              description:
                'Durante mi trayectoria como desarrollador de software he podido implementar algunos proyectos de corto a largo alcance. Cada uno de estos proyectos ha sido una oportunidad para aplicar mis habilidades técnicas y creativas. A continuación, les presento una lista de los mismos.',
              projects: [
                {
                  id: '_la-vivorita',
                  title: 'La viborita',
                  subtitle: 'El mejor juego de la viborita que hayas jugado',
                  description:
                    'Experimenta la nostalgia del clásico juego de Snake realizado con lenguajes mas que conocidos como son HTML y javascript',
                  desktopImg: 'SNAKE_GAME_DESKTOP',
                  mobileImg: 'SNAKE_GAME_MOBILE',
                  externalURL: 'https://snake-game-cl9o9zkag-lucasbaronio.vercel.app/',
                  imageURL: 'https://github.com/lucasbaronio/snake-game',
                },
                {
                  id: '_fletes-app',
                  title: 'FletesApp',
                  subtitle: 'Trasladar lo que te imagines de un punto a otro nunca fue tan facil',
                  description:
                    'Aplicación mobile implementada con React Native cuyo objetivo es conectar fleteros con personas que necesitan sus servicios.',
                  desktopImg: 'FLETES_APP_DESKTOP',
                  mobileImg: 'FLETES_APP_MOBILE',
                  externalURL: '',
                  imageURL: 'https://github.com/lucasbaronio/fletes-app',
                },
                {
                  id: '_pimbay',
                  title: 'Pimbay',
                  subtitle: '¿Qué estás para hacer hoy?',
                  description:
                    'Aplicación implementada con React Native como proyecto de fin de carrera con el foco en la planificación de actividades para hacer con otras personas conocidas y/o desconocidas.',
                  desktopImg: 'PIMBAY_DESKTOP',
                  mobileImg: 'PIMBAY_MOBILE',
                  externalURL: '',
                  imageURL: 'https://github.com/lucasbaronio/pimbayMobile',
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
            sendMeAnEmail: {
              title: 'Envíame un correo',
              copyButton: 'Copiar',
              copiedLabel: 'Copiado',
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

    debug: false,
    fallbackLng: 'es',

    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
  });

export default i18next;
