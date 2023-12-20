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
          about: {
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
              timeline1: {
                company: 'PedidosYa',
                tag: 'Latest',
                date: 'Oct. 2021 - Today',
                position: 'Software Engineer Fullstack',
                description:
                  'Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.',
              },
              timeline2: {
                company: 'KnowHow Uy',
                date: 'Ago. 2015 - Sep. 2021',
                position: 'DevOps',
                description:
                  'Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.',
              },
            },
            myTechStack: {
              title: 'My Tech Stack',
              description: 'Technologies I&apos;ve been working with recently',
            },
            tools: {
              title: 'Tools',
              description: 'Technologies I&apos;ve been working with recently',
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
            myProjects: {
              title: 'My projects',
              description:
                'During my career as a software developer I have been able to implement some short- to long-range projects. Each of these projects has been an opportunity to apply my technical and creative skills. Below, I present a list of them.',
              project1: {
                title: '',
                description: '',
              },
              project2: {
                title: '',
                description: '',
              },
              project3: {
                title: '',
                description: '',
              },
              project4: {
                title: '',
                description: '',
              },
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
        },
      },
      es: {
        translation: {
          about: {
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
              description: 'description',
              timeline1: {
                company: 'PedidosYa',
                tag: 'Ultimo',
                date: 'Oct. 2021 - Today',
                position: 'Software Engineer Fullstack',
                description:
                  'Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.',
              },
              timeline2: {
                company: 'KnowHow Uy',
                date: 'Ago. 2015 - Sep. 2021',
                position: 'DevOps',
                description:
                  'Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.',
              },
            },
            myTechStack: {
              title: 'Mis conocimiento tecnológico',
              description: 'Tecnologías con las que he estado trabajando recientemente',
            },
            tools: {
              title: 'Herramientas',
              description: 'Herramientas con las que he estado trabajando recientemente',
            },
            myEducation: {
              title: 'Mi educación',
              description: 'description',
              timeline1: {
                university: 'ORT Uruguay University',
                years: '2013 - 2019',
                title: 'Ingeniero en Sistemas',
                description: 'Get started with dozens of web components and interactive elements.',
              },
              timeline2: {
                university: 'ORT Uruguay University',
                years: '2013 - 2017',
                title: 'Asistente de Ingeniero en Sistemas',
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
            myProjects: {
              title: 'My projects',
              description:
                'Durante mi trayectoria como desarrollador de software he podido implementar algunos proyectos de corto a largo alcance. Cada uno de estos proyectos ha sido una oportunidad para aplicar mis habilidades técnicas y creativas. A continuación, les presento una lista de los mismos.',
              project1: {
                title: '',
                description: '',
              },
              project2: {
                title: '',
                description: '',
              },
              project3: {
                title: '',
                description: '',
              },
              project4: {
                title: '',
                description: '',
              },
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
