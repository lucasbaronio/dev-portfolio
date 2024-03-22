import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Directory from '../../components/SideBar/components/Directory';
// import { VscChevronDown } from 'react-icons/vsc';
// import Directory from '../../../components/SideBar/components/Directory';

const ProjectsSideBar = () => {
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
              name: t('projects.sideBar.projects'),
              open: false,
              files: [
                {
                  type: 'file',
                  name: t('projects.sideBar.snakeGame'),
                  onClick: () => navigate(`#${t('projects.sideBar.snakeGame')}`),
                },
                {
                  type: 'file',
                  name: t('projects.sideBar.fletesApp'),
                  onClick: () => navigate(`#${t('projects.sideBar.fletesApp')}`),
                },
                {
                  type: 'file',
                  name: t('projects.sideBar.pimbay'),
                  onClick: () => navigate(`#${t('projects.sideBar.pimbay')}`),
                },
              ],
            },
            {
              type: 'file',
              name: t('projects.sideBar.gitContributions'),
              onClick: () => navigate(`#${t('projects.sideBar.gitContributions')}`),
            },
          ]}
        />
      </article>
    </section>
  );
};

ProjectsSideBar.propTypes = {};

export default ProjectsSideBar;
