import React, { useEffect, useState } from 'react';
import { GITHUB_CALENDAR_IMG } from '../../constants/images';
import { useTranslation } from 'react-i18next';
import Card from '../../components/Card';
import { useScrollToSection } from '../../hooks/useScrollToSection';

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
  const [githubContributions, setGithubContributions] = useState();
  // window ? window.sessionStorage.getItem('githubContributions') : undefined,

  useScrollToSection();

  useEffect(() => {
    const fetchGithubData = async (username) => {
      try {
        const response = await fetch(
          `https://github-contributions-api.jogruber.de/v4/${username}?y=last`,
        );
        const result = await response.json();
        console.log(result);
        setGithubContributions(result?.total?.lastYear);
        // window?.sessionStorage.setItem('githubContributions', result?.total?.lastYear);
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
      <article
        id={t('projects.sideBar.projects')}
        className=" flex flex-col items-center w-full max-w-4xl 2xl:max-w-5xl my-8 "
      >
        <h3 className=" text-2xl text-primary-300">{t('projects.myProjects.title')}</h3>
        <p className=" my-4">{t('projects.myProjects.description')}</p>
      </article>
      <article className="grid xl:grid-cols-2 gap-5 max-w-4xl 2xl:max-w-5xl my-8">
        {projects.map(({ id, ...project }) => (
          <Card key={id} id={id} {...project} />
        ))}
      </article>

      <article
        id={t('projects.sideBar.gitContributions')}
        className=" flex flex-col items-center w-full max-w-4xl 2xl:max-w-5xl my-8 "
      >
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
