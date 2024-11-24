import { MoviceCardContainer } from '../MoviceCardContainer';
import { MovieMoreButton } from '../MovieMoreButton';
import './movie.css';

export function MovieMaincontainer(){
  document.querySelector("#app")!.innerHTML += `
  <div class="main-container">
    <p class="main-title">지금 인기있는 영화</p>
  </div>
  `;

  MoviceCardContainer();
  MovieMoreButton();
}
