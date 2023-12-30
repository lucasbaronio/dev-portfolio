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
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <section className="w-full select-none">
      <article className=" flex items-center justify-between px-1 h-6">
        <div className="flex gap-3">
          <div className="flex gap-1">
            <VscSourceControl color="grey" />
            <span className=" text-xs">{t('footer.branch')}</span>
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
      </article>
      <article className="flex justify-between col-span-2 border-t border-bg-200 h-10">
        <div className="flex">
          <div className=" flex items-center h-full px-4 border-r border-r-bg-200">
            <span className=" text-sm">{t('footer.findMeIn')}</span>
          </div>
          <div className=" flex items-center h-full px-4 border-r border-r-bg-200">
            <img src={XIcon} width={20} />
          </div>
          <a
            href="https://www.linkedin.com/in/lucas-baronio-726739b9"
            target="_blank"
            className=" flex items-center h-full px-4 border-r border-r-bg-200"
            rel="noreferrer"
          >
            <BsLinkedin size={20} className="hover:dark:fill-primary-200" />
          </a>
        </div>
        <div className=" hidden sm:flex items-center gap-2">
          <small>{t('footer.madeWith')}</small>
          <BiCoffeeTogo size={20} className=" fill-primary-400" />
          <small>& 🩵</small>
        </div>
        <div className="flex group">
          <a
            href={`https://github.com/${t('footer.github')}`}
            target="_blank"
            className="flex items-center gap-2 h-full px-4 border-l border-l-bg-200"
            rel="noreferrer"
          >
            <span className=" hidden xs:block text-sm">@{t('footer.github')}</span>
            <BsGithub size={20} className="group-hover:dark:fill-primary-200" />
          </a>
        </div>
      </article>
    </section>
  );
};

Footer.propTypes = {};

export default Footer;
