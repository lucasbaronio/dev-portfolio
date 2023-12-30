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
    <section className="flex h-full w-full select-none">
      <article className="flex flex-col justify-between w-16 h-full border-r border-bg-200">
        <div className="flex flex-col items-center">
          <Icon
            icon={VscFiles}
            selected={tabSelected === TABS.HELLO}
            onClick={() => onTabClick(TABS.HELLO)}
          />
          <Icon
            icon={VscSearch}
            selected={tabSelected === TABS.CONTACT}
            onClick={() => onTabClick(TABS.CONTACT)}
          />
          <Icon
            icon={VscSourceControl}
            selected={tabSelected === TABS.PROJECTS}
            onClick={() => onTabClick(TABS.PROJECTS)}
          />
          <Icon icon={VscDebugAlt} selected={tabSelected === ''} onClick={() => {}} />
        </div>
        <div className="flex flex-col items-center">
          <Icon
            icon={VscAccount}
            selected={tabSelected === TABS.ABOUT}
            onClick={() => onTabClick(TABS.ABOUT)}
          />
          <Icon icon={VscGear} selected={tabSelected === ''} onClick={() => {}} />
        </div>
      </article>
      <article className="flex flex-col h-full w-full">
        {tabSelected === TABS.ABOUT ? <AboutSideBar /> : null}
      </article>
    </section>
  );
};

SideBar.propTypes = {
  onTabClick: PropTypes.func,
};

export default SideBar;
