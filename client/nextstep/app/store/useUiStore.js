import { create } from "zustand";
import { Book, Target, CheckCircle } from "lucide-react";

const useUiStore = create((set, get) => ({
  options: [
    {
      id: 1,
      icon: Book,
      label: "Content",
    },
    {
      id: 2,
      icon: Target,
      label: "Excersice",
    },
    {
      id: 3,
      icon: CheckCircle,
      label: "Quiz",
    },
  ],
  selectedOption: 1,

  setOptions: (optionID) => {
    set({ selectedOption: optionID });
  },
}));

export default useUiStore;
