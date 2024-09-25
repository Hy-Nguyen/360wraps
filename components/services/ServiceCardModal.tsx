'use client';

import { useServiceModal } from '@/lib/states';
import { motion } from 'framer-motion';
import { ModalCloseButton } from '../ui/ModalCloseButton';
import Image, { StaticImageData } from 'next/image';

export default function ServiceCardModal({
  id,
  title,
  description,
  longDescription,
  image,
}: {
  id: string;
  title: string;
  description: string;
  longDescription: string[];
  image: StaticImageData;
}) {
  const { closeModal } = useServiceModal();

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closeModal(id);
    }
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 flex h-screen w-screen items-center justify-center bg-black/50 backdrop-blur-sm"
      onClick={handleBackdropClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="relative flex w-full flex-row items-start justify-start gap-6 rounded-2xl bg-white p-8 xl:max-w-[50dvw]">
        <ModalCloseButton onClick={() => closeModal(id)} />

        <Image src={image} alt={title} className="aspect-square w-1/2 rounded-xl border border-gray-500 object-cover" />
        <div className="flex w-1/2 flex-col items-start justify-start gap-2">
          <h2 className="pb-6 text-4xl font-bold">{title}</h2>
          {longDescription.map((item, index) => (
            <p key={index} className="text-gray-600">
              {item}
            </p>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
