import React from 'react';

const Divider = () => {
  return (
    <div className="flex items-center w-full my-2 px-4 mx-auto max-w-lg">
      <div className="flex-grow border-t border-text-700"></div>
      <span className="flex-shrink mx-4 text-text-300">Or</span>
      <div className="flex-grow border-t border-text-700"></div>
    </div>
  );
};

export default Divider;
