import React, { useEffect, useState } from 'react';
import { GITHUB_CALENDAR_IMG } from '../constants/images';
import SnakeGame from '../assets/snake-game.png';
import SnakeGameMobile from '../assets/snake-game-mobile.png';

const COLORS = ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'];

const PROJECTS = [
  {
    name: 'Snake Game',
    summary: "The best snake game you've ever tried",
    description:
      'Experience the nostalgia of the classic Snake game made with well-known languages ​​such as HTML and javascript',
    // description:
    //   'Experimenta la nostalgia del clásico juego de Snake realizado con lenguajes mas que conocidos como son HTML y javascript',
    desktopImage: SnakeGame,
    mobileImage: SnakeGameMobile,
  },
  {
    name: 'Snake Game',
    summary: "The best snake game you've ever tried",
    description:
      'Experience the nostalgia of the classic Snake game made with well-known languages ​​such as HTML and javascript',
    desktopImage: SnakeGame,
    mobileImage: SnakeGameMobile,
  },
  {
    name: 'Snake Game',
    summary: "The best snake game you've ever tried",
    description:
      'Experience the nostalgia of the classic Snake game made with well-known languages ​​such as HTML and javascript',
    desktopImage: SnakeGame,
    mobileImage: SnakeGameMobile,
  },
  {
    name: 'Snake Game',
    summary: "The best snake game you've ever tried",
    description:
      'Experience the nostalgia of the classic Snake game made with well-known languages ​​such as HTML and javascript',
    desktopImage: SnakeGame,
    mobileImage: SnakeGameMobile,
  },
];

const Box = () => {
  return (
    <div className="flex items-center gap-1">
      <span className=" mr-1">Less</span>
      {COLORS.map((color) => (
        <svg key={color} width="12" height="12">
          <rect width="12" height="12" fill={color} rx="2" ry="2"></rect>
        </svg>
      ))}
      <span className=" ml-1">More</span>
    </div>
  );
};

const Projects = () => {
  const [githubContributions, setGithubContributions] = useState(
    sessionStorage.getItem('githubContributions'),
  );

  useEffect(() => {
    const fetchGithubData = async (username) => {
      try {
        const response = await fetch(
          `https://github-contributions-api.jogruber.de/v4/${username}?y=last`,
        );
        const result = await response.json();
        console.log(result);
        setGithubContributions(result?.total?.lastYear);
        window.sessionStorage.setItem('githubContributions', result?.total?.lastYear);
      } catch (error) {
        console.error(error);
      }
    };
    if (!githubContributions) fetchGithubData('lbaronio');
  }, []);

  return (
    <section className="flex flex-col items-center justify-center px-8 xl:px-4 my-10">
      <div className=" flex flex-col items-center w-full max-w-4xl my-8 ">
        <h3 className=" text-2xl text-blue-300">My projects</h3>
        <p className=" my-4">
          During my career as a software developer I have been able to implement some short- to
          long-range projects. Each of these projects has been an opportunity to apply my technical
          and creative skills. Below, I present a list of them.
        </p>
        {/* <p>
          Durante mi trayectoria como desarrollador de software he podido implementar algunos
          proyectos de corto a largo alcance. Cada uno de estos proyectos ha sido una oportunidad
          para aplicar mis habilidades técnicas y creativas. A continuación, les presento una lista
          de los mismos.
        </p> */}
      </div>
      <div className="grid xl:grid-cols-2 gap-5 max-w-4xl my-8">
        {PROJECTS.map(({ name, summary, description, mobileImage, desktopImage }) => (
          <div key="1" className="relative max-w-lg rounded-lg overflow-hidden">
            <a href="https://google.com" className="group" target="_blank" rel="noreferrer">
              <figure>
                <img
                  className="aspect-video object-cover group-hover:scale-105 duration-300"
                  src={desktopImage}
                  alt={name}
                />
              </figure>
              <figure className="hidden md:flex absolute top-[50%] bottom-0 my-auto left-0 w-[25%] h-fit z-10">
                <img className="aspect-[9/20] object-cover" src={mobileImage} alt={name} />
              </figure>
              {/* <IconExternalLink className="absolute top-5 right-5 group-hover:scale-125 duration-100 text-white" /> */}
            </a>
            <div className="min-w-full h-[70%] hover:bg-gray-100/60 bg-gray-100 dark:bg-[#1D273D] hover:dark:bg-[#1D273D]/60 hover:backdrop-blur-lg md:absolute md:top-[73%] md:hover:top-[30%] pl-2 md:pl-[26%] transform duration-200 py-2 pr-2">
              <hgroup className="flex flex-col">
                <h2 className="col-span-1 text-xl font-semibold mb-1">{name}</h2>
                <p className="text-sm line-clamp-2">{summary}</p>
                <p className="line-clamp-10 text-xs mt-4">{description}</p>
              </hgroup>
            </div>
          </div>
        ))}
      </div>

      <div className=" flex flex-col items-center w-full max-w-4xl my-8 ">
        <h3 className=" text-2xl text-blue-300">Github contributions</h3>
        <p className=" my-4">
          These are some of my contributions on Github on a personal level and working for companies
        </p>
        {/* <p className=" my-4">
          Estas son algunas de mis contribuciones en Github a nivel personal y trabajando para
          empresas
        </p> */}
      </div>
      <div className=" relative w-full max-w-xl">
        <img src={GITHUB_CALENDAR_IMG} />
        {githubContributions ? (
          <span className=" absolute bottom-0 md:bottom-[20%] left-0 w-1/2">
            {githubContributions} contributions in the last year
          </span>
        ) : null}
        <div className=" absolute top-0 sm:top-1/3 right-0">
          <Box />
        </div>
      </div>
    </section>
  );
};

export default Projects;
