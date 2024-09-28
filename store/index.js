import { create } from "zustand";

const useStore = create((set) => ({
  isOnboardingActive: false,
  setIsOnBoardingStatus: (isOnboardingStatus) => {
    set((state) => ({ isOnboardingActive: isOnboardingStatus }));
  },
}));

export default useStore;
