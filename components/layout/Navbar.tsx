'use client';

import Instagram from '@/public/svg/Instagram';
import TikTok from '@/public/svg/TikTok';
import { scrollToSection } from '@/lib/utils';

export default function Navbar() {
  return (
    <div className="invert-text fixed left-0 top-0 z-30 flex h-14 w-screen max-w-[100dvw] items-center justify-center bg-transparent px-4 text-black backdrop-blur-sm">
      <div className="container flex w-full items-center justify-between">
        <h1 className="text-4xl font-bold hover:cursor-pointer" onClick={() => scrollToSection('hero')}>
          360 AZ Wraps
        </h1>

        <div className="flex items-center justify-center gap-8">
          <NavLink scrollTo={() => scrollToSection('about', -56)} label="About" />
          <NavLink scrollTo={() => scrollToSection('services')} label="Services" />
          <NavLink scrollTo={() => scrollToSection('gallery', -56)} label="Gallery" />
          <NavLink scrollTo={() => scrollToSection('contact')} label="Contact" />
          <NavSocial link="https://www.instagram.com/360azwraps/" icon={<Instagram />} />
          <NavSocial link="https://www.tiktok.com/@kehvan" icon={<TikTok />} />
        </div>
      </div>
    </div>
  );
}
function NavSocial({ link, icon }: { link: string; icon: React.ReactNode }) {
  return (
    <div className="group/navsocial relative w-fit text-lg">
      <a href={link}>{icon}</a>
    </div>
  );
}

function NavLink({ scrollTo, label }: { scrollTo: () => void; label: string }) {
  return (
    <div className="group/navlink relative w-fit text-lg">
      <button className="" onClick={scrollTo}>
        {label}
      </button>
      <button
        className="absolute left-0 top-0 h-full w-full underline underline-offset-4 opacity-0 transition-opacity duration-300 ease-in-out group-hover/navlink:opacity-100"
        aria-hidden
        onClick={scrollTo}
      >
        {label}
      </button>
    </div>
  );
}
