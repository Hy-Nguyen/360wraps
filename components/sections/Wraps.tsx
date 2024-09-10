'use client';

import ThreeM from '@/public/svg/3M';
import Avery from '@/public/svg/Avery';
import { motion } from 'framer-motion';

export default function Wraps() {
  return (
    <div className="flex w-[100dvw] flex-col items-center justify-center bg-gray-600">
      <div className="marquee-fade flex h-full w-full select-none flex-row items-center overflow-x-hidden py-3 md:py-6 xl:w-1/2">
        {/* Scroller Content */}
        <motion.div
          initial={{ x: 0 }}
          animate={{
            translateX: `calc(-50% - 4.5rem)`,
          }}
          transition={{
            duration: 8,
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
          <div className="w-[120px]" aria-hidden>
            <ThreeM />
          </div>
          <div className="w-[120px]" aria-hidden>
            <Avery />
          </div>
          <div className="w-[120px]" aria-hidden>
            <CheetahWrap />
          </div>{' '}
          <div className="w-[120px]" aria-hidden>
            <ThreeM />
          </div>
          <div className="w-[120px]" aria-hidden>
            <Avery />
          </div>
          <div className="w-[120px]" aria-hidden>
            <CheetahWrap />
          </div>{' '}
          <div className="w-[120px]" aria-hidden>
            <ThreeM />
          </div>
          <div className="w-[120px]" aria-hidden>
            <Avery />
          </div>
          <div className="w-[120px]" aria-hidden>
            <CheetahWrap />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function CheetahWrap() {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src="/img/cheetahwrap.png" alt="Cheetah Wrap" className="h-auto w-[120px] scale-150" />
  );
}
