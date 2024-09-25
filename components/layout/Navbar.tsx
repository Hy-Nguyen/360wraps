'use client';

import { scrollToSection } from '@/lib/utils';
import Instagram from '@/public/svg/Instagram';
import MenuButton from '@/public/svg/MenuButton';
import TikTok from '@/public/svg/TikTok';
import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import MobileMenu from './navbar/MobileMenu';
import NavLink from './navbar/NavLink';
import NavSocial from './navbar/NavSocial';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className={`invert-text fixed left-0 top-0 z-30 flex h-14 w-screen max-w-[100dvw] items-center justify-center bg-black bg-transparent px-4 text-black backdrop-blur-lg`}
    >
      <div className="container flex w-full items-center justify-between px-0 lg:px-8">
        <h1 className="text-2xl font-bold hover:cursor-pointer lg:text-4xl" onClick={() => scrollToSection('hero')}>
          360 AZ Wraps
        </h1>

        <div className="hidden items-center justify-center gap-8 lg:flex">
          <NavLink scrollTo={() => scrollToSection('about', -56)} label="About" />
          <NavLink scrollTo={() => scrollToSection('services')} label="Services" />
          <NavLink scrollTo={() => scrollToSection('gallery', -56)} label="Gallery" />
          <NavLink scrollTo={() => scrollToSection('contact')} label="Contact" />
          <NavSocial link="https://www.instagram.com/360azwraps/" icon={<Instagram />} />
          <NavSocial link="https://www.tiktok.com/@kehvan" icon={<TikTok />} />
        </div>
        <div className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
          <MenuButton isOpen={isOpen} />
        </div>
        <AnimatePresence>{isOpen && <MobileMenu setIsOpen={setIsOpen} />}</AnimatePresence>
      </div>
    </div>
  );
}
