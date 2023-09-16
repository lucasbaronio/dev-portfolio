import React from 'react';
import PropTypes from 'prop-types';
import Folder from './Folder';
import File from './File';

const Directory = ({ files }) => {
  return (
    <>
      {files?.map(({ type, name, ...rest }) => {
        if (type === 'file') return <File key={name} name={name} {...rest} />;
        if (type === 'folder') return <Folder key={name} name={name} {...rest} />;
      })}
    </>
  );
};

Directory.propTypes = {
  files: PropTypes.array,
};

export default Directory;
