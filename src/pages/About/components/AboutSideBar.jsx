import React from 'react';
import PropTypes from 'prop-types';
import { VscChevronDown } from 'react-icons/vsc';
import Directory from '../../../components/SideBar/components/Directory';
import { useNavigate } from 'react-router-dom';

const AboutSideBar = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex items-center gap-1 pl-2 h-10 border-b border-bg-200 cursor-pointer">
        <VscChevronDown color="white" />
        <span>personal-info</span>
      </div>
      <div className="mt-2">
        <Directory
          files={[
            {
              type: 'folder',
              name: 'bio',
              open: true,
              files: [
                { type: 'file', name: 'pepe3', onClick: () => navigate('#pepe3') },
                { type: 'file', name: 'pepe4', onClick: () => navigate('#pepe4') },
              ],
            },
            {
              type: 'folder',
              name: 'experience',
              open: false,
              files: [
                {
                  type: 'file',
                  name: 'fullstack',
                  onClick: () => navigate('#fullstack'),
                },
                {
                  type: 'file',
                  name: 'devops',
                  onClick: () => navigate('#devops'),
                },
              ],
            },
            {
              type: 'folder',
              name: 'skills',
              open: false,
              files: [
                { type: 'file', name: 'tech-stack', onClick: () => navigate('#tech-stack') },
                { type: 'file', name: 'tools', onClick: () => navigate('#tools') },
                { type: 'file', name: 'qualities', onClick: () => navigate('#qualities') },
              ],
            },
            {
              type: 'folder',
              name: 'education',
              open: false,
              files: [
                {
                  type: 'file',
                  name: 'high-school',
                  onClick: () => navigate('#high-school'),
                },
                { type: 'file', name: 'university', onClick: () => navigate('#university') },
              ],
            },
            {
              type: 'file',
              name: 'interests',
            },
            // {
            //   type: 'file',
            //   name: 'lenguajes',
            // },
          ]}
        />
      </div>
    </>
  );
};

AboutSideBar.propTypes = {};

export default AboutSideBar;
