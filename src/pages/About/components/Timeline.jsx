import React from 'react';
import PropTypes from 'prop-types';
import { FaDatabase, FaCode } from 'react-icons/fa6';

const Timeline = () => {
  return (
    <div>
      <ol className="relative border-l border-gray-200 dark:border-gray-700">
        <li id="software-engineer" className="mb-10 ml-6">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <FaCode className="dark:fill-white fill-black" />
          </span>
          <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
            PedidosYa{' '}
            <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ml-3">
              Latest
            </span>
          </h3>
          <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            Oct. 2021 - Today
          </time>
          <span className=" text-sm font-bold text-blue-400">Software Engineer Fullstack</span>
          <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            Get access to over 20+ pages including a dashboard layout, charts, kanban board,
            calendar, and pre-order E-commerce & Marketing pages.
          </p>
        </li>
        <li id="devops" className="mb-10 ml-6">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <FaDatabase className="dark:fill-white fill-black" />
          </span>
          <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">KnowHow Uy</h3>
          <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            Ago. 2015 - Sep. 2021
          </time>
          <span className=" text-sm font-bold text-blue-400">DevOps</span>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            All of the pages and components are first designed in Figma and we keep a parity between
            the two versions even as we update the project.
          </p>
        </li>
      </ol>
    </div>
  );
};

Timeline.propTypes = {};

export default Timeline;
