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

type ServiceCardHoverStore = {
  isOpen: boolean;
  activeCard: {
    title: string;
    description: string;
  } | null;
  openCard: (title: string, description: string) => void;
  closeCard: () => void;
};

export const useServiceCardHover = create<ServiceCardHoverStore>((set) => ({
  isOpen: false,
  activeCard: null,
  openCard: (title, description) =>
    set(() => ({
      isOpen: true,
      activeCard: { title, description },
    })),
  closeCard: () =>
    set(() => ({
      isOpen: false,
      activeCard: null,
    })),
}));
export const useServiceCardHover2 = create<ServiceCardHoverStore>((set) => ({
  isOpen: false,
  activeCard: null,
  openCard: (title, description) =>
    set(() => ({
      isOpen: true,
      activeCard: { title, description },
    })),
  closeCard: () =>
    set(() => ({
      isOpen: false,
      activeCard: null,
    })),
}));
