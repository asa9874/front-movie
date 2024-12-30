import { useEffect, useState } from "react";
import search_button from "../../assets/search_button.png";
import styles from './search.module.css'

interface GlobalState {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  searched: boolean;
  setSearched: React.Dispatch<React.SetStateAction<boolean>>;
  searchString: string;
  setSearchString: React.Dispatch<React.SetStateAction<string>>;
  searchClicked : boolean;
  setsearchClicked: React.Dispatch<React.SetStateAction<boolean>>;
}

interface SearchProps {
  globalState: GlobalState; 
}


function Search({ globalState }: SearchProps) {
  const [isSearchBoxVisible, setSearchBoxVisible] = useState(false);
  const [inputString, setInputString] = useState(String);
  const [Test, setTest] = useState(1);
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
  const toggleSearchBox = () => {
    setSearchBoxVisible(prev => !prev);
  };

  //검색 
  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(Test);
    setTest(prev=>prev+1);
    console.log("searchClicked: 변경")
    globalState.setsearchClicked(prev => !prev);
    if(inputString!=""){
      globalState.setSearched(true);
      globalState.setPage(1);
      globalState.setSearchString(inputString);
    }
    else{
      globalState.setSearched(false);
      globalState.setSearchString("");
    }
  };


  //isSearchBoxVisible이 true일때만 검색박스보임
  return (
    <>
      {!isSearchBoxVisible && (
        <img className={styles.searchtogglebutton} src={search_button} onClick={toggleSearchBox}></img>
      )}
      {isSearchBoxVisible && (
        <form className={styles.searchbox}>
          <input
            className={styles.searchinput}
            type="text"
            placeholder="아바타"
            value={inputString}
            onChange={(e) => setInputString(e.target.value)}
          />
          <button className={styles.searchbutton} onClick={handleSearch}>
            <img src={search_button} alt="검색 버튼" />
          </button>
        </form>
      )}
    </>
  )
}

export default Search