import React from 'react';
import PropTypes from 'prop-types';

const Stats = ({ stats }) => {
  return (
    <div className="py-4">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base leading-7 text-text-700 dark:text-text-300">{stat.name}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-text-900 dark:text-text-100 md:text-5xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
};

Stats.propTypes = {
  stats: PropTypes.array,
};

export default Stats;
