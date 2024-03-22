import React from 'react';
import PropTypes from 'prop-types';

const Badge = ({ children }) => {
  return (
    <span className=" text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-primary-400 dark:text-primary-100 ml-3">
      {children}
    </span>
  );
};

Badge.propTypes = {
  children: PropTypes.node,
};

export default Badge;
