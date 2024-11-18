const $moreButton= document.getElementsByClassName("more-button")[0];
const $movieContainer= document.getElementsByClassName("movie-container")[0];
const $searchButton= document.getElementsByClassName("search-button")[0];
const $searchInput= document.getElementsByClassName("search-input")[0] as HTMLInputElement;

const searchToggleButton=document.querySelector('.search-toggle-button')as HTMLInputElement;
const searchBox=document.querySelector('.search-box')as HTMLInputElement;

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

searchToggleButton.addEventListener('click', () => {
    if (searchBox.style.display === 'none' || searchBox.style.display === '') {
        searchBox.style.display = 'flex';
    } else {
        searchBox.style.display = 'none';
    }
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        searchBox.style.display = 'flex'; 
    } else {
        searchBox.style.display = 'none';
    }
});