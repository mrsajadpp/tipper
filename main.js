const searchInput = document.querySelector('.search-bar');
const searchBtn = document.querySelector('.search-btn');
let searchLink = "https://www.google.com/search?q=";
searchBtn.addEventListener('click', () => {
    if(searchInput.value.length){
        location.href = searchLink + searchInput.value;
    }
})

const menu = document.querySelector('#menu');
const sidebar = document.querySelector('.sidebar');
menu.addEventListener('click', function() {
    sidebar.classList.toggle('show-sidebar');
})
var loader = document.querySelector(".loader")

window.addEventListener("load", vanish);

function vanish() {
  loader.classList.add("disppear");
}