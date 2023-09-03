import { Outlet } from 'react-router-dom';
import SideBar from './components/SideBar';
import Header from './components/Header';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import XIcon from './assets/x.svg';

function RootLayout() {
  return (
    <div className=" bg-black box-border p-1 flex w-screen h-screen max-w-full max-h-full font-mono">
      <main className=" flex flex-col w-full h-full rounded-xl border border-slate-800 dark:bg-slate-950	dark:text-slate-400">
        <div className="flex w-full h-full">
          <SideBar />
          <section className="flex flex-col w-full h-full">
            <Header />
            <div className="w-full h-full">
              <Outlet />
            </div>
          </section>
        </div>
        <footer className=" flex justify-between h-10 w-full border-t border-slate-800">
          <div className="flex">
            <div className=" flex items-center h-full px-4 border-r border-r-slate-800">
              <span className=" text-sm">find me in:</span>
            </div>
            <div className=" flex items-center h-full px-4 border-r border-r-slate-800">
              <img src={XIcon} width={20} className=" fill-slate-600" />
            </div>
            <div className=" flex items-center h-full px-4 border-r border-r-slate-800">
              <BsLinkedin size={20} />
            </div>
          </div>
          <div className="flex">
            <div className="flex items-center gap-2 h-full px-4 border-l border-l-slate-800">
              <span className=" text-sm">@lucasbaronio</span>
              <BsGithub size={20} />
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default RootLayout;
