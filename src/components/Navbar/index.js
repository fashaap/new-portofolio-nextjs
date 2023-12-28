'use client'

import { Ghost } from 'lucide-react';

import {  useState, useEffect } from 'react';



export const NavLinkButton = () => {


  const linkData = [
    {
      name: 'Home',
      link: '/'
    },
    {
      name: 'About',
      link: '/'
    },
    {
      name: 'Project',
      link: '/'
    },
    {
      name: 'Blog',
      link: '/'
    }
  ]


  return (
    <div className='flex gap-5 '>
      {linkData.map((item, index) => {

        return (
          <a href={item.link} key={index} className='hover:underline hover:underline-offset-8 hover:text-[#38388b] text-sm font-black'>{item.name}</a>
        )
      })}
    </div>
  )
}

export const Navbar = () => {

  const [navbarFixed, setNavbarFixed] = useState(false);

  const setFixed = () => {
    if (window.scrollY >= 30) {
      setNavbarFixed(true);
    } else {
      setNavbarFixed(false);
    }
  };

  useEffect(() => {
    // Add event listener when component mounts
    window.addEventListener("scroll", setFixed);

    // Cleanup: Remove event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", setFixed);
    };
  }, []);
  
  return (
    <nav className={navbarFixed ? " backdrop-blur-xl text-white sticky top-0 z-50 border-b" : " border-b-0 text-white sticky top-0 z-50 "}>
      <main className='container max-w-7xl flex justify-between items-center pt-5 pb-5 relative'>
        <div className='Logo '>
          <Ghost className={navbarFixed ? 'w-7 h-7 md:w-8 md:h-8' : 'w-7 h-7 md:w-10 md:h-10'} />
        </div>
        <NavLinkButton />
      </main>
    </nav>
  )
}
