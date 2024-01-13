import React from 'react';
import PropTypes from 'prop-types';
import Tab from './components/Tab';
import { TABS } from '../../constants/tabs';
import { useTabSelected } from '../../hooks/tabSelected';
import { useTranslation } from 'react-i18next';
import Dropdown from './components/Dropdown';

const Header = ({ onTabClick }) => {
  const { t } = useTranslation();
  const tabSelected = useTabSelected();

  return (
    <section className="flex flex-col sm:flex-row sm:justify-between h-full select-none">
      <div className="flex flex-col sm:flex-row">
        {[TABS.HELLO, TABS.ABOUT, TABS.PROJECTS].map((tab) => (
          <Tab
            key={tab}
            name={tab}
            value={t(`${tab}.tab`)}
            selected={tabSelected === tab}
            onClick={onTabClick}
          />
        ))}
      </div>
      <div className="flex">
        <Dropdown />
        <Tab
          name={TABS.CONTACT}
          value={t(`${TABS.CONTACT}.tab`)}
          selected={tabSelected === TABS.CONTACT}
          onClick={onTabClick}
          left={false}
          extraClass="lg:rounded-se-lg"
        />
      </div>
    </section>
  );
};

Header.propTypes = {
  onTabClick: PropTypes.func,
};

export default Header;
