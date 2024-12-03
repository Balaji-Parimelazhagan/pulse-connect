import { create } from "zustand";

const useStore = () => {
  const useSurveyStore = create((set) => ({
    value: [],
    setValue: () => set((newValue: any) => ({ value: newValue })),
    selectedSurvey: {},
    setSelectedSurvey: () =>
      set((newValue: any) => ({ selectedSurvey: newValue })),
  }));

  const useDisputeStore = create((set) => ({
    value: [],
    setValue: () => set((newValue: any) => ({ value: newValue })),
  }));

  const useActionItemStore = create((set) => ({
    value: [],
    setValue: () => set((newValue: any) => ({ value: newValue })),
  }));

  return { useSurveyStore, useDisputeStore, useActionItemStore };
};

export default useStore;
