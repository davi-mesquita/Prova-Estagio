var btnMenu = document.getElementsByClassName("btn-menu");
var Menu = document.getElementById("menu");
var body = document.body;
var barras = document.getElementById("teste");
for (var i = 0; i < btnMenu.length; i++) {
    btnMenu[i].addEventListener('click', function () {
        body.classList.toggle('menu-open');
        Menu.classList.toggle('menu-openned');
    });
}