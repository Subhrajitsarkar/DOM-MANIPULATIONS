let filter = document.getElementById("filter")

filter.addEventListener("keyup", function (e) {
    let textEntered = e.target.value.toLowerCase();
    let fruitItems = document.getElementsByClassName("fruit")
    for (let i = 0; i < fruitItems.length; i++) {
        let currentFruitText = fruitItems[i].firstChild.textContent.toLocaleLowerCase()
        if (currentFruitText.indexOf(textEntered) === -1) {
            fruitItems[i].style.display = "none"
        } else {
            fruitItems[i].style.display = "flex"
        }
    }
})