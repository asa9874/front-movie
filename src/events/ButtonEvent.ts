const $moreButton= document.getElementsByClassName("more-button")[0];
const $movieContainer= document.getElementsByClassName("movie-container")[0];
const $searchButton= document.getElementsByClassName("search-button")[0];
const $searchInput= document.getElementsByClassName("search-input")[0] as HTMLInputElement;


import { viewPopularMovie, viewSearchMovie } from "../views/movieView";
let page=1;
let searched=false;
let searchString="";
$moreButton.addEventListener("click",()=>{
    if(!searched) viewPopularMovie(++page);
    else viewSearchMovie(++page,searchString);
});

$searchButton.addEventListener("click",(event)=>{
    event.preventDefault();
    $movieContainer.innerHTML=``;
    searchString=$searchInput.value;
    searched=true;
    page=1;
    viewSearchMovie(page,searchString);
});