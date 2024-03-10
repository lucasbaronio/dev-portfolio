import React from 'react';
import PropTypes from 'prop-types';
import { IMAGE_COMPONENT_MAPPER } from '../constants/images';

const Link = ({ url, children }) => {
  if (url)
    return (
      <a href={url} className="group" target="_blank" rel="noreferrer">
        {children}
      </a>
    );
  return <div className="group">{children}</div>;
};

Link.propTypes = {
  children: PropTypes.node,
  url: PropTypes.string,
};

const Card = ({ title, subtitle, description, mobileImg, desktopImg, externalURL, imageURL }) => {
  return (
    <div key={imageURL} className="relative max-w-lg rounded-lg overflow-hidden">
      <Link url={imageURL}>
        <figure>
          <img
            className="aspect-video object-cover group-hover:scale-105 duration-300"
            src={IMAGE_COMPONENT_MAPPER[desktopImg]}
            alt={title}
          />
        </figure>
        {mobileImg ? (
          <figure className="hidden md:flex absolute top-[50%] bottom-0 my-auto left-0 w-[25%] h-fit z-10">
            <img
              className="aspect-[9/20] object-cover"
              src={IMAGE_COMPONENT_MAPPER[mobileImg]}
              alt={title}
            />
          </figure>
        ) : null}
        {/* <IconExternalLink className="absolute top-5 right-5 group-hover:scale-125 duration-100 text-text-100" /> */}
      </Link>
      <div
        className={`min-w-full h-[70%] hover:bg-bg-700/60 bg-bg-700 dark:bg-bg-300 hover:dark:bg-bg-300/60 hover:backdrop-blur-lg md:absolute md:top-[66%] md:hover:top-[30%] pl-2 ${
          mobileImg ? 'md:pl-[26%]' : 'md:pl-4'
        } transform duration-200 py-2 pr-2`}
      >
        <hgroup className="flex flex-col">
          <h2 className="col-span-1 text-xl xl:text-lg 2xl:text-xl text-accent-100 font-semibold mb-1">
            {title}
          </h2>
          {subtitle ? (
            <p className="text-sm line-clamp-2 text-accent-200 font-semibold">{subtitle}</p>
          ) : null}
          <p className="line-clamp-10 text-xs mt-4">{description}</p>
        </hgroup>
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  description: PropTypes.string,
  mobileImg: PropTypes.string,
  desktopImg: PropTypes.string.isRequired,
  externalURL: PropTypes.string,
  imageURL: PropTypes.string,
};

export default Card;
