'use client';

import { scrollToSection } from '@/lib/utils';
import Instagram from '@/public/svg/Instagram';
import TikTok from '@/public/svg/TikTok';
import { motion } from 'framer-motion';
import NavLink from './NavLink';
import NavSocial from './NavSocial';

export default function MobileMenu({ setIsOpen }: { setIsOpen: (isOpen: boolean) => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }}
      className="fixed left-0 top-14 flex h-screen w-screen flex-col items-center justify-center gap-10 bg-white text-black backdrop-blur-sm"
    >
      <NavLink
        scrollTo={() => {
          setIsOpen(false);
          scrollToSection('about');
        }}
        label="About"
      />
      <NavLink
        scrollTo={() => {
          setIsOpen(false);
          scrollToSection('services');
        }}
        label="Services"
      />
      <NavLink
        scrollTo={() => {
          setIsOpen(false);
          scrollToSection('gallery');
        }}
        label="Gallery"
      />
      <NavLink
        scrollTo={() => {
          setIsOpen(false);
          scrollToSection('contact');
        }}
        label="Contact"
      />
      <div className="flex gap-8">
        <NavSocial
          link="https://www.instagram.com/360azwraps/"
          icon={<Instagram size={'1.5em'} className="text-black" />}
        />
        <NavSocial link="https://www.tiktok.com/@kehvan" icon={<TikTok size={'1.5em'} className="text-black" />} />
      </div>
    </motion.div>
  );
}
