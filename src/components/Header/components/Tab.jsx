import React from 'react';
import PropTypes from 'prop-types';

const Tab = ({ value, name, selected, left = true, onClick, extraClass }) => {
  return (
    <button
      onClick={() => onClick(name)}
      className={`flex items-center h-12 sm:h-full w-full sm:w-auto px-8 ${
        left ? 'sm:border-r' : 'sm:border-l'
      } border-slate-800 hover:bg-slate-800 ${
        selected ? 'sm:border-t-2 border-t-blue-300' : ''
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
