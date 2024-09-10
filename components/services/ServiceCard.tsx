'use client';

import { useServiceCardHover, useServiceModal } from '@/lib/states';
import { AnimatePresence, motion } from 'framer-motion';
import ServiceCardModal from './ServiceCardModal';

export default function ServiceCard({ id, title, description }: { id: string; title: string; description: string }) {
  const { openModals, openModal, closeModal } = useServiceModal();
  const isOpen = openModals[id] || false;
  return (
    <>
      <div className="group relative aspect-square w-full hover:cursor-pointer" onClick={() => openModal(id)}>
        <div className="absolute inset-2 z-0 h-full w-full rounded-lg bg-black" />
        <div className="relative z-10 flex h-full w-full flex-col items-center justify-center rounded-lg border border-black bg-white p-4 transition-all duration-300 ease-in-out group-hover:-translate-x-4 group-hover:-translate-y-4">
          <h2 className="text-2xl font-bold text-black">{title}</h2>
          <p className="text-gray-700">{description}</p>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && <ServiceCardModal id={id} title={title} description={description} />}
      </AnimatePresence>
    </>
  );
}

export function ServiceCardHover({ title, description }: { title: string; description: string }) {
  const { isOpen, activeCard, openCard, closeCard } = useServiceCardHover();

  function handleClick() {
    isOpen ? closeCard() : openCard(title, description);
  }
  return (
    <motion.div
      className={`group aspect-square w-full hover:cursor-pointer`}
      onClick={handleClick}
      initial={{ x: 0 }}
      animate={isOpen ? { x: '-100vw' } : { x: 0 }}
      transition={{ duration: 1, ease: 'easeInOut' }}
    >
      <div className="group relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg border border-black bg-white p-4 transition-all duration-300 ease-in-out">
        <div className="absolute inset-0 z-0 h-full w-full rounded-lg opacity-0 backdrop-blur-sm transition-all duration-300 ease-in-out group-hover:opacity-100" />
        <h2 className="text-2xl font-bold text-black">{title}</h2>
        <div className="absolute -bottom-20 flex flex-col items-center justify-center gap-2 px-10 text-center font-medium text-gray-700 transition-all duration-500 ease-in-out group-hover:bottom-4">
          <p>{description}</p>
          <div className="group/learn-more relative w-fit text-xl">
            <p>Learn More →</p>{' '}
            <div className="absolute bottom-0 h-0.5 w-0 max-w-full bg-black transition-all duration-500 ease-in-out group-hover/learn-more:w-[150px]" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
