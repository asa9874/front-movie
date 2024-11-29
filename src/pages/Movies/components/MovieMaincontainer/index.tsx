import MovieCardContainer from '../MoviceCardContainer'
import MovieMoreButton from '../MovieMoreButton'
import './movie.css'

import { getMovie, getSearchMovie } from "../../apis/getMovieApis"
import star from "../../assets/star.svg"
import { Movie } from "../../types/movie"


interface GlobalState {
    page: number;
    setPage: React.Dispatch<React.SetStateAction<number>>;
    searched: boolean;
    setSearched: React.Dispatch<React.SetStateAction<boolean>>;
    searchString: string;
    setSearchString: React.Dispatch<React.SetStateAction<string>>;
}
  
interface MovieMainContainerProps {
    globalState: GlobalState; 
}


function MovieMainContainer({ globalState }: MovieMainContainerProps) {
    return (
      <>    
        <div className="main-container">
            {(globalState.searched) && (
                <p className="main-title">"{globalState.searchString}" 검색결과</p>
            )}
            {(!globalState.searched) && (
                <p className="main-title">지금 인기있는 영화</p>
            )}
            <MovieCardContainer globalState={globalState}></MovieCardContainer>
            <MovieMoreButton globalState={globalState}></MovieMoreButton>
        </div>
      </>
    )
}

export default MovieMainContainer





export async function viewSearchMovie(page: number, searchString: string) {
    const $movieContainer= document.getElementsByClassName("movie-container")[0] as HTMLElement;
    const movies = await getSearchMovie(page,searchString);
    const $mainTitle=document.getElementsByClassName("main-title")[0] as HTMLElement;
    $movieContainer.innerHTML=""
    $mainTitle.textContent=`"${searchString}" 검색결과`
    viewMovies(movies)
}

export async function viewPopularMovie(page: number) {
    const movies = await getMovie(page);
    viewMovies(movies)
}


export function viewMovies(movies: Movie[]) {
    const $movieContainer= document.getElementsByClassName("movie-container")[0] as HTMLElement;
    const $moreButton=document.getElementsByClassName("more-button")[0] as HTMLElement;
    if(movies.length<20) $moreButton.style.display = 'none';
    else $moreButton.style.display = 'block';
    console.log(movies);  // 비동기적으로 받아온 영화 목록
    movies.forEach(movie => {
        $movieContainer.innerHTML+=
        `<div class="movie-card">
            <img class="movie-img" src="${movie.backdrop_path}">
            <p class="movie-title">${movie.title}</p>
            <p class="movie-rating">${movie.vote_average}<img class="star" src=${star}></p>
        </div>`
    });
}

