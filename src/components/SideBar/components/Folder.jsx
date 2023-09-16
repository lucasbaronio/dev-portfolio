import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { VscChevronDown, VscChevronRight } from 'react-icons/vsc';
import { RiFolder3Fill } from 'react-icons/ri';
import Directory from './Directory';

const Folder = ({ name, files, open = false }) => {
  const [isOpen, setIsOpen] = useState(open);
  return (
    <div className="flex flex-col pl-2">
      <button
        onClick={() => setIsOpen((prevState) => !prevState)}
        className="flex items-center gap-2 hover:bg-slate-800 cursor-pointer"
      >
        {isOpen ? <VscChevronDown color="white" /> : <VscChevronRight color="white" />}
        <RiFolder3Fill color="red" />
        <span>{name}</span>
      </button>
      {isOpen ? <Directory files={files} /> : null}
    </div>
  );
};

Folder.propTypes = {
  name: PropTypes.string.isRequired,
  files: PropTypes.array,
  open: PropTypes.bool,
};

export default Folder;
