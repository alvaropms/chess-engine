import { Chess } from "chess.js";

function reverseArray(array){
    return array.slice().reverse();
};

const pawnEvalWhite =
    [
        [0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0],
        [5.0,  5.0,  5.0,  5.0,  5.0,  5.0,  5.0,  5.0],
        [1.0,  1.0,  2.0,  3.0,  3.0,  2.0,  1.0,  1.0],
        [0.5,  0.5,  1.0,  2.5,  2.5,  1.0,  0.5,  0.5],
        [0.0,  0.0,  0.0,  2.0,  2.0,  0.0,  0.0,  0.0],
        [0.5, -0.5, -1.0,  0.0,  0.0, -1.0, -0.5,  0.5],
        [0.5,  1.0, 1.0,  -2.0, -2.0,  1.0,  1.0,  0.5],
        [0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0]
    ];

const pawnEvalBlack = reverseArray(pawnEvalWhite);

const knightEval =
    [
        [-5.0, -4.0, -3.0, -3.0, -3.0, -3.0, -4.0, -5.0],
        [-4.0, -2.0,  0.0,  0.0,  0.0,  0.0, -2.0, -4.0],
        [-3.0,  0.0,  1.0,  1.5,  1.5,  1.0,  0.0, -3.0],
        [-3.0,  0.5,  1.5,  2.0,  2.0,  1.5,  0.5, -3.0],
        [-3.0,  0.0,  1.5,  2.0,  2.0,  1.5,  0.0, -3.0],
        [-3.0,  0.5,  1.0,  1.5,  1.5,  1.0,  0.5, -3.0],
        [-4.0, -2.0,  0.0,  0.5,  0.5,  0.0, -2.0, -4.0],
        [-5.0, -4.0, -3.0, -3.0, -3.0, -3.0, -4.0, -5.0]
    ];

const bishopEvalWhite = [
    [ -2.0, -1.0, -1.0, -1.0, -1.0, -1.0, -1.0, -2.0],
    [ -1.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0, -1.0],
    [ -1.0,  0.0,  0.5,  1.0,  1.0,  0.5,  0.0, -1.0],
    [ -1.0,  0.5,  0.5,  1.0,  1.0,  0.5,  0.5, -1.0],
    [ -1.0,  0.0,  1.0,  1.0,  1.0,  1.0,  0.0, -1.0],
    [ -1.0,  1.0,  1.0,  1.0,  1.0,  1.0,  1.0, -1.0],
    [ -1.0,  0.5,  0.0,  0.0,  0.0,  0.0,  0.5, -1.0],
    [ -2.0, -1.0, -1.0, -1.0, -1.0, -1.0, -1.0, -2.0]
];

const bishopEvalBlack = reverseArray(bishopEvalWhite);

const rookEvalWhite = [
    [  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0],
    [  0.5,  1.0,  1.0,  1.0,  1.0,  1.0,  1.0,  0.5],
    [ -0.5,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0, -0.5],
    [ -0.5,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0, -0.5],
    [ -0.5,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0, -0.5],
    [ -0.5,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0, -0.5],
    [ -0.5,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0, -0.5],
    [  0.0,   0.0, 0.0,  0.5,  0.5,  0.0,  0.0,  0.0]
];

const rookEvalBlack = reverseArray(rookEvalWhite);

const queenEval =
    [
    [ -2.0, -1.0, -1.0, -0.5, -0.5, -1.0, -1.0, -2.0],
    [ -1.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0, -1.0],
    [ -1.0,  0.0,  0.5,  0.5,  0.5,  0.5,  0.0, -1.0],
    [ -0.5,  0.0,  0.5,  0.5,  0.5,  0.5,  0.0, -0.5],
    [  0.0,  0.0,  0.5,  0.5,  0.5,  0.5,  0.0, -0.5],
    [ -1.0,  0.5,  0.5,  0.5,  0.5,  0.5,  0.0, -1.0],
    [ -1.0,  0.0,  0.5,  0.0,  0.0,  0.0,  0.0, -1.0],
    [ -2.0, -1.0, -1.0, -0.5, -0.5, -1.0, -1.0, -2.0]
];

const kingEvalWhite = [

    [ -3.0, -4.0, -4.0, -5.0, -5.0, -4.0, -4.0, -3.0],
    [ -3.0, -4.0, -4.0, -5.0, -5.0, -4.0, -4.0, -3.0],
    [ -3.0, -4.0, -4.0, -5.0, -5.0, -4.0, -4.0, -3.0],
    [ -3.0, -4.0, -4.0, -5.0, -5.0, -4.0, -4.0, -3.0],
    [ -2.0, -3.0, -3.0, -4.0, -4.0, -3.0, -3.0, -2.0],
    [ -1.0, -2.0, -2.0, -2.0, -2.0, -2.0, -2.0, -1.0],
    [  2.0,  2.0,  0.0,  0.0,  0.0,  0.0,  2.0,  2.0 ],
    [  2.0,  3.0,  1.0,  0.0,  0.0,  1.0,  3.0,  2.0 ]
];

const kingEvalBlack = reverseArray(kingEvalWhite);


function getPieceValue(piece, row, column){
    if (piece === null) {
        return 0;  
    }

    const color = piece.color

    var value = 0;
    
    if (piece.type === 'p') {
        value = 10 +
        (color === 'w' ? pawnEvalWhite[row][column] : pawnEvalBlack[row][column])
    } else if (piece.type === 'r') {
        value = 50 +
        (color === 'w' ? rookEvalWhite[row][column] : rookEvalBlack[row][column])
    } else if (piece.type === 'n') {
        value = 30 + knightEval[row][column];
    } else if (piece.type === 'b') {
        value = 30+
        (color === 'w' ? bishopEvalWhite[row][column] : bishopEvalBlack[row][column])
    } else if (piece.type === 'q') {
        value = 90 + queenEval[row][column]
    } else if (piece.type === 'k') {
        value = 900 +
        (color === 'w' ? kingEvalWhite[row][column] : kingEvalBlack[row][column])
    }

    return piece.color === 'w' ? value : -value;
}

function calcBoardValues(board){
    var totalValue = 0
    for (var i = 0; i < 8; i++) {
        for (var j = 0; j < 8; j++) {
            totalValue += getPieceValue(board[i][j], i, j);
        }
    }
    return -totalValue
}

function root(fen, index){
    var game = Chess(fen)
    
    if(index === 1){
        var movieValues = []
        game.moves().forEach(move => {
            game.move(move)
            movieValues.push(calcBoardValues(game.board()))
            game.load(fen)
        })
        return bestMove(movieValues, game.turn()).value
    }

    const possibles = game.moves()

    let values = []

    possibles.forEach( move => {
        game.move(move)
        if(game.in_checkmate()){
            values.push( game.turn() === 'w' ? 99999 : -99999 )
        }else{
            values.push(root(game.fen(), index - 1))
        }
        game.load(fen)
    })

    return bestMove(values, game.turn()).value
}

export function calcBestMove(fen, index){
    const game = Chess(fen)
    const moves = game.moves()
    let values = []

    moves.forEach( move => {
        game.move(move)
        values.push(root(game.fen(), index - 1))
        game.load(fen)
    })

    return bestMove(values, game.turn()).index
}

function bestMove(moves, turn) {
    const player = turn === 'w' ? false : true
    let biggest = moves[0];
    let index = 0;
    for (let i = 1; i < moves.length; i++) {
        if ( player ? (moves[i] > biggest) : (moves[i] < biggest)) {
            biggest = moves[i];
            index = i;
        }
    }
    return {
        'index': index,
        'value': biggest
    }
}