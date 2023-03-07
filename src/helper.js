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



const getComputerMove = (gameBoard) => {
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

const getPosition = (gameBoard, moveCheck) => {
    for(let check=0; check < moveCheck.length; check++){
        for(let i=0; i < moveCheck[check].max; i += moveCheck[check].step){
            let series = gameBoard[i + moveCheck[check].indexes[0]].toString() +
                gameBoard[i + moveCheck[check].indexes[1]].toString() +
                gameBoard[i + moveCheck[check].indexes[2]].toString() +
                gameBoard[i + moveCheck[check].indexes[3]].toString();
            
            switch(series){
                case '1110':
                    case '2220':
                        return i + moveCheck[check].indexes[3];
                case '1101':
                    case '2202':
                        return i + moveCheck[check].indexes[2];
                case '1011':
                    case '2022':
                        return i + moveCheck[check].indexes[1];
                case '0111':
                    case '0222':
                        return i + moveCheck[check].indexes[0];
                default:
            }
            
        }
    }
    return -1;
}


export const ComputerMove = (gameBoard) => {
    let moveCheck = [
        //vertical
        {
            indexes: [0, 4, 8, 12],
            max: 4,
            step: 1,
        },
        //horizontal
        {
            indexes: [0, 1, 2, 3],
            max: 16,
            step: 4,
        },
        //diagonal
        {
            indexes: [0, 5, 10, 15],
            max: 16,
            step: 16,
        },
        //diagonal
        {
            indexes: [3, 6, 9, 12],
            max: 16,
            step: 16,
        },
    ];
    let position = getPosition(gameBoard, moveCheck);
    if(position > -1) return position;
    return getComputerMove(gameBoard);
}
