import React, { createContext, useState, useContext, ReactNode } from 'react';

// Context 생성
// GlobalState는 전역에서 관리할 상태들을 정의하는 인터페이스
interface GlobalState {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  searched: boolean;
  setSearched: React.Dispatch<React.SetStateAction<boolean>>;
  searchString: string;
  setSearchString: React.Dispatch<React.SetStateAction<string>>;
  searchClicked: boolean;
  setSearchClicked: React.Dispatch<React.SetStateAction<boolean>>; // 이 부분을 확인!
}

// createContext를 사용하여 전역 상태를 관리할 Context를 생성
const GlobalStateContext = createContext<GlobalState | undefined>(undefined);

// Provider 컴포넌트
interface GlobalStateProviderProps {
    // children은 이 Provider로 감싸는 컴포넌트들을 의미
    // ReactNode는 리액트에서 사용하는 모든 타입을 의미
    children: ReactNode;
}

const GlobalStateProvider: React.FC<GlobalStateProviderProps> = ({ children }) => {
  const [page, setPage] = useState<number>(1);
  const [searched, setSearched] = useState<boolean>(false);
  const [searchClicked, setSearchClicked] = useState<boolean>(false);  // 이 부분을 확인!
  const [searchString, setSearchString] = useState<string>('');

  const globalState = {
    page,
    setPage,
    searched,
    setSearched,
    searchString,
    setSearchString,
    searchClicked,
    setSearchClicked,
  };

  // GlobalStateContext.Provider를 사용하여 globalState를 하위 컴포넌트들에 제공
  return (
    <GlobalStateContext.Provider value={globalState}>
      {children}
    </GlobalStateContext.Provider>
  );
};

//커스텀 훅
//하위 컴포넌트에서 context에 저장된 상태를 가져옴
const useGlobalState = (): GlobalState => {
  const context = useContext(GlobalStateContext);
  if (!context) {
    throw new Error('useGlobalState must be used within a GlobalStateProvider');
  }
  return context;
};

export { GlobalStateProvider, useGlobalState };
