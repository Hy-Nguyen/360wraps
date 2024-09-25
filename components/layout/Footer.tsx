'use client';

import { scrollToSection } from '@/lib/utils';
import FooterLink from './footer/FooterLink';
import FooterSocial from './footer/FooterSocial';

import Instagram from '@/public/svg/Instagram';
import TikTok from '@/public/svg/TikTok';

export default function Footer() {
  return (
    <footer className="flex w-screen max-w-[100dvw] flex-col overflow-hidden py-16">
      <div className="container flex flex-row items-start justify-between">
        <div className="flex w-fit flex-col gap-6">
          <h1 className="text-5xl font-bold">360 Auto Concepts</h1>
          <p className="text-xl text-gray-600">Elevate Your Lifestyle</p>
        </div>
        <div className="flex flex-row items-start justify-between gap-24">
          <div className="flex flex-col items-start justify-start gap-4">
            <h1 className="w-full text-2xl font-semibold">Sections</h1>
            <div className="flex flex-col gap-4">
              <FooterLink label="Home" scrollTo={() => scrollToSection('hero')} />
              <FooterLink label="About Us" scrollTo={() => scrollToSection('about')} />
              <FooterLink label="Services" scrollTo={() => scrollToSection('services')} />
              <FooterLink label="Gallery" scrollTo={() => scrollToSection('gallery')} />
              <FooterLink label="Contact Us" scrollTo={() => scrollToSection('contact')} />
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-4">
            <h1 className="w-full text-2xl font-semibold">Socials</h1>
            <div className="flex flex-col gap-4">
              <FooterSocial
                label="Instagram"
                link="https://www.instagram.com/360azwraps/"
                icon={<Instagram className="text-black" />}
              />
              <FooterSocial
                label="TikTok"
                link="https://www.tiktok.com/@kehvan"
                icon={<TikTok className="text-black" />}
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
