'use client';
import AboutUsImg from '@/public/img/AboutUs.jpg';
import Image from 'next/image';
import { scrollToSection } from '@/lib/utils';

export default function AboutUs2() {
  return (
    <section id="about" className="flex h-screen w-screen flex-col items-center justify-center py-32 text-black">
      <Image
        src={AboutUsImg}
        alt="Tesla Model S Matte Black"
        className="aspect-square h-screen w-screen object-cover"
      />
    </section>
  );
}
function Save() {
  return (
    <div className="container flex flex-col gap-8 bg-[#f8f8ff] px-6 py-8 lg:flex-row lg:gap-16 lg:px-8">
      <div className="flex w-full flex-col gap-6 lg:w-1/2 lg:gap-12">
        <h1 className="text-4xl font-bold">Phoenix&apos;s Trusted Vinyl Wrap Services </h1>
        <p className="text-xl font-light">
          Visit 360 Auto Concepts for top-tier vinyl wraps that will transform your vehicle with precision and style.
        </p>
        <div className="h1:m-0 flex flex-col gap-4">
          <h1 className="text-4xl font-bold">Free Wrap Consultation </h1>
        </div>
        <p className="text-xl font-light">
          Not sure which vinyl wrap is right for your car? No worries. At 360 Auto Concepts, our team has a keen eye for
          design and detail. Schedule a consultation, and we&apos;ll guide you through all your options, ensuring
          you&apos;re thrilled with your choice.
        </p>
        <button className="w-fit rounded-full bg-black px-6 py-2 text-white" onClick={() => scrollToSection('contact')}>
          Schedule A Visit
        </button>
      </div>
    </div>
  );
}
