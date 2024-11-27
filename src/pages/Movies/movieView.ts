import { getMovie, getSearchMovie } from "./apis/getMovieApis";
import star from "./assets/star.svg";
import { Movie } from "./types/movie";


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

