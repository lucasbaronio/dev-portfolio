import React from 'react';
import PropTypes from 'prop-types';
// import { VscChevronDown } from 'react-icons/vsc';
import Directory from '../../../components/SideBar/components/Directory';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const AboutSideBar = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <section>
      {/* <article className="flex items-center gap-1 pl-2 h-10 border-b border-bg-200 cursor-pointer">
        <VscChevronDown color="white" />
        <span>personal-info</span>
      </article> */}
      <article className="mt-2">
        <Directory
          files={[
            {
              type: 'folder',
              name: t('about.sideBar.bio'),
              open: true,
              files: [
                {
                  type: 'file',
                  name: t('about.sideBar.aBitAboutMe'),
                  onClick: () => navigate('#bio'),
                },
              ],
            },
            {
              type: 'folder',
              name: t('about.sideBar.experience'),
              open: false,
              files: [
                {
                  type: 'file',
                  name: t('about.sideBar.fullstack'),
                  onClick: () => navigate('#fullstack'),
                },
                {
                  type: 'file',
                  name: t('about.sideBar.devops'),
                  onClick: () => navigate('#devops'),
                },
              ],
            },
            {
              type: 'folder',
              name: t('about.sideBar.skills'),
              open: false,
              files: [
                {
                  type: 'file',
                  name: t('about.sideBar.techStack'),
                  onClick: () => navigate('#tech-stack'),
                },
                {
                  type: 'file',
                  name: t('about.sideBar.tools'),
                  onClick: () => navigate('#tools'),
                },
                // { type: 'file', name: 'qualities', onClick: () => navigate('#qualities') },
              ],
            },
            {
              type: 'folder',
              name: t('about.sideBar.education'),
              open: false,
              files: [
                {
                  type: 'file',
                  name: t('about.sideBar.university'),
                  onClick: () => navigate('#university'),
                },
                {
                  type: 'file',
                  name: t('about.sideBar.highSchool'),
                  onClick: () => navigate('#high-school'),
                },
              ],
            },
            {
              type: 'file',
              name: t('about.sideBar.interests'),
            },
            // {
            //   type: 'file',
            //   name: 'lenguajes',
            // },
          ]}
        />
      </article>
    </section>
  );
};

AboutSideBar.propTypes = {};

export default AboutSideBar;
