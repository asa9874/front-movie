import { create } from 'zustand';


interface GlobalState {
  page: number;
  setPage: (page: number) => void; 
  searched: boolean;
  setSearched: (searched: boolean) => void;
  searchString: string;
  setSearchString: (searchString: string) => void;
  searchClicked: boolean;
  setSearchClicked: (searchClicked: boolean) => void;
}

// zustand store
const useStore = create<GlobalState>((set) => ({
  page: 1,
  setPage: (page) => set({ page }),
  searched: false,
  setSearched: (searched) => set({ searched }),
  searchString: '',
  setSearchString: (searchString) => set({ searchString }),
  searchClicked: false,
  setSearchClicked: (searchClicked) => set({ searchClicked }),
}));


export { useStore };
