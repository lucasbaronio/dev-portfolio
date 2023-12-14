import React from 'react';
import PropTypes from 'prop-types';
import Tab from './components/Tab';
import { TABS } from '../../constants/tabs';
import { useTabSelected } from '../../hooks/tabSelected';

const Header = ({ onTabClick }) => {
  const tabSelected = useTabSelected();

  return (
    <section className="flex flex-col sm:flex-row sm:justify-between h-full select-none">
      <div className="flex flex-col sm:flex-row">
        <Tab
          name={TABS.HELLO.name}
          value={TABS.HELLO.value}
          selected={tabSelected === TABS.HELLO.name}
          onClick={onTabClick}
        />
        <Tab
          name={TABS.ABOUT.name}
          value={TABS.ABOUT.value}
          selected={tabSelected === TABS.ABOUT.name}
          onClick={onTabClick}
        />
        <Tab
          name={TABS.PROJECTS.name}
          value={TABS.PROJECTS.value}
          selected={tabSelected === TABS.PROJECTS.name}
          onClick={onTabClick}
        />
      </div>
      <div className="flex">
        <Tab
          name={TABS.CONTACT.name}
          value={TABS.CONTACT.value}
          selected={tabSelected === TABS.CONTACT.name}
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
