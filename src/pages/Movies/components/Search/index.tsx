import { useEffect, useState } from "react";
import search_button from "../../assets/search_button.png";
import './search.css';

interface GlobalState {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  searched: boolean;
  setSearched: React.Dispatch<React.SetStateAction<boolean>>;
  searchString: string;
  setSearchString: React.Dispatch<React.SetStateAction<string>>;
}

interface SearchProps {
  globalState: GlobalState; 
}


function Search({ globalState }: SearchProps) {
  const [isSearchBoxVisible, setSearchBoxVisible] = useState(false);
  useEffect(() => {
    //이벤트
    const handleResize = () => {
      if (window.innerWidth > 768) setSearchBoxVisible(true);
      else setSearchBoxVisible(false);
    };
    //이벤트등록
    window.addEventListener("resize", handleResize);
    handleResize(); 
    //이벤트제거(컴포넌트제거시)
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  //토글
  //TODO: 잘안됨
  const toggleSearchBox = () => {
    setSearchBoxVisible(prev => !prev);
  };

  //검색 
  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();
    globalState.setSearched(true);
    globalState.setPage(1);
  };


  //isSearchBoxVisible이 true일때만 검색박스보임
  return (
    <>
      {!isSearchBoxVisible && (
        <img className="search-toggle-button" src={search_button} onClick={toggleSearchBox}></img>
      )}
      {isSearchBoxVisible && (
        <form className="search-box" onSubmit={handleSearch}>
          <input
            className="search-input"
            type="text"
            placeholder="아바타"
            value={globalState.searchString}
            onChange={(e) => globalState.setSearchString(e.target.value)}
          />
          <button className="search-button" type="submit">
            <img src={search_button} alt="검색 버튼" />
          </button>
        </form>
      )}
    </>
  )
}

export default Search