import React, { useEffect, useState } from 'react';
import { GITHUB_CALENDAR_IMG, IMAGE_COMPONENT_MAPPER } from '../constants/images';
import { useTranslation } from 'react-i18next';

const COLORS = ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'];

const Box = () => {
  const { t } = useTranslation();
  return (
    <div className="flex items-center gap-1">
      <span className=" mr-1">{t('projects.githubContributions.less')}</span>
      {COLORS.map((color) => (
        <svg key={color} width="12" height="12">
          <rect width="12" height="12" fill={color} rx="2" ry="2"></rect>
        </svg>
      ))}
      <span className=" ml-1">{t('projects.githubContributions.more')}</span>
    </div>
  );
};

const Projects = () => {
  const { t, ready } = useTranslation();
  const [projects, setProjects] = useState([]);
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

  useEffect(() => {
    if (ready)
      setProjects(
        t(`projects.myProjects.projects`, {
          returnObjects: true,
        }),
      );
    else setProjects([]);
  }, [t, ready]);

  return (
    <section className="flex flex-col items-center justify-center px-8 xl:px-4 my-10">
      <article className=" flex flex-col items-center w-full max-w-4xl my-8 ">
        <h3 className=" text-2xl text-primary-300">{t('projects.myProjects.title')}</h3>
        <p className=" my-4">{t('projects.myProjects.description')}</p>
      </article>
      <article className="grid xl:grid-cols-2 gap-5 max-w-4xl my-8">
        {projects.map(
          ({ title, subtitle, description, mobileImg, desktopImg, deployURL, projectURL }) => {
            return (
              <div key={projectURL} className="relative max-w-lg rounded-lg overflow-hidden">
                <a href={projectURL} className="group" target="_blank" rel="noreferrer">
                  <figure>
                    <img
                      className="aspect-video object-cover group-hover:scale-105 duration-300"
                      src={IMAGE_COMPONENT_MAPPER[desktopImg]}
                      alt={title}
                    />
                  </figure>
                  <figure className="hidden md:flex absolute top-[50%] bottom-0 my-auto left-0 w-[25%] h-fit z-10">
                    <img
                      className="aspect-[9/20] object-cover"
                      src={IMAGE_COMPONENT_MAPPER[mobileImg]}
                      alt={title}
                    />
                  </figure>
                  q
                  {/* <IconExternalLink className="absolute top-5 right-5 group-hover:scale-125 duration-100 text-text-100" /> */}
                </a>
                <div className="min-w-full h-[70%] hover:bg-bg-700/60 bg-bg-700 dark:bg-bg-300 hover:dark:bg-bg-300/60 hover:backdrop-blur-lg md:absolute md:top-[66%] md:hover:top-[30%] pl-2 md:pl-[26%] transform duration-200 py-2 pr-2">
                  <hgroup className="flex flex-col">
                    <h2 className="col-span-1 text-xl text-accent-100 font-semibold mb-1">
                      {title}
                    </h2>
                    <p className="text-sm line-clamp-2 text-accent-200 font-semibold">{subtitle}</p>
                    <p className="line-clamp-10 text-xs mt-4">{description}</p>
                  </hgroup>
                </div>
              </div>
            );
          },
        )}
      </article>

      <article className=" flex flex-col items-center w-full max-w-4xl my-8 ">
        <h3 className=" text-2xl text-primary-300">{t('projects.githubContributions.title')}</h3>
        <p className=" my-4">{t('projects.githubContributions.description')}</p>
        <div className=" relative w-full max-w-xl">
          <img loading="eager" src={GITHUB_CALENDAR_IMG} />
          {githubContributions ? (
            <span className=" absolute bottom-0 md:bottom-[20%] left-0 w-1/2">
              {`${githubContributions} ${t('projects.githubContributions.info')}`}
            </span>
          ) : null}
          <div className=" absolute top-0 sm:top-1/3 right-0">
            <Box />
          </div>
        </div>
      </article>
    </section>
  );
};

export default Projects;
