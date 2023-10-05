import React from 'react';
import PropTypes from 'prop-types';

const Tab = ({ value, name, selected, left = true, onClick, extraClass }) => {
  return (
    <button
      onClick={() => onClick(name)}
      className={`flex items-center h-12 sm:h-full w-full sm:w-auto px-8 hover:text-accent-100 ${
        left ? 'sm:border-r' : 'sm:border-l'
      } border-bg-200 hover:bg-bg-200 ${
        selected ? 'sm:border-t-2 border-t-accent-100' : ''
      } cursor-pointer ${extraClass}`}
    >
      <span>{value}</span>
    </button>
  );
};

Tab.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  selected: PropTypes.bool,
  left: PropTypes.bool,
  onClick: PropTypes.func,
  extraClass: PropTypes.string,
};

export default Tab;
