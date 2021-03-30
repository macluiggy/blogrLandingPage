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
//console.log(containerBurger.innerHTML);

containerBurger.addEventListener('click', function () {
 if (navBar.style.display === 'block') {
     navBar.style.display = 'none';
 } else {
     navBar.style.display = 'block';
 }
})
    //Fin de la parte del header

    //codigo para la parte del main
    //codigo para main1
    var illustratorEditor = document.querySelector('#illustration-editor');// selecciona la imagen
    console.log(window.innerWidth);
    if (window.innerWidth < 500) { // si el ancho de la pantalla es menor que el valor
        illustratorEditor.src = '/images/illustration-editor-mobile.svg';// cambia la imagen
    }

    //codigo para el main3
    var illustrationLaptop = document.querySelector('#illustration-laptop');

    if (window.innerWidth < 500) {
        illustrationLaptop.src = '/images/illustration-laptop-mobile.svg';
    }
}());