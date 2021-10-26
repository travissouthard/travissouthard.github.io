// Variables to create the board
let width = 10
let boardSize = width * width
let bombAmount = Math.floor((boardSize) * .2)
let validAmount = boardSize - bombAmount
let flags = 0
let matches = 0
let wins = 0
let losses = 0
let isGameOver = false
let squareValues = []

const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        let random = Math.floor(Math.random() * (i + 1))
        let temp = array[i]
        array[i] = array[random]
        array[random] = temp
    }
    return array
}

// On page load
$(() => {
    const createSquareValues = () => {
        for (let i = 0; i < bombAmount; i++) {
            squareValues.push("bomb")
        }
        for (let i = 0; i < validAmount; i++) {
            squareValues.push("valid")
        }
        squareValues = shuffle(squareValues)
    }

    const updateScoreboard = () => {
        $("#wins").empty()
        $("#losses").empty()
        $("#flag-count").empty()
        // $("#wins").text("Wins: " + wins)
        // $("#losses").text("Losses: " + losses)
        $("#flag-count").text("Flags: " + (bombAmount - flags))
    }

    const checkEdges = (id, direction) => {
        const isTopEdge = id < width
        const isBottomEdge = id >= boardSize - width
        const isLeftEdge = id % width === 0
        const isRightEdge = id % width === width - 1
        const edges = {
            top: !isTopEdge,
            topRight: !isTopEdge && !isRightEdge,
            right: !isRightEdge,
            bottomRight: !isBottomEdge && !isRightEdge,
            bottom: !isBottomEdge,
            bottomLeft: !isBottomEdge && !isLeftEdge,
            left: !isLeftEdge,
            topLeft: !isTopEdge && !isLeftEdge,
        }
        return edges[direction]
    }

    const getNeighborsAndBombs = (id) => {
        let bombCount = 0
        const empties = []
        const directions = {
            top: id - width,
            topRight: id - width + 1,
            right: id + 1,
            bottomRight: id + width + 1,
            bottom: id + width,
            bottomLeft: id + width - 1,
            left: id - 1,
            topLeft: id - width - 1,
        }
        

        for (let direction in directions) {
            if (checkEdges(id, direction)) { 
                if (squareValues[directions[direction]] === "bomb") {
                    bombCount++
                }
                else {empties.push($("#" + (directions[direction])))}
            }
        }

        return [empties, bombCount]
    }

    const checkNeighbors = (square) => {
        const id = parseInt(square[0].id)
        const [emptyNeighbors, bombCount] = getNeighborsAndBombs(id)
        const numbers = [
            "one", "two", "three", "four",
            "five", "six", "seven", "eight"
        ]

        if (bombCount > 0) {
            $("#" + id).text(bombCount)
                .addClass("checked")
                .addClass(numbers[bombCount - 1])
        } else {
            emptyNeighbors.map(neighbor => {
                $("#" + id).addClass("checked")
                click(neighbor)
            })
        }
    }

    const click = (event) => {
        let $square
        if (event.currentTarget === undefined) {
            $square = event
        } else {
            $square = $(event.currentTarget)
        }
        if (
                !isGameOver && 
                !$square.hasClass("checked") && 
                !$square.hasClass("flag")
            ) {
            if ($square.hasClass("bomb")) {
                $(".bomb")
                    .text("💣")
                    .addClass("checked")
                $("#title").text("Game Over!")
                losses++
                updateScoreboard()
                isGameOver = true
            } else {
                checkNeighbors($square)
            }
        }
        checkWin()
    }

    const resetGame = () => {
        $("#title").text("Minesweeper")
        isGameOver = false
        flags = 0
        matches = 0
        squareValues = []
        $("#board").empty()
    }

    const checkWin = () => {
        const uncheckedSquares = boardSize - $(".checked.valid").length - $(".flag.bomb").length
        if (
                matches === bombAmount ||
                20 - flags === uncheckedSquares
            ) {
            $("#title").text("You win!")
            $(".bomb").text("🚩")
            $(".valid").addClass("checked")
            wins++
            updateScoreboard()
            isGameOver = true
        }
    }

    const addFlag = (event) => {
        let $square = $(event.currentTarget)
        if (
                !isGameOver && 
                !$square.hasClass("checked") && 
                flags < bombAmount
            ) {
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
            updateScoreboard()
        }
        return false
    }

    const createGameBoard = () => {
        resetGame()
        updateScoreboard()
        createSquareValues()
        for (let i = 0; i < boardSize; i++) {
            let $square = $("<div>")
            .addClass("square")
            .addClass(squareValues[i])
            .attr("id", i)

            $square.on("click", click)
            $square.on("contextmenu", addFlag)
            $("#board").append($square)
        }
    }

    $("#reset").on("click", createGameBoard)
    createGameBoard()
})