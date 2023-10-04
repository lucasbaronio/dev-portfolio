import { Outlet, useMatch, useNavigate } from 'react-router-dom';
import SideBar from './components/SideBar';
import Header from './components/Header';
import { useEffect, useState } from 'react';
import Footer from './components/Footer/Footer';
import { RxHamburgerMenu, RxCross1 } from 'react-icons/rx';

function RootLayout() {
  const [navOpened, setNavOpened] = useState(false);
  const [isLanding, setIsLanding] = useState(false);
  const match = useMatch('hello');
  const navigate = useNavigate();

  useEffect(() => {
    setIsLanding(Boolean(match));
  }, [match]);

  const onTabClick = (tabName) => {
    setNavOpened(false);
    navigate(tabName);
  };

  return (
    <div className=" bg-black box-border p-1 w-screen h-screen min-w-[300px] max-w-full max-h-full font-mono">
      <main className=" grid grid-rows-[48px_auto_1fr_64px] sm:grid-rows-[48px_48px_1fr_64px] grid-cols-[1fr] md:grid-rows-[48px_48px_1fr_64px] md:grid-cols-[250px_1fr] lg:grid-rows-[48px_1fr_64px] lg:grid-cols-[250px_1fr] w-full h-full rounded-xl border border-slate-800 dark:bg-slate-900 bg-slate-900	dark:text-slate-400 text-slate-400">
        <div className="md:col-span-2 lg:col-span-1 md:border-r border-b border-slate-800">
          <div className="flex items-center justify-between h-12">
            <div className="flex items-center pl-2 gap-2">
              <img src="/lb-logo-white.png" width="30" height="30" />
              <span>Lucas Baronio</span>
            </div>
            <div className=" block sm:hidden mx-3 cursor-pointer">
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
        </div>
        <div className=" md:col-span-2 lg:col-span-1 border-b border-slate-800">
          <div className={` h-full ${!navOpened && 'hidden'} sm:block`}>
            <Header onTabClick={onTabClick} />
          </div>
        </div>
        {!isLanding ? (
          <div className=" hidden md:block border-r border-slate-800">
            <SideBar onTabClick={onTabClick} />
          </div>
        ) : null}
        <article className={`${isLanding ? 'md:col-span-2' : ''} overflow-auto`}>
          <Outlet />
        </article>
        <div className="col-span-1 md:col-span-2 border-t border-slate-800">
          <Footer />
        </div>
      </main>
    </div>
  );
}

export default RootLayout;
