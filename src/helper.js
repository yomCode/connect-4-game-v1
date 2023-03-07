export const isWinner = (gameBoard, currentMove, currentPlayer) => {
    let board = [...gameBoard];
    board[currentMove] = currentPlayer;
    
    const winningCombinations = [
        [0, 1, 2, 3],
        [4, 5, 6, 7],
        [8, 9, 10, 11],
        [12, 13, 14, 15],
        [0, 4, 8, 12],
        [1, 5, 9, 13],
        [2, 6, 10, 14],
        [3, 7, 11, 15],
        [0, 5, 10, 15],
        [3, 6, 9, 12],
    ];
    
    for(let i=0; i<winningCombinations.length; i++){
        const [a, b, c, d] = winningCombinations[i];
        if(board[a] && 
            board[a] === board[b] && 
            board[a] === board[c] && 
            board[a] === board[d]){
            return true;
        }
    }
    
    return false;
}

export const isDraw = (gameBoard, currentMove, currentPlayer) => {
    // return gameBoard.every(circle => circle !== NO_PLAYER)
    let board= [...gameBoard];
    board[currentMove] = currentPlayer;

    let count = board.reduce((acc, curr) => acc + (curr === 0), 0);
    console.log(`count: ${count}`)

    return count === 0;

    
}

export const getComputerMove = (gameBoard) => {
    let validMoves = [];
    for(let i=0; i<gameBoard.length; i++){
        if(gameBoard[i] === 0){
            validMoves.push(i);
        }
    }
    console.log(validMoves)
    let randomMove = Math.floor(Math.random() * validMoves.length);
    console.log(randomMove)
    return validMoves[randomMove];
}