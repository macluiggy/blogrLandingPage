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
 var containerBurger = document.querySelector('#containerBurger');
 var navBar = document.querySelector('#toogleBar');
console.log(containerBurger.innerHTML);

containerBurger.addEventListener('click', function () {
 if (navBar.style.display === 'block') {
     navBar.style.display = 'none';
 } else {
     navBar.style.display = 'block';
 }
})
    //Fin de la parte del header
}());