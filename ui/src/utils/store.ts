import { create } from "zustand";

const useStore = () => {
  const useSurveyStore = create((set) => ({
    value: undefined,
    setValue: () => set((newValue: any) => ({ value: newValue })),
  }));

  const useDisputeStore = create((set) => ({
    value: undefined,
    setValue: () => set((newValue: any) => ({ value: newValue })),
  }));

  const useActionItemStore = create((set) => ({
    value: undefined,
    setValue: () => set((newValue: any) => ({ value: newValue })),
  }));

  return { useSurveyStore, useDisputeStore, useActionItemStore };
};

export default useStore;
