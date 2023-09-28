import React, { useEffect, useState } from 'react';
import { GITHUB_CALENDAR_IMG } from '../constants/images';

const COLORS = ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'];

const Box = () => {
  return (
    <div className="flex items-center gap-1">
      <span className=" mr-1">Less</span>
      {COLORS.map((color) => (
        <svg key={color} width="12" height="12">
          <rect width="12" height="12" fill={color} rx="2" ry="2"></rect>
        </svg>
      ))}
      <span className=" ml-1">More</span>
    </div>
  );
};

const Projects = () => {
  const [githubContributions, setGithubContributions] = useState(
    sessionStorage.getItem('githubContributions'),
  );

  useEffect(() => {
    const fetchGithubData = async (username) => {
      try {
        const response = await fetch(
          `https://github-contributions-api.jogruber.de/v4/${username}?y=last`,
        );
        const result = await response.json();
        console.log(result);
        setGithubContributions(result?.total?.lastYear);
        window.sessionStorage.setItem('githubContributions', result?.total?.lastYear);
      } catch (error) {
        console.error(error);
        return undefined;
      }
    };
    if (!githubContributions) fetchGithubData('lbaronio');
  }, []);

  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className=" relative w-full max-w-4xl mx-8 xl:mx-4">
        <img src={GITHUB_CALENDAR_IMG} />
        {githubContributions ? (
          <span className=" absolute bottom-0 lg:bottom-[20%] left-0 w-1/2">
            {githubContributions} contributions in the last year
          </span>
        ) : null}
        <div className=" absolute top-0 sm:top-1/3 right-0">
          <Box />
        </div>
      </div>
    </div>
  );
};

export default Projects;
