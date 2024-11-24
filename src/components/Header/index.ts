import { Search } from "../Search/index";
import './header.css';


export function Header(){
  document.querySelector("#app")!.innerHTML = `
  <header>
    <img class="logo"/>
  </header>
  `;

  Search();
}


