'use client';
import { galleryList } from '@/lib/gallery';
import { useScroll } from 'framer-motion';
import { useRef } from 'react';
import GalleryItems from '../GalleryItems';

export default function Gallery() {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });
  return (
    <section
      id="gallery"
      className="container relative flex w-[100dvw] flex-col justify-end gap-10 px-6 lg:flex-row lg:px-8"
    >
      <div className="relative w-full lg:w-1/2">
        <div className="flex flex-col gap-6 lg:sticky lg:top-1/2 lg:mt-96 lg:-translate-y-1/2 lg:gap-10">
          <h1 className="text-4xl font-bold">Gallery</h1>
          <p className="text-lg text-gray-500">
            Explore our stunning gallery of car wrap transformations. From sleek matte finishes to eye-catching custom
            designs, we&apos;ve given vehicles a whole new look.
          </p>

          <p className="text-lg text-gray-500">
            We pride ourselves on using premium materials and cutting-edge techniques to ensure durability and a
            flawless finish on every vehicle we touch.
          </p>
          <p className="text-lg text-gray-500">
            From subtle color changes to bold graphic designs, our gallery demonstrates our ability to bring any vision
            to life. We work closely with each client to achieve their desired aesthetic.
          </p>
          <p className="text-lg text-gray-500">
            Whether you&apos;re looking to protect your car&apos;s original paint, make a statement on the road, or
            rebrand your business fleet, our gallery offers inspiration for your next car wrap project.
          </p>
        </div>
      </div>
      <div className="relative w-full lg:w-1/2 lg:py-[10dvh]" ref={container}>
        {galleryList.map((item, i) => {
          const targetScale = 1 - (galleryList.length - i) * 0.05;
          return (
            <GalleryItems
              key={i}
              i={i}
              {...item}
              progress={scrollYProgress}
              range={[i * (1 / galleryList.length), 1]}
              targetScale={targetScale}
            />
          );
        })}
      </div>
    </section>
  );
}
