import React from 'react';
import PropTypes from 'prop-types';
import { RiFile3Fill } from 'react-icons/ri';

const File = ({ name, onClick }) => (
  <button
    onClick={onClick}
    className="flex items-center w-full gap-2 pl-2 hover:bg-slate-800 cursor-pointer"
  >
    <RiFile3Fill color="green" />
    <span>{name}</span>
  </button>
);

File.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default File;
