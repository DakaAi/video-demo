import { create } from "zustand";

type State = {
  search: string;
  selectedModel: string | null;
};

type Actions = {
  setSearch: (search: string) => void;
  setSelectedModel: (selectedModel: string | null) => void;
};

const initialState: State = {
  search: "",
  selectedModel: null,
};

const useGlobalStore = create<State & Actions>((set) => ({
  ...initialState,
  setSearch: (search) => set({ search }),
  setSelectedModel: (selectedModel) => set({ selectedModel }),
}));

export default useGlobalStore;
