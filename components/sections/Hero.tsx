'use client';

import BGImage from '@/public/img/360hero.jpg';
import Image from 'next/image';
import { scrollToSection } from '@/lib/utils';

export default function Hero() {
  return (
    <section id="hero" className="flex h-[100dvh] w-[100dvw] flex-col items-start justify-center gap-20 bg-black">
      <Image
        src={BGImage}
        alt="Background"
        className="absolute left-1/2 h-full w-[100dvw] -translate-x-1/2 object-cover"
      />
      <div className="container flex w-full flex-col gap-20">
        <div className="z-0 flex h-fit w-1/2 flex-col gap-4 border-l-8 px-10">
          <h1 className="text-5xl font-bold text-white">ELEVATE YOUR LIFESTYLE</h1>
          <p className="w-3/4 text-xl text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
          </p>
          <p className="w-3/4 text-xl text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
          </p>
        </div>
        <div className="z-0 flex w-1/2 gap-6">
          <button
            onClick={() => scrollToSection('about', -56)}
            className="w-fit rounded-full bg-white px-6 py-2 text-black transition-all duration-500 ease-in-out hover:scale-105 hover:bg-gray-300"
          >
            Learn More
          </button>
          <button
            onClick={() => scrollToSection('contact', 56)}
            className="w-fit rounded-full bg-white px-6 py-2 text-black transition-all duration-500 ease-in-out hover:scale-105 hover:bg-gray-300"
          >
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}
