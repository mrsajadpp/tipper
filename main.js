
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
