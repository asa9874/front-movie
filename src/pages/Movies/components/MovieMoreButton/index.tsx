import './movieMoreButton.css';

interface GlobalState {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

interface MovieMoreButtonProps {
  globalState: GlobalState; 
}

function MovieMoreButton({ globalState }: MovieMoreButtonProps) {
    return (
      <>
        <button className="more-button" onClick={() =>globalState.setPage(globalState.page+1)}>더보기</button>
      </>
    )
    /*
    function moreMovie(){
      if(!global.searched) viewPopularMovie(++global.page);
      else viewSearchMovie(++global.page,global.searchString);
    }
    */
}

export default MovieMoreButton
  