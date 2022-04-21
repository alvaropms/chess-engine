
import { Chess } from "chess.js";
import ChessBoard from "chessboardjs";
import { calcBestMove } from "./ia";
import $ from 'jquery';

export const game = () => {
  var board = null
  var game = new Chess()
  var whiteSquareGrey = '#a9a9a9'
  var blackSquareGrey = '#696969'
  var $status = $('#status')
  
  function onDragStart (source, piece, position, orientation) {
    // do not pick up pieces if the game is over
    if (game.game_over()) return false
  
    // only pick up pieces for White
    if (piece.search(/^b/) !== -1) return false
  }
  
  function makeIaMove () {
    var possibleMoves = game.moves()
  
    // game over
    if (possibleMoves.length === 0) return

    var move = calcBestMove(game.fen(), 3)

    game.move(possibleMoves[move])
    board.position(game.fen())
    updateStatus()
  }
  
  function onDrop (source, target) {
    // see if the move is legal
    var move = game.move({
      from: source,
      to: target,
      promotion: 'q' // NOTE: always promote to a queen for example simplicity
    })

  
    // illegal move
    if (move === null) return 'snapback'
  
    //make a move for black
    window.setTimeout(makeIaMove, 250)
    updateStatus()
  }
  
  // update the board position after the piece snap
  // for castling, en passant, pawn promotion
  function onSnapEnd () {
    board.position(game.fen())
  }

  function removeGreySquares () {
    $('#myBoard .square-55d63').css('background', '')
  }
  
  function greySquare (square) {
    var $square = $('#myBoard .square-' + square)
  
    var background = whiteSquareGrey
    if ($square.hasClass('black-3c85d')) {
      background = blackSquareGrey
    }
  
    $square.css('background', background)
  }

  function onMouseoverSquare (square, piece) {
    // get list of possible moves for this square
    var moves = game.moves({
      square: square,
      verbose: true
    })
  
    // exit if there are no moves available for this square
    if (moves.length === 0) return
  
    // highlight the square they moused over
    greySquare(square)
  
    // highlight the possible squares for this piece
    for (var i = 0; i < moves.length; i++) {
      greySquare(moves[i].to)
    }
  }
  
  function onMouseoutSquare (square, piece) {
    removeGreySquares()
  }

  function updateStatus () {
    var status = ''
  
    var moveColor = 'Brancas'
    if (game.turn() === 'b') {
      moveColor = 'Pretas'
    }
  
    // checkmate?
    if (game.in_checkmate()) {
      status = 'Fim de jogo, as ' + moveColor + ' então em xeque-mate.'
    }
  
    // draw?
    else if (game.in_draw()) {
      status = 'Fim de jogo, posição empatada'
    }
  
    // game still on
    else {
      status = 'É a vez das ' + moveColor
  
      // check?
      if (game.in_check()) {
        status += ', ' + moveColor + ' estão em xeque'
      }
    }
  
    $status.html(status)
  }
  
  var config = {
    draggable: true,
    position: 'start',
    onDragStart: onDragStart,
    onDrop: onDrop,
    onSnapEnd: onSnapEnd,
    onMouseoutSquare: onMouseoutSquare,
    onMouseoverSquare: onMouseoverSquare,
  }
  board = ChessBoard('myBoard', config)
}