// Variables to create the board
let width = 10
let boardSize = width * width
let bombAmount = Math.floor((boardSize) * .2)
let validAmount = boardSize - bombAmount
let flags = 0
let isGameOver = false
// Variables to create bomb and valid classes
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
    const checkNeighbors = (square) => {
        let bombCount = 0
        let id = parseInt(square[0].id)
        let isLeftEdge = id % width === 0
        let isRightEdge = id % width === width - 1
        // Check neighboring squares for bombs from top clockwise
        if (id > width - 1 && squareValues[id - width] === "bomb") {
            bombCount++
        }
        if (id > width - 1 && !isRightEdge && squareValues[(id - width) + 1] === "bomb") {
            bombCount++
        }
        if (!isRightEdge && squareValues[id + 1] === "bomb") {
            bombCount++
        }
        if (id < boardSize - width && !isRightEdge && squareValues[(id + width) + 1] === "bomb") {
            bombCount++
        }
        if (id < boardSize - width && squareValues[id + width] === "bomb") {
            bombCount++
        }
        if (id < boardSize - width && !isLeftEdge && squareValues[id + width - 1] === "bomb") {
            bombCount++
        }
        if (!isLeftEdge && squareValues[id -1] === "bomb") {
            bombCount++
        }
        if (id > width - 1 && !isLeftEdge && squareValues[(id - width) - 1] === "bomb") {
            bombCount++
        }
        $("#" + id).text(bombCount).addClass("checked")
    }
    //Click event handler
    const click = (event) => {
        let $square = $(event.currentTarget)
        if (!isGameOver && !$square.hasClass("checked")) {
            if ($square.hasClass("bomb")) {
                $(".bomb").text("X")
                console.log("Game Over!")
                isGameOver = true
            } else {
                console.log("Clicked!")
                checkNeighbors($square)
            }
        }
    }
    // Create game board
    const createGameBoard = () => {
        isGameOver = false
        bombArray = []
        validArray = []
        squareValues = []
        $("#board").empty()
        createSquareValues()
        for (let i = 0; i < boardSize; i++) {
            let $square = $("<div>").addClass("square").addClass(squareValues[i]).attr("id", i)
            $square.on("click", click)
            $("#board").append($square)
        }
    }
    $("#reset").on("click", createGameBoard)
    createGameBoard()
})