import React from 'react';
import PropTypes from 'prop-types';

const Logo = ({ stack }) => {
  return (
    <div className="flex flex-col items-center group cursor-pointer">
      <figure
        className={`flex items-center justify-center w-16 h-16 group-hover:scale-125 transition duration-500`}
      >
        <stack.component />
      </figure>
      <span
        className={`group-hover:animate-fadein group-hover:opacity-100 opacity-0 mt-4 ${stack.colors.text}`}
      >
        {stack.name}
      </span>
    </div>
  );
};

Logo.propTypes = {
  stack: PropTypes.shape({
    colors: PropTypes.shape({
      text: PropTypes.string,
    }),
    component: PropTypes.func,
    name: PropTypes.string,
  }),
};

export default Logo;
