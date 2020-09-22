
const big = document.getElementById('big')
const medium = document.getElementById('medium')

function onClickHandler(event) {
    console.dir(this);    
    console.dir(event.currentTarget)
    console.dir(event)
    // console.dir(event.target)
    // alert('hey')
}
// big.onclick = onClickHandler   //добавляет слушателя устаревший метод
// big.onclick = null   //удаляет слушателя устаревший метод
// big.onclick=()=>alert('hey')
big.addEventListener('click', onClickHandler)   //добавляет слушателя топ метод
medium.addEventListener('click', ()=>alert())   //добавляет слушателя топ метод
// big.removeEventListener('click', onClickHandler)    //удаляет слушателя топ метод
