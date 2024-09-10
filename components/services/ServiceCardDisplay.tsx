'use client';
import { useServiceCardHover } from '@/lib/states';
import { motion } from 'framer-motion';
import { ArrowLeftIcon } from 'lucide-react';

export default function ServiceCardDisplay() {
  const { isOpen, activeCard, openCard, closeCard } = useServiceCardHover();
  return (
    <motion.div
      className="min-w-full"
      initial={{ x: 0 }}
      animate={isOpen ? { x: '-100%' } : { x: 0 }}
      transition={{ duration: 1, ease: 'easeInOut' }}
    >
      <div className="relative flex h-fit w-full flex-row items-start justify-center gap-12 rounded-lg border border-black p-12">
        <button
          className="absolute left-2 top-2 flex size-4 items-center justify-center rounded-full bg-black p-4 text-white"
          onClick={closeCard}
        >
          {'<-'}
        </button>
        <div className="flex aspect-square h-auto w-1/2 flex-col items-center justify-center rounded-lg bg-black">
          <h1>{activeCard?.title}</h1>
        </div>
        <div className="flex h-full w-1/2 flex-col items-start justify-start gap-6">
          <h1 className="text-4xl font-bold">{activeCard?.title}</h1>
          <p className="text-lg">{activeCard?.description}</p>
        </div>
      </div>
    </motion.div>
  );
}
