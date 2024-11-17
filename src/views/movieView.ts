import { getMovie, getSearchMovie } from "../apis/getMovieApis";
import { Movie } from "../types/movie";
const star: any = require('../assets/star.svg');

const $movieContainer= document.getElementsByClassName("movie-container")[0];

export async function viewSearchMovie(page: number, searchString: string) {
    const movies = await getSearchMovie(page,searchString);
    viewMovies(movies)
}

export async function viewPopularMovie(page: number) {
    const movies = await getMovie(page);
    viewMovies(movies)
}
    

export function viewMovies(movies: Movie[]) {
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

