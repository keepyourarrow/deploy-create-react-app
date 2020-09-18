import React from "react";
import { MenuOutline, XOutline } from "@graywolfai/react-heroicons";
import { useState } from "react";

function NavLinks({ className }) {
  return (
    <ul className={className}>
      <li>
        <a
          className="px-2  transition duration-200 ease-in-out hover:text-nav-links-hover"
          href=""
        >
          Portfolio
        </a>
      </li>
      <li>
        <a
          className="px-2  transition duration-200 ease-in-out hover:text-nav-links-hover"
          href=""
        >
          Services
        </a>
      </li>
      <li>
        <a
          className="px-2  transition duration-200 ease-in-out hover:text-nav-links-hover"
          href=""
        >
          Company
        </a>
      </li>
      <li>
        <a
          className="px-2  transition duration-200 ease-in-out hover:text-nav-links-hover"
          href=""
        >
          Insights
        </a>
      </li>
      <li>
        <a
          className="px-2  transition duration-200 ease-in-out hover:text-nav-links-hover"
          href=""
        >
          Contact us
        </a>
      </li>
    </ul>
  );
}

export const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);
  return (
    <nav className="fixed top-0 w-full bg-white z-10">
      <div className="py-3 px-5 flex items-center relative z-10 justify-between lg:container lg:mx-auto">
        <a className="hidden lg:block " href="/">
          <img
            className="w-56 xl:w-72"
            src="https://static.tildacdn.com/tild6563-6232-4665-b833-363566623262/LOGO.svg"
            alt=""
          />
        </a>
        {/* for smaller screens */}
        <a className="lg:hidden -mt-3 w-28" href="/">
          <img
            className="w-56 xl:w-72"
            src="https://static.tildacdn.com/tild6335-6333-4439-b564-323864343337/logomobilenew.svg"
            alt=""
          />
        </a>
        <div className="hidden lg:block">
          <NavLinks className="pt-2 flex space-x-5 text-sm font-semibold text-gray-800 uppercase tracking-wide" />
        </div>

        {/* button hidden on smaller screens */}
        <button
          className="relative w-14 h-14 -mr-2 text-gray-500 focus:outline-none lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          <span>{openNav ? <XOutline /> : <MenuOutline />}</span>
        </button>
      </div>

      {/* for smaller screens */}
      <div className="lg:hidden">
        <div
          className={
            "fixed inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center overflow-scroll transform transition-transform duration-75 ease-in-out " +
            (openNav ? "translate-y-0" : "-translate-y-full")
          }
        >
          <div className="pt-24 pb-20 flex justify-center px-4 w-full bg-white">
            <NavLinks className="pt-2 flex flex-col space-y-3 text-center text-2xl text-nav-links uppercase tracking-wide" />
          </div>
          <div className="flex-1"></div>
        </div>
      </div>
    </nav>
  );
};
