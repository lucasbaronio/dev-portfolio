import React from 'react';
import PropTypes from 'prop-types';
import {
  VscFiles,
  VscSearch,
  VscSourceControl,
  VscDebugAlt,
  VscAccount,
  VscGear,
} from 'react-icons/vsc';
import AboutSideBar from '../../pages/About/components/AboutSideBar';
import { TABS } from '../../constants/tabs';
import { useTabSelected } from '../../hooks/tabSelected';

const Icon = ({ icon: Component, selected, onClick }) => {
  return (
    <div
      className={` flex justify-center w-full py-3 my-1 cursor-pointer group ${
        selected && ' border-l-2 border-l-accent-100'
      }`}
      onClick={onClick}
    >
      <Component
        size={24}
        color="grey"
        className={`group-hover:fill-accent-100 ${selected && 'fill-text-100'}`}
      />
    </div>
  );
};

Icon.propTypes = {
  icon: PropTypes.any,
  selected: PropTypes.bool,
  onClick: PropTypes.func,
};

const SideBar = ({ onTabClick }) => {
  const tabSelected = useTabSelected();

  return (
    <aside className="flex h-full w-full">
      <section className="flex flex-col justify-between w-16 h-full border-r border-bg-200">
        <div className="flex flex-col items-center">
          <Icon
            icon={VscFiles}
            selected={tabSelected === TABS.HELLO.name}
            onClick={() => onTabClick(TABS.HELLO.name)}
          />
          <Icon
            icon={VscSearch}
            selected={tabSelected === TABS.CONTACT.name}
            onClick={() => onTabClick(TABS.CONTACT.name)}
          />
          <Icon
            icon={VscSourceControl}
            selected={tabSelected === TABS.PROJECTS.name}
            onClick={() => onTabClick(TABS.PROJECTS.name)}
          />
          <Icon icon={VscDebugAlt} selected={tabSelected === ''} onClick={() => {}} />
        </div>
        <div className="flex flex-col items-center">
          <Icon
            icon={VscAccount}
            selected={tabSelected === TABS.ABOUT.name}
            onClick={() => onTabClick(TABS.ABOUT.name)}
          />
          <Icon icon={VscGear} selected={tabSelected === ''} onClick={() => {}} />
        </div>
      </section>
      <div className="flex flex-col h-full w-full">
        {tabSelected === TABS.ABOUT.name ? <AboutSideBar /> : null}
      </div>
    </aside>
  );
};

SideBar.propTypes = {
  onTabClick: PropTypes.func,
};

export default SideBar;
