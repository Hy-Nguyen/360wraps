'use client';

import { useServiceModal } from '@/lib/states';
import { motion } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';
import { ModalCloseButton } from '../ui/ModalCloseButton';

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
      className="fixed inset-0 z-50 flex h-screen w-screen items-center justify-center bg-black/50 px-4 backdrop-blur-sm lg:px-0"
      onClick={handleBackdropClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="relative flex w-full flex-col-reverse items-start justify-start gap-6 rounded-lg bg-white p-8 lg:flex-row xl:max-w-[65dvw]">
        <ModalCloseButton onClick={() => closeModal(id)} />
        <Image
          src={image}
          alt={title}
          className="aspect-square w-full overflow-hidden rounded-md border border-gray-500 object-cover lg:w-3/5"
        />
        <div className="flex w-full flex-col items-start justify-start gap-2 lg:w-2/5 lg:gap-4">
          <h2 className="w-full text-center text-4xl font-bold lg:w-fit lg:pb-4 lg:text-start">{title}</h2>
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
