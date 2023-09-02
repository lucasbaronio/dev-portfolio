import { Outlet } from 'react-router-dom';
import { VscChromeClose } from 'react-icons/vsc';
import SideBar from './components/SideBar/SideBar';

function RootLayout() {
  return (
    <div className=" bg-black box-border p-1 flex w-screen h-screen max-w-full max-h-full font-mono">
      <main className=" flex flex-col w-full h-full rounded-xl border border-slate-800 dark:bg-slate-950	dark:text-slate-400">
        <div className="flex w-full h-full">
          <SideBar />
          <section className="w-full h-full">
            <header className="flex flex-col">
              <div className="flex h-14 border-b border-slate-800">
                <div className=" flex items-center h-full w-auto px-8 border-r border-slate-800 hover:bg-slate-900 cursor-pointer ">
                  <span>_hello</span>
                </div>
                <div className=" flex items-center h-full w-auto px-8 border-r border-slate-800 hover:bg-slate-900 cursor-pointer">
                  <span>_about-me</span>
                </div>
                <div className=" flex items-center h-full w-auto px-8 border-r border-slate-800 hover:bg-slate-900 cursor-pointer">
                  <span>_projects</span>
                </div>
              </div>
              <div className="flex h-10 border-b border-slate-800">
                <div className=" flex items-center justify-between gap-10 h-full px-4 border-r border-slate-800 hover:bg-slate-900 cursor-pointer">
                  <span>personal-info.md</span>
                  <VscChromeClose
                    size={22}
                    color="grey"
                    className=" p-1 rounded hover:bg-slate-800 cursor-pointer"
                  />
                </div>
              </div>
            </header>
            <div className="w-full h-full">
              <Outlet />
            </div>
          </section>
        </div>

        <footer className=" h-10 w-full border-t border-slate-800"></footer>
      </main>
    </div>
  );
}

export default RootLayout;
