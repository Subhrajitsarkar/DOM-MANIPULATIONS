let form = document.querySelector('form')
let fruits = document.querySelector('.fruits')

form.addEventListener('submit', function (e) {
    e.preventDefault();

    //select the input element
    let fruitToAdd = document.getElementById('fruit-to-add')

    //create the li
    let newLi = document.createElement('li')
    // newLi.innerHTML = fruitToAdd.value + '<button class="delete-btn">x</button>'
    let newLiText = document.createTextNode(fruitToAdd.value)
    newLi.appendChild(newLiText)
    newLi.className = 'fruit'

    //create a delete btn to be added inside li

    let deleteBtn = document.createElement('button')
    let deleteBtnText = document.createTextNode('x')
    deleteBtn.appendChild(deleteBtnText)
    deleteBtn.className = 'delete-btn'
    newLi.appendChild(deleteBtn);

    //Adding li as the last element of ul
    fruits.appendChild(newLi)
})

fruits.addEventListener('click', function (e) {
    if (e.target.classList.contains('delete-btn')) {
        let fruitToDelete = e.target.parentElement;
        fruits.removeChild(fruitToDelete)
    }
})