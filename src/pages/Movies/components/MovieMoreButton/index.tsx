import { global } from '../../globals/globals';
import { viewPopularMovie, viewSearchMovie } from '../../movieView';
import './movieMoreButton.css';
function MovieMoreButton() {
  moreMovie();
    return (
      <>
        <button className="more-button" onClick={moreMovie}>더보기</button>
      </>
    )
    
    function moreMovie(){
      if(!global.searched) viewPopularMovie(++global.page);
      else viewSearchMovie(++global.page,global.searchString);
    }
}

export default MovieMoreButton
  