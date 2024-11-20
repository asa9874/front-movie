import './search.css';

document.querySelector("header")!.innerHTML += `
<img class="search-toggle-button">
<form class="search-box">
    <input class="search-input" type="text" placeholder="아바타" id="search-text" name="search-text">
    <img class="search-button" type="submit">
</form>
`


