import { Outlet, useMatch, useNavigate } from 'react-router-dom';
import SideBar from './components/SideBar';
import Header from './components/Header';
import { useEffect, useState } from 'react';
import Footer from './components/Footer/Footer';
import { RxHamburgerMenu, RxCross1 } from 'react-icons/rx';
import { useTranslation } from 'react-i18next';
import { TABS } from './constants/tabs';
import DropdownLenguageSelector from './components/Header/components/DropdownLenguageSelector';

function RootLayout() {
  const { t } = useTranslation();
  const [navOpened, setNavOpened] = useState(false);
  const [isLanding, setIsLanding] = useState(false);
  const match = useMatch(TABS.HELLO);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLanding(Boolean(match));
  }, [match]);

  const onTabClick = (tabName) => {
    setNavOpened(false);
    navigate(tabName);
  };

  return (
    <section className=" bg-black box-border p-1 w-screen h-screen min-w-[300px] max-w-full max-h-full font-mono">
      <article className=" grid grid-rows-[48px_auto_1fr_64px] sm:grid-rows-[48px_48px_1fr_64px] grid-cols-[1fr] md:grid-rows-[48px_48px_1fr_64px] md:grid-cols-[250px_1fr] lg:grid-rows-[48px_1fr_64px] lg:grid-cols-[250px_1fr] w-full h-full rounded-xl border border-bg-200 dark:bg-bg-100 bg-bg-100	dark:text-text-300 text-text-300">
        <header className="md:col-span-2 lg:col-span-1 md:border-r border-b border-bg-200">
          <div className="flex items-center justify-between h-12">
            <div className="flex items-center pl-2 gap-2 select-none">
              <img src="/lb-logo-white.png" width="30" height="30" />
              <span>{t('myName')}</span>
            </div>
            <div className="hidden sm:flex md:hidden h-full">
              <DropdownLenguageSelector />
            </div>
            <div className="block sm:hidden mx-3 cursor-pointer">
              {navOpened ? (
                <RxCross1 size={30} onClick={() => setNavOpened((prevState) => !prevState)} />
              ) : (
                <RxHamburgerMenu
                  size={30}
                  onClick={() => setNavOpened((prevState) => !prevState)}
                />
              )}
            </div>
          </div>
        </header>
        <header className=" md:col-span-2 lg:col-span-1 border-b border-bg-200">
          <div className={` h-full ${!navOpened && 'hidden'} sm:block`}>
            <Header onTabClick={onTabClick} />
          </div>
        </header>
        {!isLanding ? (
          <aside className=" hidden md:block border-r border-bg-200">
            <SideBar onTabClick={onTabClick} />
          </aside>
        ) : null}
        <main className={`${isLanding ? 'md:col-span-2' : ''} overflow-auto`}>
          <Outlet />
        </main>
        <footer className="col-span-1 md:col-span-2 border-t border-bg-200">
          <Footer />
        </footer>
      </article>
    </section>
  );
}

export default RootLayout;
