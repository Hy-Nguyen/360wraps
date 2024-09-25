'use client';

import FooterSocial from './FooterSocial';

import Instagram from '@/public/svg/Instagram';
import TikTok from '@/public/svg/TikTok';

export default function Footer() {
  return (
    <footer className="mt-16 flex w-screen max-w-[100dvw] flex-col overflow-hidden border-t border-gray-400 py-16">
      <div className="container flex flex-col items-start justify-between gap-6 lg:flex-row lg:gap-0">
        <div className="flex w-fit flex-col gap-6">
          <h1 className="text-4xl font-bold lg:text-5xl">360 Auto Concepts</h1>
          <p className="text-lg text-gray-600 lg:text-xl">Elevate Your Lifestyle</p>
          <p className="hidden text-sm text-gray-400 lg:block">Copyright 2024 &copy; 360 Auto Concepts</p>
        </div>
        <div className="flex flex-row items-start justify-between gap-24">
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
        <p className="text-sm text-gray-400 lg:hidden">Copyright 2024 &copy; 360 Auto Concepts</p>
      </div>
    </footer>
  );
}
