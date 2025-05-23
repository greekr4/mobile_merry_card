import { create } from "zustand";

// zustand store 생성
interface NavBarState {
  miniMode: boolean;
  setMiniMode: (v: boolean) => void;
}
export const useNavBarStore = create<NavBarState>((set) => ({
  miniMode: false,
  setMiniMode: (v) => set({ miniMode: v }),
}));
