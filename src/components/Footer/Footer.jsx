import React from 'react';
import PropTypes from 'prop-types';
import XIcon from '../../assets/x.svg';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { BiCoffeeTogo } from 'react-icons/bi';
import {
  VscCheckAll,
  VscBell,
  VscSourceControl,
  VscJson,
  VscError,
  VscWarning,
  VscInfo,
} from 'react-icons/vsc';

const Footer = () => {
  return (
    <footer className=" w-full">
      <div className=" flex items-center justify-between px-1 h-6">
        <div className="flex gap-3">
          <div className="flex gap-1">
            <VscSourceControl color="grey" />
            <span className=" text-xs">main</span>
          </div>
          <div className="flex gap-1">
            <VscError color="grey" />
            <span className=" text-xs">0</span>
            <VscWarning color="grey" />
            <span className=" text-xs">0</span>
            <VscInfo color="grey" />
            <span className=" text-xs">0</span>
          </div>
        </div>
        <div className="hidden xs:flex gap-3">
          <span className=" text-xs">UTF-8</span>
          <div className="flex gap-1">
            <VscJson color="grey" />
            <span className=" text-xs">Javascript</span>
          </div>
          <div className="flex gap-1">
            <VscCheckAll color="grey" />
            <span className=" text-xs">Prettier</span>
          </div>
          <VscBell color="grey" />
        </div>
      </div>
      <div className="flex justify-between col-span-2 border-t border-slate-800 h-10">
        <div className="flex">
          <div className=" flex items-center h-full px-4 border-r border-r-slate-800">
            <span className=" text-sm">find me in:</span>
          </div>
          <div className=" flex items-center h-full px-4 border-r border-r-slate-800">
            <img src={XIcon} width={20} className=" fill-slate-600" />
          </div>
          <a
            href="https://www.linkedin.com/in/lucas-baronio-726739b9"
            target="_blank"
            className=" flex items-center h-full px-4 border-r border-r-slate-800"
            rel="noreferrer"
          >
            <BsLinkedin size={20} />
          </a>
        </div>
        <div className=" hidden sm:flex items-center gap-2">
          <span>Made with</span>
          <BiCoffeeTogo size={20} className=" fill-cyan-300" />
          <span>& 🩵</span>
        </div>
        <div className="flex">
          <a
            href="https://github.com/lucasbaronio"
            target="_blank"
            className="flex items-center gap-2 h-full px-4 border-l border-l-slate-800"
            rel="noreferrer"
          >
            <span className=" hidden xs:block text-sm">@lucasbaronio</span>
            <BsGithub size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {};

export default Footer;
