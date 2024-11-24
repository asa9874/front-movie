import './movieMoreButton.css';

export function MovieMoreButton(){
  document.querySelector(".main-container")!.innerHTML += `
  <div class="main-container">
    <button class="more-button">더보기</button>
  </div>
  `;
}

  