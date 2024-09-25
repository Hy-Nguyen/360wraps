'use client';
import { useScroll } from 'framer-motion';
import { useRef } from 'react';
import { galleryList } from '@/lib/gallery';
import GalleryItems from '../GalleryItems';

export default function Gallery() {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });
  return (
    <section id="gallery" className="container relative flex w-[100dvw] justify-end gap-6">
      <div className="relative w-1/2">
        <div className="sticky top-1/2 my-64 flex -translate-y-1/2 flex-col gap-10">
          <h1 className="text-4xl font-bold">Gallery</h1>
          <p className="text-lg text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <p className="text-lg text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <p className="text-lg text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>
      <div id="container" className="relative w-1/2 py-[10dvh]" ref={container}>
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
