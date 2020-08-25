let width = 10
let boardSize = width * width
let bombAmount = Math.floor((boardSize) * .2)
let validAmount = boardSize - bombAmount
let bombArray = []
let validArray = []
let squareValues = []
const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1)) //Random index
        let x = array[i] // holds the current array item
        array[i] = array[j] // put random item in current index
        array[j] = x // put current item in random index
    }
    return array
}

// On page load
$(() => {
    // Create array of classes to grab 
    const createSquareValues = () => {
        for (let i = 0; i < bombAmount; i++) {
            bombArray.push("bomb")
        }
        for (let i = 0; i < validAmount; i++) {
            validArray.push("valid")
        }
        squareValues = shuffle(bombArray.concat(validArray))
    }
    // Create game board
    const createGameBoard = () => {
        createSquareValues()
        for (let i = 0; i < boardSize; i++) {
            let $square = $("<div>").addClass("square").addClass(squareValues[i]).text(i)
            $("#board").append($square)
        }
    }
    createGameBoard()
})