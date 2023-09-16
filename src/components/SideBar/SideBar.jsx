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

const SideBar = () => {
  const tabSelected = useTabSelected();

  return (
    <aside className=" min-w-[250px] h-full border-r border-slate-800">
      <div className="flex flex-col w-full h-full">
        <div>
          <div className="flex items-center h-14 border-b border-slate-800">
            <span className="pl-4">Lucas Baronio</span>
          </div>
        </div>
        <div className="flex h-full w-full">
          <aside className="flex flex-col justify-between w-16 h-full border-r border-slate-800 py-4">
            <div className="flex flex-col items-center gap-6">
              <VscFiles size={24} color="grey" className=" hover:fill-white cursor-pointer" />
              <VscSearch size={24} color="grey" className=" hover:fill-white cursor-pointer" />
              <VscSourceControl
                size={24}
                color="grey"
                className=" hover:fill-white cursor-pointer"
              />
              <VscDebugAlt size={24} color="grey" className=" hover:fill-white cursor-pointer" />
            </div>
            <div className="flex flex-col items-center gap-6">
              <VscAccount size={24} color="grey" className=" hover:fill-white cursor-pointer" />
              <VscGear size={24} color="grey" className=" hover:fill-white cursor-pointer" />
            </div>
          </aside>
          <div className="flex flex-col h-full w-full">
            {tabSelected === TABS.ABOUT.name ? <AboutSideBar /> : null}
          </div>
        </div>
      </div>
    </aside>
  );
};

SideBar.propTypes = {};

export default SideBar;
