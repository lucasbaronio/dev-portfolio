import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import Timeline from './components/Timeline';
import { STACKS, TOOLS } from './constants';
import Logo from './components/Logo';
import Education from './components/Education';

const About = () => {
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
    <div className="flex flex-col justify-center items-center w-full">
      <div id="bio" className=" flex flex-col items-center w-full max-w-4xl my-8 px-8 xl:px-4">
        <h3 className=" text-2xl text-blue-300">A bit about me</h3>
        <p className=" my-4">
          Desde muy chico me considero un apasionado por el mundo de la tecnología, en especial...
        </p>
      </div>
      <div
        id="experience"
        className=" flex flex-col items-center w-full max-w-4xl my-8 px-8 xl:px-4"
      >
        <h3 className=" text-2xl text-blue-300">My experience</h3>
        <p className=" my-4">pepe pepe pepe pepe pepe pepe pepe pepe pepe pepe pepe </p>
        <Timeline />
      </div>
      <div id="skills" className="my-8 max-w-4xl">
        <section id="tech-stack" className=" flex flex-col items-center my-8 w-full px-8 xl:px-4">
          <h3 className=" text-2xl text-blue-300">My Tech Stack</h3>
          <p className=" my-4">Technologies I&apos;ve been working with recently</p>
          <div className="flex justify-center gap-8 flex-wrap my-4">
            {Object.entries(STACKS).map(([key, value]) => (
              <Logo key={key} stack={{ name: key, ...value }} />
            ))}
          </div>
        </section>
        <section id="tools" className=" flex flex-col items-center my-8 w-full px-8 xl:px-4">
          <h3 className=" text-2xl text-blue-300">Tools</h3>
          <p className=" my-4">Technologies I&apos;ve been working with recently</p>
          <div className="flex justify-center gap-8 flex-wrap my-4">
            {Object.entries(TOOLS).map(([key, value]) => (
              <Logo key={key} stack={{ name: key, ...value }} />
            ))}
          </div>
        </section>
        <section id="qualities"></section>
      </div>
      <div
        id="education"
        className=" flex flex-col items-center my-8 w-full max-w-5xl px-8 xl:px-4"
      >
        <h3 className=" text-2xl text-blue-300">My education</h3>
        <p className=" my-4">pepe pepe pepe pepe pepe pepe pepe pepe pepe pepe pepe </p>
        <Education />
      </div>
    </div>
  );
};

export default About;
