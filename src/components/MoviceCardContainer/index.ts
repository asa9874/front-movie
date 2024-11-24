import './movieCard.css';
import './movieCardContainer.css';

export function MoviceCardContainer(){
  document.querySelector(".main-container")!.innerHTML += `
  <div class="movie-container"></div>
  `;
}
