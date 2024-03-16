import { modelModes } from '@/components/ui/avatar';
import create from 'zustand';

type ModelMode = {
  i: number;
  next: () => void;
  get: () => string;
};

const useModelMode = create<ModelMode>((set, get) => ({
  i: 0,
  next: () => {
    set((state) => ({ i: state.i + 1 }));
  },
  get: () => modelModes[get().i % modelModes.length],
}));

export default useModelMode;