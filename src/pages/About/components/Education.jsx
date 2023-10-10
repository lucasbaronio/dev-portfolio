import React from 'react';
import PropTypes from 'prop-types';
import { ImBooks } from 'react-icons/im';
import { FaGraduationCap, FaSchool } from 'react-icons/fa6';

const Education = () => {
  return (
    <div>
      <ol className="items-center xl:flex">
        <li id="university" className="relative mb-6 xl:mb-0">
          <div className="flex items-center">
            <div className="z-10 flex items-center justify-center w-6 h-6 rounded-full ring-0 ring-white dark:ring-primary-100 dark:bg-primary-200 xl:ring-8 shrink-0">
              <FaGraduationCap className="dark:fill-text-100 fill-text-900" />
            </div>
            <div className="hidden xl:flex w-full bg-bg-700 h-[1px] dark:bg-accent-100"></div>
          </div>
          <div className="mt-3 xl:pr-8">
            <h3 className="text-lg font-semibold text-text-900 dark:text-text-100">
              ORT Uruguay University
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-text-300 dark:text-text-700">
              2013 - 2019
            </time>
            <span className=" text-sm font-bold text-accent-100">Software Engineer</span>
            <p className="text-sm font-normal text-text-700 dark:text-text-300">
              Get started with dozens of web components and interactive elements.
            </p>
          </div>
        </li>
        <li id="university" className="relative mb-6 xl:mb-0">
          <div className="flex items-center">
            <div className="z-10 flex items-center justify-center w-6 h-6 rounded-full ring-0 ring-white dark:ring-primary-100 dark:bg-primary-200 xl:ring-8 shrink-0">
              <ImBooks className="dark:fill-text-100 fill-text-900" />
            </div>
            <div className="hidden xl:flex w-full bg-bg-700 h-[1px] dark:bg-accent-100"></div>
          </div>
          <div className="mt-3 xl:pr-8">
            <h3 className="text-lg font-semibold text-text-900 dark:text-text-100">
              ORT Uruguay University
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-text-300 dark:text-text-700">
              2013 - 2017
            </time>
            <span className=" text-sm font-bold text-accent-100">Software Engineer Assistant</span>
            <p className="text-sm font-normal text-text-700 dark:text-text-300">
              Get started with dozens of web components and interactive elements.
            </p>
          </div>
        </li>
        <li id="high-school" className="relative mb-6 xl:mb-0">
          <div className="flex items-center">
            <div className="z-10 flex items-center justify-center w-6 h-6 rounded-full ring-0 ring-white dark:ring-primary-100 dark:bg-primary-200 xl:ring-8 shrink-0">
              <FaSchool className="dark:fill-text-100 fill-text-900" />
            </div>
            <div className="hidden xl:flex w-full bg-bg-700 h-[1px] dark:bg-accent-100"></div>
          </div>
          <div className="mt-3 xl:pr-8">
            <h3 className="text-lg font-semibold text-text-900 dark:text-text-100">
              Juan Zorrilla de San Martin High School
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-text-300 dark:text-text-700">
              2006 - 2012
            </time>
            <p className="text-sm font-normal text-text-700 dark:text-text-300">
              Get started with dozens of web components and interactive elements.
            </p>
          </div>
        </li>
      </ol>
    </div>
  );
};

Education.propTypes = {};

export default Education;
