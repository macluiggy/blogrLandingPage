(function () {
    //Script para la parte del header
    var toogleItem = document.getElementsByClassName('toogleItem');
    console.log(toogleItem.length);
    
    for (let i = 0; i < toogleItem.length; i++) {//itera por cada elemento
        const item = toogleItem[i];
        item.addEventListener('mouseover', function () {
            item.innerHTML = item.innerHTML.replace('△', '▽');//reemplaza el caracter cuando se pase el mouse por el elemento
        })
        item.addEventListener('mouseout', function () {
            item.innerHTML = item.innerHTML.replace('▽', '△');//reemplaza el caracter cuando se pase el mouse por el elemento
        })
    }
 //aqui vamos a mostrar y ocultar el contenido con la
    window.onload = function () {
        var containerBurger = document.getElementById('containerBurguer');
    var navBar = document.getElementById('toogleBar');
    console.log(navBar.length);
    containerBurger.addEventListener('click',showAndhide, false)
    function showAndhide() {
        navBar.classList.toggle("show");
    }
    }
    //Fin de la parte del header
}());