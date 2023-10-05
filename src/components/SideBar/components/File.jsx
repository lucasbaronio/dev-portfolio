import React from 'react';
import PropTypes from 'prop-types';
import { RiFile3Fill } from 'react-icons/ri';

const File = ({ name, onClick }) => (
  <button
    onClick={onClick}
    className="flex items-center w-full gap-2 pl-2 hover:bg-bg-200 cursor-pointer"
  >
    <RiFile3Fill className="fill-accent-100 dark:fill-accent-100" />
    <span>{name}</span>
  </button>
);

File.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default File;
