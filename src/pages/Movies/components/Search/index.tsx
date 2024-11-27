import search_button from "../../assets/search_button.png";
import { global } from '../../globals/globals';
import { viewSearchMovie } from "../../movieView";
import './search.css';

function Search() {
  return (
    <>
        <img className="search-toggle-button" src={search_button} onClick={searchToggle}></img>
        <form className="search-box">
          <input className="search-input" type="text" placeholder="아바타" id="search-text" name="search-text"></input>
          <img className="search-button" src={search_button} onClick={search}></img>
        </form>
    </>
  )
}

export default Search

function search(event:any) {
  event.preventDefault();
  const $movieContainer= document.getElementsByClassName("movie-container")[0];
  const $searchInput= document.getElementsByClassName("search-input")[0] as HTMLInputElement;
  $movieContainer.innerHTML=``;
  global.searchString=$searchInput.value;
  global.searched=true;
  global.page=1;
  
  viewSearchMovie(global.page,global.searchString);
}

function searchToggle(){
  const searchBox=document.querySelector('.search-box')as HTMLInputElement;
  if (searchBox.style.display === 'none' || searchBox.style.display === '') {
    searchBox.style.display = 'flex';
} else {
    searchBox.style.display = 'none';
}
}

window.addEventListener('resize', () => {
  const searchBox=document.querySelector('.search-box')as HTMLInputElement;
  if (window.innerWidth > 768) {
      searchBox.style.display = 'flex'; 
  } else {
      searchBox.style.display = 'none';
  }
});