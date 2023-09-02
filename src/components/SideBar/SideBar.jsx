import React from 'react';
import PropTypes from 'prop-types';
import {
  VscFiles,
  VscSearch,
  VscSourceControl,
  VscDebugAlt,
  VscChevronDown,
} from 'react-icons/vsc';
import { RiFolder3Fill } from 'react-icons/ri';

const SideBar = () => {
  return (
    <aside className="max-w-xs lg:w-[300px] h-full border-r border-slate-800">
      <div className="flex flex-col h-full">
        <div>
          <div className="flex items-center h-14 border-b border-slate-800">
            <span className="pl-4">Lucas Baronio</span>
          </div>
        </div>
        <div className="flex h-full w-full">
          <aside className="flex flex-col items-center gap-6 w-16 h-full border-r border-slate-800 py-4">
            <VscFiles size={24} color="grey" className=" hover:fill-white cursor-pointer" />
            <VscSearch size={24} color="grey" className=" hover:fill-white cursor-pointer" />
            <VscSourceControl size={24} color="grey" className=" hover:fill-white cursor-pointer" />
            <VscDebugAlt size={24} color="grey" className=" hover:fill-white cursor-pointer" />
          </aside>
          <div className="flex flex-col h-full w-full">
            <div className="flex items-center gap-1 pl-2 h-10 border-b border-slate-800 cursor-pointer">
              <VscChevronDown color="white" />
              <span>personal-info</span>
            </div>
            <div className="flex items-center gap-2 pl-2 h-10 cursor-pointer">
              <VscChevronDown color="white" />
              <RiFolder3Fill color="red" />
              <span>bio</span>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

SideBar.propTypes = {};

export default SideBar;
