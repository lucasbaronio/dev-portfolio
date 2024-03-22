import React from 'react';
import PropTypes from 'prop-types';
import Badge from '../../../components/Badge';
import { ICON_COMPONENT_MAPPER } from '../../../constants/images';
import Stats from './Stats';

const TimelineItem = ({ icon, company, tag, date, position, description, stats }) => {
  const Icon = ICON_COMPONENT_MAPPER[icon];
  return (
    <>
      <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -left-3 ring-8 ring-white dark:ring-primary-100 dark:bg-primary-200">
        <img src={Icon} width={18} />
      </span>
      <h3 className="flex items-center mb-1 text-lg font-semibold text-text-900 dark:text-text-100">
        {company} {tag ? <Badge>{tag}</Badge> : null}
      </h3>
      <time className="block mb-2 text-sm font-normal leading-none text-text-300 dark:text-text-700">
        {date}
      </time>
      <span className=" text-sm font-bold text-accent-100">{position}</span>
      <p className="mb-4 text-text-700 dark:text-text-300">{description}</p>
      {stats ? <Stats stats={stats} /> : null}
    </>
  );
};

TimelineItem.propTypes = {
  icon: PropTypes.string,
  company: PropTypes.string,
  tag: PropTypes.string,
  date: PropTypes.string,
  position: PropTypes.string,
  description: PropTypes.string,
  stats: PropTypes.array,
};

export default TimelineItem;
