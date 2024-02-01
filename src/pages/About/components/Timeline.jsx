import React from 'react';
import PropTypes from 'prop-types';
import { FaDatabase, FaCode } from 'react-icons/fa6';
import { useTranslation } from 'react-i18next';
import Badge from '../../../components/Badge';

const Timeline = () => {
  const { t } = useTranslation();
  return (
    <ol className="relative border-l border-bg-700 dark:border-accent-100">
      <li id="fullstack" className="mb-10 ml-8">
        <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -left-3 ring-8 ring-white dark:ring-primary-100 dark:bg-primary-200">
          <FaCode className="dark:fill-text-100 fill-text-900" />
        </span>
        <h3 className="flex items-center mb-1 text-lg font-semibold text-text-900 dark:text-text-100">
          {t('about.myExperience.timeline1.company')}{' '}
          <Badge>{t('about.myExperience.timeline1.tag')}</Badge>
        </h3>
        <time className="block mb-2 text-sm font-normal leading-none text-text-300 dark:text-text-700">
          {t('about.myExperience.timeline1.date')}
        </time>
        <span className=" text-sm font-bold text-accent-100">
          {t('about.myExperience.timeline1.position')}
        </span>
        <p className="mb-4 text-base font-normal text-text-700 dark:text-text-300">
          {t('about.myExperience.timeline1.description')}
        </p>
      </li>
      <li id="devops" className="mb-10 ml-8">
        <span className="absolute flex items-center justify-center w-6 h-6  rounded-full -left-3 ring-8 ring-white dark:ring-primary-100 dark:bg-primary-200">
          <FaDatabase className="dark:fill-text-100 fill-text-900" />
        </span>
        <h3 className="mb-1 text-lg font-semibold text-text-900 dark:text-text-100">
          {t('about.myExperience.timeline2.company')}
        </h3>
        <time className="block mb-2 text-sm font-normal leading-none text-text-300 dark:text-text-700">
          {t('about.myExperience.timeline2.date')}
        </time>
        <span className=" text-sm font-bold text-accent-100">
          {t('about.myExperience.timeline2.position')}
        </span>
        <p className="text-base font-normal text-text-700 dark:text-text-300">
          {t('about.myExperience.timeline2.description')}
        </p>
      </li>
    </ol>
  );
};

Timeline.propTypes = {};

export default Timeline;
