import { create } from 'zustand';

type ServiceModalStore = {
  openModals: { [key: string]: boolean };
  openModal: (id: string) => void;
  closeModal: (id: string) => void;
};

export const useServiceModal = create<ServiceModalStore>((set) => ({
  openModals: {},
  openModal: (id) => set((state) => ({ openModals: { ...state.openModals, [id]: true } })),
  closeModal: (id) => set((state) => ({ openModals: { ...state.openModals, [id]: false } })),
}));
