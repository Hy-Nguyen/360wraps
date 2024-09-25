'use client';

import ThreeM from '@/public/svg/3M';
import Avery from '@/public/svg/Avery';
import TinyBotLogo from '@/public/svg/TinyBotLogo';
import { motion } from 'framer-motion';

export default function Wraps() {
  return (
    <section id="services" className="flex w-[100dvw] flex-col items-center justify-center bg-gray-300">
      <div className="marquee-fade container flex h-full w-full select-none flex-row items-center overflow-x-hidden px-6 py-4 lg:px-8 lg:py-6">
        {/* Scroller Content */}
        <motion.div
          initial={{ x: 0 }}
          animate={{
            translateX: `calc(-50% - 4.5rem)`,
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="flex w-fit flex-nowrap items-center gap-36"
        >
          <div className="w-[120px]">
            <ThreeM />
          </div>
          <div className="w-[120px]">
            <Avery />
          </div>
          <div className="w-[120px]">
            <CheetahWrap />
          </div>
          <div className="w-[120px]">
            <TinyBotLogo />
          </div>
          <div className="w-[120px]">
            <VinylFrog />
          </div>
          <div className="w-[120px]" aria-hidden>
            <ThreeM />
          </div>
          <div className="w-[120px]" aria-hidden>
            <Avery />
          </div>
          <div className="w-[120px]" aria-hidden>
            <CheetahWrap />
          </div>
          <div className="w-[120px]" aria-hidden>
            <TinyBotLogo />
          </div>
          <div className="w-[120px]" aria-hidden>
            <VinylFrog />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function CheetahWrap() {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src="/img/cheetahwrap.png" alt="Cheetah Wrap" className="h-auto w-[120px] scale-150" />
  );
}

function VinylFrog() {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src="/img/VinylFrogLogo.png" alt="Vinyl Frog" className="h-auto w-[120px] scale-150" />
  );
}
