"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

import NavLink from './navLink';
import MenuOverlay from './menuOverlay';

const navLinks = [
  {
    title: 'Projects',
    path: 'project'
  },
  {
    title: 'Contact me',
    path: 'contact'
  },
];

const NavBar = () => {
  const [navbarIsOpen, setNavbarIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 right-0 left-0 z-10 bg-[#121212] bg-opacity-100">
      <div className="flex flex-wrap item-center justify-between mix-auto px-4 py-2">
        <Link href={"/"} className="text-2xl md:text-5xl text-white font-semibold">
          <Image
            className="rounded-full border border-white"
            src="/images/logo_picture.png"
            alt="profile Image"
            width={50}
            height={50}
          />
        </Link>
        <div className="mobile-menu block md:hidden">
          {
            navbarIsOpen ? (
              <button
                className="flex item-center px-3 py-2 border rounded border-slate-200 text-scale-200 hover:text-white hover:border-white"
                onClick={() => setNavbarIsOpen(false)}
              >
                <XMarkIcon
                  className="w-5 h-5"
                />
              </button>
            ): (
                <button
                  className="flex item-center px-3 py-2 border rounded border-slate-200 text-scale-200 hover:text-white hover:border-white"
                  onClick={() => setNavbarIsOpen(true)}
                >
                <Bars3Icon
                  className="w-5 h-5"
                />
              </button>
            )
          }
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((item, index) => {
              return (
                <li key={index}>
                  <NavLink href={item.path} title={item.title} />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      {
        navbarIsOpen ? (
          <MenuOverlay links={navLinks} />
        ) : (
          null
        )
      }
    </nav>
  );
}

export default NavBar;