import React from 'react';
import PropTypes from 'prop-types';
import FileIcon from '../../../assets/file.svg';

const File = ({ name, onClick }) => (
  <button
    onClick={onClick}
    className="flex items-center w-full gap-2 pl-2 hover:bg-bg-200 cursor-pointer"
  >
    <img src={FileIcon} width={15} />
    <span className="text-ellipsis whitespace-nowrap overflow-hidden">{name}</span>
  </button>
);

File.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default File;
