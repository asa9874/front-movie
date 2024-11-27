import { useEffect, useState } from "react";
import search_button from "../../assets/search_button.png";
import { global } from '../../globals/globals';
import { viewSearchMovie } from "../../movieView";
import './search.css';

function Search() {
  //검색상자,입력상태관리
  const [isSearchBoxVisible, setSearchBoxVisible] = useState(false);
  const [searchText, setSearchText] = useState("");

  //화면크기감지 등록
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
    setSearchBoxVisible((prev) => !prev);
  };

  //검색 
  //TODO: viewSearchMovie 바꿀예정
  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();
    global.searchString = searchText;
    global.searched = true;
    global.page = 1;
    viewSearchMovie(global.page, global.searchString);
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
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
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