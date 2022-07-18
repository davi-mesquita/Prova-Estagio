var btnMenu = document.getElementsByClassName("btn-menu");
var Menu = document.getElementById("menu");
var barras = document.getElementById("teste");
for (var i = 0; i < btnMenu.length; i++) {
    btnMenu[i].addEventListener('click', function () {
        Menu.classList.toggle('menu-open');
    });
}