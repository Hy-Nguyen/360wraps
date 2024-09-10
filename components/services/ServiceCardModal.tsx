import { useServiceModal } from '@/lib/states';

export default function ServiceCardModal({
  id,
  title,
  description,
}: {
  id: string;
  title: string;
  description: string;
}) {
  const { closeModal } = useServiceModal();

  return (
    <div className="fixed inset-0 z-20 flex h-screen w-screen items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="relative w-full max-w-lg rounded-lg bg-white p-4">
        <button onClick={() => closeModal(id)}>close</button>
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
}
