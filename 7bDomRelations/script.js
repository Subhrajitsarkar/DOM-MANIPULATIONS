let ul = document.querySelector('.fruits');
ul.style.backgroundColor = "pink"

//parent -> parentElement
ul.parentElement.parentElement.style.backgroundColor = "pink"

//children -> children(gives HTML collection), lastElementChild,firstElementChild
ul.children[1].style.backgroundColor = 'red'
ul.children[2].style.backgroundColor = 'orange'
ul.lastElementChild.style.backgroundColor = 'green'
ul.firstElementChild.style.backgroundColor = 'aqua'

//sibling -> nextElementSibling, previousElementSibling
ul.nextElementSibling.style.color = 'white'
ul.previousElementSibling.style.color = 'gray'