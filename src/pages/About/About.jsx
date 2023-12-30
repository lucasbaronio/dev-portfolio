import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import Timeline from './components/Timeline';
import { STACKS, TOOLS } from './constants';
import Logo from './components/Logo';
import Education from './components/Education';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();
  const { hash } = useLocation();

  useEffect(() => {
    scrollToSection(hash.replace('#', ''));
  }, [hash]);

  const scrollToSection = (section) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="flex flex-col justify-center items-center w-full">
      <article id="bio" className=" flex flex-col items-center w-full max-w-4xl mt-16 px-8 xl:px-4">
        <h3 className=" text-2xl text-primary-300">{t('about.aboutMe.title')}</h3>
        <p className=" my-4">{t('about.aboutMe.description.part1')}</p>
        <p className=" my-4">{t('about.aboutMe.description.part2')}</p>
      </article>
      <article
        id="experience"
        className=" flex flex-col items-center w-full max-w-4xl mt-16 px-8 xl:px-4"
      >
        <h3 className=" text-2xl text-primary-300">{t('about.myExperience.title')}</h3>
        <p className=" my-4">{t('about.myExperience.description')}</p>
        <Timeline />
      </article>
      <article id="skills" className="max-w-4xl">
        <section id="tech-stack" className=" flex flex-col items-center mt-16 w-full px-8 xl:px-4">
          <h3 className=" text-2xl text-primary-300">{t('about.myTechStack.title')}</h3>
          <p className=" my-4">{t('about.myTechStack.description')}</p>
          <div className="flex justify-center gap-8 flex-wrap mt-4">
            {Object.entries(STACKS).map(([key, value]) => (
              <Logo key={key} stack={{ name: key, ...value }} />
            ))}
          </div>
        </section>
        <section id="tools" className=" flex flex-col items-center mt-16 w-full px-8 xl:px-4">
          <h3 className=" text-2xl text-primary-300">{t('about.tools.title')}</h3>
          <p className=" my-4">{t('about.tools.description')}</p>
          <div className="flex justify-center gap-8 flex-wrap mt-4">
            {Object.entries(TOOLS).map(([key, value]) => (
              <Logo key={key} stack={{ name: key, ...value }} />
            ))}
          </div>
        </section>
        <section id="qualities"></section>
      </article>
      <article
        id="education"
        className=" flex flex-col items-center mt-16 w-full max-w-5xl px-8 xl:px-4 mb-8"
      >
        <h3 className=" text-2xl text-primary-300">{t('about.myEducation.title')}</h3>
        <p className=" my-4">{t('about.myEducation.description')}</p>
        <Education />
      </article>
    </section>
  );
};

export default About;
