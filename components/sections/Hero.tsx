'use client';

import { scrollToSection } from '@/lib/utils';
import BGImage from '@/public/img/360hero.jpg';
import Image from 'next/image';

export default function Hero() {
  return (
    <section
      id="hero"
      className="flex h-[100dvh] w-[100dvw] max-w-[100dvw] flex-col items-start justify-center bg-black lg:w-screen lg:max-w-[100vw] lg:justify-center"
    >
      <Image
        src={BGImage}
        alt="Background"
        className="absolute left-1/2 h-full w-[100dvw] -translate-x-1/2 object-cover"
      />

      <div className="absolute bottom-0 left-0 z-0 flex h-fit w-full flex-col gap-6 bg-black/50 px-4 py-4 text-white backdrop-blur-sm lg:bottom-10 lg:w-fit lg:px-6">
        <div className="flex w-fit flex-col gap-4 border-l-[6px] border-white pl-4 lg:gap-6 lg:border-l-8">
          <h1 className="w-fit text-4xl font-bold text-white lg:text-5xl">Elevate Your Lifestlye</h1>
          <p className="w-full text-lg text-white lg:w-3/4 lg:text-xl">
            Enhance your driving experience with tailored wraps that turn heads and protect your vehicle.
          </p>
        </div>
        <div className="z-0 flex w-full gap-6 lg:w-1/2">
          <button
            onClick={() => scrollToSection('about', -56)}
            className="w-1/2 rounded-full bg-white px-6 py-2 text-black transition-all duration-500 ease-in-out hover:scale-105 hover:bg-gray-300 lg:w-fit"
          >
            Learn More
          </button>
          <button
            onClick={() => scrollToSection('contact', 56)}
            className="w-1/2 rounded-full bg-white px-6 py-2 text-black transition-all duration-500 ease-in-out hover:scale-105 hover:bg-gray-300 lg:w-fit"
          >
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}

{
  /* <div className="container flex h-full w-full flex-col justify-between gap-10 pb-10 pt-20 lg:h-auto lg:gap-20 lg:pb-0 lg:pt-0">
  <div className="z-0 flex h-fit w-full flex-col gap-4 border-l-8 border-black px-4 lg:w-1/2 lg:border-white lg:px-10">
    <h1 className="text-4xl font-bold text-black lg:text-5xl lg:text-white">ELEVATE YOUR LIFESTYLE</h1>
    <p className="w-full text-xl text-black lg:w-3/4 lg:text-white">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
    </p>
  </div>
  <div className="z-0 flex w-full gap-6 lg:w-1/2">
    <button
      onClick={() => scrollToSection('about', -56)}
      className="w-1/2 rounded-full bg-black px-6 py-2 text-white transition-all duration-500 ease-in-out hover:scale-105 hover:bg-gray-300 lg:w-fit lg:bg-white lg:text-black"
    >
      Learn More
    </button>
    <button
      onClick={() => scrollToSection('contact', 56)}
      className="w-1/2 rounded-full bg-black px-6 py-2 text-white transition-all duration-500 ease-in-out hover:scale-105 hover:bg-gray-300 lg:w-fit lg:bg-white lg:text-black"
    >
      Contact Us
    </button>
  </div>
</div>; */
}
