import { motion, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Card(props: any) {
  const [style, setStyle] = useState({});

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setStyle({ top: `calc(10% + ${props.i * 2}px)` });
      } else {
        setStyle({ top: `calc(15% + ${props.i * 25}px)` });
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, [props.i]);

  const cardScale = useTransform(props.progress, props.range, [1, props.targetScale]);

  return (
    <div
      id={`member-card-${props.i}`}
      className={`sticky z-10 mx-auto flex h-fit w-full items-center justify-center py-72 sm:h-[25vh]`}
      style={style}
    >
      <motion.div
        id="card"
        className="relative flex h-fit w-full flex-col-reverse items-center justify-between gap-4 rounded-lg border border-black bg-zinc-400 p-2 sm:flex-row xl:aspect-video"
        style={{
          scale: cardScale,
        }}
      >
        <div className="group relative h-full w-full overflow-hidden">
          <Image src={props.image} alt={props.title} className="h-full w-full rounded-md object-cover" />
          <div className="absolute bottom-0 left-1/2 h-fit w-full -translate-x-1/2 translate-y-[4.5rem] rounded-b-md bg-gradient-to-t from-black to-transparent px-4 py-1 backdrop-blur-sm transition-all duration-300 ease-in-out group-hover:translate-y-0">
            <h1 className="text-2xl font-bold text-white">{props.title}</h1>
            <p className="text-lg text-white">{props.description}</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
