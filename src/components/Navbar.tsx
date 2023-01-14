import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  return (
    <header className="w-full">
      <div className="max-w-5xl mx-auto flex justify-between h-12 items-center px-5">
        <p className="font-bold text-xl">Company</p>
        <div className="lg:hidden" onClick={() => setNav(!nav)}>
          <GiHamburgerMenu />
        </div>
        <nav className="hidden lg:flex justify-between gap-3 text-slate-600 text-sm h-full items-stretch">
          <div className="group flex items-center hover:bg-slate-200 hover:cursor-default">
            <div className="relative px-3">ABOUT</div>
            <div className="hidden absolute group-hover:block hover:block top-12 z-50 bg-white">
              <p className="hover:bg-slate-700 p-4 hover:text-white">HISTORY</p>

              <p className="hover:bg-slate-700 p-4 hover:text-white">VISION MISSION</p>
            </div>
          </div>
          <div className="flex items-center hover:bg-slate-200 hover:cursor-default px-3">OUR WORK</div>
          <div className="flex items-center hover:bg-slate-200 hover:cursor-default px-3">OUR TEAM</div>
          <div className="flex items-center hover:bg-slate-200 hover:cursor-default px-3">CONTACT</div>
        </nav>
      </div>
      {nav && (
        <div className="fixed z-50 bg-white top-0 left-0 right-0 bottom-0">
          <div className="flex p-4 justify-between items-center">
            <p className="font-bold text-xl">Company</p>
            <div>
              <IoMdClose size={25} onClick={() => setNav(false)} />
            </div>
          </div>
          <div className="flex flex-col p-4">
            <div className="flex justify-between">
              <p>ABOUT</p>
              <div>{dropdown ? <AiOutlineUp onClick={() => setDropdown(!dropdown)} /> : <AiOutlineDown onClick={() => setDropdown(!dropdown)} />}</div>
            </div>
            {dropdown && (
              <div className="px-3">
                <p className="hover:bg-slate-700 p-4 hover:text-white">HISTORY</p>
                <p className="hover:bg-slate-700 p-4 hover:text-white">VISION MISSION</p>
              </div>
            )}
          </div>
          <div className="flex flex-col p-4">
            <p>OUR WORK</p>
          </div>
          <div className="flex flex-col p-4">
            <p>OUR TEAM</p>
          </div>
          <div className="flex flex-col p-4">
            <p>CONTACT</p>
          </div>
        </div>
      )}
    </header>
  );
}
