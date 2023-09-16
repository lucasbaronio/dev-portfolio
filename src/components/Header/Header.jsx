import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { VscChromeClose } from 'react-icons/vsc';
import { useNavigate } from 'react-router-dom';
import Tab from './components/Tab';
import { TABS } from '../../constants/tabs';
import { useTabSelected } from '../../hooks/tabSelected';

const Header = () => {
  const tabSelected = useTabSelected();
  const navigate = useNavigate();

  return (
    <header className="flex flex-col">
      <div className="flex justify-between h-14 border-b border-slate-800">
        <div className="flex">
          <Tab
            name={TABS.HELLO.name}
            value={TABS.HELLO.value}
            selected={tabSelected === TABS.HELLO.name}
            onClick={(name) => navigate(name)}
            extraClass="rounded-ss-lg"
          />
          <Tab
            name={TABS.ABOUT.name}
            value={TABS.ABOUT.value}
            selected={tabSelected === TABS.ABOUT.name}
            onClick={(name) => navigate(name)}
          />
          <Tab
            name={TABS.PROJECTS.name}
            value={TABS.PROJECTS.value}
            selected={tabSelected === TABS.PROJECTS.name}
            onClick={(name) => navigate(name)}
          />
        </div>
        <div className="flex">
          <Tab
            name={TABS.CONTACT.name}
            value={TABS.CONTACT.value}
            selected={tabSelected === TABS.CONTACT.name}
            onClick={(name) => navigate(name)}
            left={false}
            extraClass="rounded-se-lg"
          />
        </div>
      </div>

      <div className="flex h-10 border-b border-slate-800">
        <div className=" flex items-center justify-between gap-10 h-full px-4 border-r border-slate-800 hover:bg-slate-900 cursor-pointer">
          <span>personal-info.md</span>
          <VscChromeClose
            size={22}
            color="grey"
            className=" p-1 rounded hover:bg-slate-800 cursor-pointer"
          />
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {};

export default Header;
