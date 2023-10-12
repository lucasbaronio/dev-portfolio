import React from 'react';
import PropTypes from 'prop-types';
import { FaDatabase, FaCode } from 'react-icons/fa6';

const Timeline = () => {
  return (
    <ol className="relative border-l border-bg-700 dark:border-accent-100">
      <li id="fullstack" className="mb-10 ml-8">
        <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -left-3 ring-8 ring-white dark:ring-primary-100 dark:bg-primary-200">
          <FaCode className="dark:fill-text-100 fill-text-900" />
        </span>
        <h3 className="flex items-center mb-1 text-lg font-semibold text-text-900 dark:text-text-100">
          PedidosYa{' '}
          <span className=" text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-primary-100 dark:text-primary-400 ml-3">
            Latest
          </span>
        </h3>
        <time className="block mb-2 text-sm font-normal leading-none text-text-300 dark:text-text-700">
          Oct. 2021 - Today
        </time>
        <span className=" text-sm font-bold text-accent-100">Software Engineer Fullstack</span>
        <p className="mb-4 text-base font-normal text-text-700 dark:text-text-300">
          Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar,
          and pre-order E-commerce & Marketing pages.
        </p>
      </li>
      <li id="devops" className="mb-10 ml-8">
        <span className="absolute flex items-center justify-center w-6 h-6  rounded-full -left-3 ring-8 ring-white dark:ring-primary-100 dark:bg-primary-200">
          <FaDatabase className="dark:fill-text-100 fill-text-900" />
        </span>
        <h3 className="mb-1 text-lg font-semibold text-text-900 dark:text-text-100">KnowHow Uy</h3>
        <time className="block mb-2 text-sm font-normal leading-none text-text-300 dark:text-text-700">
          Ago. 2015 - Sep. 2021
        </time>
        <span className=" text-sm font-bold text-accent-100">DevOps</span>
        <p className="text-base font-normal text-text-700 dark:text-text-300">
          All of the pages and components are first designed in Figma and we keep a parity between
          the two versions even as we update the project.
        </p>
      </li>
    </ol>
  );
};

Timeline.propTypes = {};

export default Timeline;
