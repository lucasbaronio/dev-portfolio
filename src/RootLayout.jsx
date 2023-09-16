import { Outlet, useMatch } from 'react-router-dom';
import SideBar from './components/SideBar';
import Header from './components/Header';
import { useEffect, useState } from 'react';
import Footer from './components/Footer/Footer';

function RootLayout() {
  const [isLanding, setIsLanding] = useState(false);
  const match = useMatch('hello');

  useEffect(() => {
    setIsLanding(Boolean(match));
  }, [match]);

  return (
    <div className=" bg-black box-border p-1 flex w-screen h-screen max-w-full max-h-full font-mono">
      <main className=" flex flex-col w-full h-full rounded-xl border border-slate-800 dark:bg-slate-900 bg-slate-900	dark:text-slate-400 text-slate-400">
        <div className="flex w-full h-[calc(100%_-_4rem)]">
          {!isLanding ? <SideBar /> : null}
          <section
            className={`flex flex-col ${isLanding ? 'w-full' : 'w-[calc(100%_-_250px)]'} h-full`}
          >
            <Header />
            <div className="w-full h-full overflow-auto">
              <Outlet />
            </div>
          </section>
        </div>
        <Footer />
      </main>
    </div>
  );
}

export default RootLayout;
