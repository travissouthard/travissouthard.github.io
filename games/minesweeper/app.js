// Variables to create the board
let width = 10
let boardSize = width * width
let bombAmount = Math.floor((boardSize) * .2)
let validAmount = boardSize - bombAmount
let flags = 0
let matches = 0
let timer = 0
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
    const updateFlags = () => {
        $("#flag-count").empty()
        $("#flag-count").text("Flags: " + (bombAmount - flags))
    }
    const checkNeighbors = (square) => {
        let bombCount = 0
        let id = parseInt(square[0].id)
        let isLeftEdge = id % width === 0
        let isRightEdge = id % width === width - 1
        let neighbors = []
        let number = ["one", "two", "three", "four", "five", "six", "seven", "eight"]
        // Check neighboring squares for bombs from top clockwise
        if (id > width - 1) { // Top
            if (squareValues[id - width] === "bomb") {bombCount++}
            else {neighbors.push($("#" + (id - width)))}
        }
        if (id > width - 1 && !isRightEdge) { // Top-right
            if (squareValues[id - width + 1] === "bomb") {bombCount++}
            else {neighbors.push($("#" + (id - width + 1)))}
        }
        if (!isRightEdge) { // Right
            if (squareValues[id + 1] === "bomb") {bombCount++}
            else {neighbors.push($("#" + (id + 1)))}
        }
        if (id < boardSize - width && !isRightEdge) { // Bottom right
            if (squareValues[id + width + 1] === "bomb") {bombCount++}
            else {neighbors.push($("#" + (id + width + 1)))}
        }
        if (id < boardSize - width) { // Bottom
            if (squareValues[id + width] === "bomb") {bombCount++}
            else {neighbors.push($("#" + (id + width)))}
        }
        if (id < boardSize - width && !isLeftEdge) { // Bottom left
            if (squareValues[id + width - 1] === "bomb") {bombCount++}
            else {neighbors.push($("#" + (id + width - 1)))}
        }
        if (!isLeftEdge) { // Left
            if (squareValues[id - 1] === "bomb") {bombCount++}
            else {neighbors.push($("#" + (id - 1)))}
        }
        if (id > width - 1 && !isLeftEdge) { // Top left
            if (squareValues[id - width - 1] === "bomb") {bombCount++}
            else {neighbors.push($("#" + (id - width - 1)))}
        }
        //After checking, either reveal the number of bombs found or click all the nieghbors
        if (bombCount > 0) {
            $("#" + id).text(bombCount).addClass("checked").addClass(number[bombCount - 1])
        } else {
            neighbors.map(neighbor => {
                $("#" + id).addClass("checked")
                click(neighbor)
            })
        }
    }
    //Click event handler
    const click = (event) => {
        let $square
        if (event.currentTarget === undefined) {
            $square = event
        } else {
            $square = $(event.currentTarget)
        }
        if (!isGameOver && !$square.hasClass("checked") && !$square.hasClass("flag")) {
            if ($square.hasClass("bomb")) {
                $(".bomb").text("💣").addClass("checked")
                $("#title").text("Game Over!")
                isGameOver = true
            } else {
                checkNeighbors($square)
            }
        }
    }
    //Check for win
    const checkWin = () => {
        console.log("Matches: " + matches)
        console.log("flags: " + flags)
        console.log("Bombs: " + bombAmount)
        if (matches === bombAmount) {
            $("#title").text("You win!")
            isGameOver = true
        }
    }
    //Add flags to mark
    const addFlag = (event) => {
        let $square = $(event.currentTarget)
        if (!isGameOver && !$square.hasClass("checked") && flags < bombAmount) {
            if ($square.hasClass("flag")) {
                $square.text("")
                flags--
            } else {
                $square.text("🚩")
                flags++
                if ($square.hasClass("bomb")) {
                    matches++
                }
                checkWin($square)
            }
            $square.toggleClass("flag")
            updateFlags()
        }
        return false
    }
    // Create game board
    const createGameBoard = () => {
        $("#title").text("Minesweeper")
        isGameOver = false
        flags = 0
        matches = 0
        bombArray = []
        validArray = []
        squareValues = []
        $("#board").empty()
        updateFlags()
        createSquareValues()
        for (let i = 0; i < boardSize; i++) {
            let $square = $("<div>").addClass("square").addClass(squareValues[i]).attr("id", i)
            $square.on("click", click)
            $square.on("contextmenu", addFlag)
            $("#board").append($square)
        }
    }
    $("#reset").on("click", createGameBoard)
    createGameBoard()
})