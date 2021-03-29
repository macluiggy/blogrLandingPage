(function () {
    //Script para la parte del header
    var toogleItem = document.getElementsByClassName('toogleItem');
    console.log(toogleItem.length);
    
    for (let i = 0; i < toogleItem.length; i++) {
        const item = toogleItem[i];
        item.addEventListener('mouseover', function () {
            item.innerHTML = item.innerHTML.replace('△', '▽')
        })
        item.addEventListener('mouseout', function () {
            item.innerHTML = item.innerHTML.replace('▽', '△')
        })
    }

    //Fin de la parte del header
}())