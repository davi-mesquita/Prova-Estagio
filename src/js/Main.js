var topo = document.getElementsByClassName("topo");
for (var i = 0; i < topo.length; i++) {
    topo[i].addEventListener('click', function () {
        window.scrollTo({top: 0, behavior: 'smooth'});
    });
}
