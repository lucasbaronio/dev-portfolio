import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { VscChevronDown, VscChevronRight } from 'react-icons/vsc';
import { RiFolder3Fill } from 'react-icons/ri';
import File from './File';

const Folder = ({ name, files }) => {
  const [isOpen, setIsOpen] = useState(false);
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
      {isOpen && files?.length > 0
        ? files.map(({ type, name, ...rest }) => {
            if (type === 'file') return <File key={name} name={name} {...rest} />;
            if (type === 'folder') return <Folder key={name} name={name} {...rest} />;
          })
        : null}
    </div>
  );
};

Folder.propTypes = {
  name: PropTypes.string.isRequired,
  files: PropTypes.array,
};

export default Folder;
