import { getMovieAPi } from "../apis/getMovieApis";

const $movieContainer= document.getElementsByClassName("movie-container")[0];


export async function viewMovies(page: number) {
    const movies = await getMovieAPi(page);
    console.log(movies);  // 비동기적으로 받아온 영화 목록
    movies.forEach(movie => {
        $movieContainer.innerHTML+=
        `<div class="movie-card">
            <img class="movie-img" src="${movie.backdrop_path}">
            <p class="movie-title">${movie.title}</p>
            <p class="movie-rating">${movie.vote_average}<img class="star"></p>
        </div>`
    });
}

