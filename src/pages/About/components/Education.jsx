import React from 'react';
import PropTypes from 'prop-types';
import { ImBooks } from 'react-icons/im';
import { FaGraduationCap, FaSchool } from 'react-icons/fa6';

const Education = (props) => {
  return (
    <div>
      <ol className="items-center xl:flex">
        <li className="relative mb-6 xl:mb-0">
          <div className="flex items-center">
            <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 xl:ring-8 dark:ring-gray-900 shrink-0">
              <FaGraduationCap />
            </div>
            <div className="hidden xl:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
          </div>
          <div className="mt-3 xl:pr-8">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              ORT Uruguay University
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              2013 - 2019
            </time>
            <span className=" text-sm font-bold text-blue-400">Software Engineer</span>
            <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
              Get started with dozens of web components and interactive elements.
            </p>
          </div>
        </li>
        <li className="relative mb-6 xl:mb-0">
          <div className="flex items-center">
            <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 xl:ring-8 dark:ring-gray-900 shrink-0">
              <ImBooks />
            </div>
            <div className="hidden xl:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
          </div>
          <div className="mt-3 xl:pr-8">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              ORT Uruguay University
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              2013 - 2017
            </time>
            <span className=" text-sm font-bold text-blue-400">Software Engineer Assistant</span>
            <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
              Get started with dozens of web components and interactive elements.
            </p>
          </div>
        </li>
        <li className="relative mb-6 xl:mb-0">
          <div className="flex items-center">
            <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 xl:ring-8 dark:ring-gray-900 shrink-0">
              <FaSchool />
            </div>
            <div className="hidden xl:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
          </div>
          <div className="mt-3 xl:pr-8">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Juan Zorrilla de San Martin High School
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              2006 - 2012
            </time>
            <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
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
