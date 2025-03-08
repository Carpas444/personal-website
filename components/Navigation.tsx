"use client"
import { NavLinks } from "@/constants";
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import Link from "next/link"
import Transition from './Transition';

const Navigation = () => {
  const [isRouting, setisRouting] = useState(false);
  const path = usePathname();
  const [prevPath, setprevPath] = useState("/");

  useEffect(() => {
    if (prevPath !== path) {
      setisRouting(true);
    }
  }, [path, prevPath]);

  useEffect(() => {
    if (isRouting) {
      setprevPath(path);
      const timeout = setTimeout(() => {
        setisRouting(false);
      }, 1200);

      return () => clearTimeout(timeout);
    }
  }, [isRouting]);

  return (
    <>
      {isRouting && <Transition />}
      <div className='fixed bottom-[3px] md:bottom-2 left-1/2 transform -translate-x-1/2 z-[50] w-[80%] md:w-[40%] flex justify-around items-center bg-transparent px-6 py-4'>
        {NavLinks.map((nav) => (
          <Link key={nav.name} href={nav.link} className='p-2'>
            <nav.icon className={`w-[22px] h-[22px] sm:w-[26px] sm:h-[26px] ${path === nav.name ? "text-purple-800" : "text-white"}`} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default Navigation;