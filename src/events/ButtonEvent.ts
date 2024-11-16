const $moreButton= document.getElementsByClassName("more-button")[0];
const $movieContainer= document.getElementsByClassName("movie-container")[0];
const $searchButton= document.getElementsByClassName("search-button")[0];

import { viewMovies } from "../views/movieView";
let page=1;
$moreButton.addEventListener("click",()=>{
    viewMovies(++page);
});

$searchButton.addEventListener("click",()=>{
    page=1;
    viewMovies(page);
});