import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import Timeline from './components/Timeline';
import { STACKS, TOOLS } from './constants';
import Logo from './components/Logo';
import Education from './components/Education';
import { useTranslation } from 'react-i18next';
import Card from '../../components/Card';

const About = () => {
  const { t, ready } = useTranslation();
  const [conferences, setConferences] = useState([]);
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

  useEffect(() => {
    if (ready)
      setConferences(
        t(`about.myConferences.conferences`, {
          returnObjects: true,
        }),
      );
    else setConferences([]);
  }, [t, ready]);

  return (
    <section className="flex flex-col justify-center items-center w-full">
      <article
        id="bio"
        className=" flex flex-col items-center w-full max-w-4xl 2xl:max-w-5xl mt-16 px-8 xl:px-4"
      >
        <h3 className=" text-2xl text-primary-300">{t('about.aboutMe.title')}</h3>
        <p className=" my-4">{t('about.aboutMe.description.part1')}</p>
        <p className=" my-4">{t('about.aboutMe.description.part2')}</p>
      </article>
      <article
        id="experience"
        className=" flex flex-col items-center w-full max-w-4xl 2xl:max-w-5xl mt-16 px-8 xl:px-4"
      >
        <h3 className=" text-2xl text-primary-300">{t('about.myExperience.title')}</h3>
        <p className=" my-4">{t('about.myExperience.description')}</p>
        <Timeline />
      </article>
      <article
        id="conferences"
        className=" flex flex-col items-center w-full max-w-4xl 2xl:max-w-5xl mt-16 px-8 xl:px-4"
      >
        <h3 className=" text-2xl text-primary-300">{t('about.myConferences.title')}</h3>
        <p className=" my-4">{t('about.myConferences.description')}</p>
        <div className="grid xl:grid-cols-2 gap-5 max-w-4xl 2xl:max-w-5xl my-8">
          {conferences.map(({ id, ...conference }) => (
            <div id={id} key={id}>
              <Card {...conference} />
            </div>
          ))}
        </div>
      </article>
      <article id="skills" className="max-w-4xl 2xl:max-w-5xl">
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
