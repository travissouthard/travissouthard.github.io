let width = 10


$(() => {
    // Create game board
    const createGameBoard = () => {
        for (let i = 0; i < (width * width); i++) {
            let $square = $("<div>").addClass("square").text(i)
            $("#board").append($square)
        }
    }
    createGameBoard()
})