//QuerySelector is used to grab only one single element
// let mainHeading = document.querySelector('#main-heading')
// mainHeading.style.textAlign = "center";

// let fruits = document.querySelector('.fruits')
// fruits.style.backgroundColor = "red"
// fruits.style.padding = "30px"
// fruits.style.margin = "30px"
// fruits.style.width = "50%"
// fruits.style.borderRadius = "5px"
// fruits.style.listStyle = "none"

// let basketHeading = document.querySelector('h2')
// basketHeading.style.marginLeft = "30px"

// let fruitItems = document.querySelector(".fruit")
// fruitItems.style.color = "white"

// let fruitItems = document.querySelector(".fruit:last-child")
// fruitItems.style.backgroundColor = "blue"

// let fruitItems = document.querySelector(".fruit:nth-child(2)")
// fruitItems.style.backgroundColor = "blue"

//(".fruit:first-child"), (".fruit:last-child"), (".fruit:nth-child(2)"), ('.fruit:nth-child(odd)'), ('.fruit:nth-child(even)')

// QuerySelectorAll is used to grab all the elements with same class/tag
let fruitItems = document.querySelectorAll('.fruit')
for (let i = 0; i < fruitItems.length; i++) {
    fruitItems[i].style.backgroundColor = "white"
    fruitItems[i].style.padding = "10px"
    fruitItems[i].style.margin = "10px"
    fruitItems[i].style.borderRadius = "5px"
}
let oddFruitItems = document.querySelectorAll('.fruit:nth-child(odd)')
for (let i = 0; i < oddFruitItems.length; i++) {
    oddFruitItems[i].style.backgroundColor = "lightgray"
}

