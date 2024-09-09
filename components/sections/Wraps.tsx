'use client';

import Avery from '@/public/svg/Avery';
import ThreeM from '@/public/svg/3M';
import { motion } from 'framer-motion';

export default function Wraps() {
  return (
    <div className="flex w-screen flex-col items-center justify-center bg-gray-600">
      <div className="logo-fade marquee-fade flex h-full w-full select-none flex-row items-center space-x-[12px] overflow-x-hidden px-2 py-3 md:py-6 xl:max-w-[50dvw]">
        {/* Scroller Content */}
        <motion.div
          initial={{ x: 0 }}
          animate={{
            translateX: `calc(-50% - 80px)`,
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="flex w-fit flex-nowrap gap-40"
        >
          <Avery />
          <ThreeM />
          <Avery />
          <CheetahWrap />
          <ThreeM />
          <Avery />
          <ThreeM />
          <Avery />
          <ThreeM />
        </motion.div>
      </div>
    </div>
  );
}

function CheetahWrap() {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src="/img/cheetahwrap.png" alt="Cheetah Wrap" className="h-10" />
  );
}
