import Board from './Board';
import { useState, useEffect } from 'react';
import GameOver from './GameOver';
import GameState from './GameState';
import Reset from './Reset';

const playerX = 'X';
const playerO = 'O';

const winningArray = [
  //Winning rows
  { combo: [0, 1, 2], strikeClass: 'strike-row-1' },
  { combo: [3, 4, 5], strikeClass: 'strike-row-2' },
  { combo: [6, 7, 8], strikeClass: 'strike-row-3' },

  //Winning columns

  { combo: [0, 3, 6], strikeClass: 'strike-column-1' },
  { combo: [1, 4, 7], strikeClass: 'strike-column-2' },
  { combo: [2, 5, 8], strikeClass: 'strike-column-3' },

  //Winning Diagonal
  { combo: [0, 4, 8], strikeClass: 'strike-diagonal-1' },
  { combo: [6, 4, 2], strikeClass: 'strike-diagonal-2' },
];
function checkWinner(box, setstrike, setGameState) {
  for (const { combo, strikeClass } of winningArray) {
    const boxVal1 = box[combo[0]];
    const boxVal2 = box[combo[1]];
    const boxVal3 = box[combo[2]];

    if (boxVal1 != null && boxVal1 === boxVal2 && boxVal1 === boxVal3) {
      setstrike(strikeClass);
      if (boxVal1 === playerO) {
        return setGameState(GameState.playerOWins);
      } else {
        return setGameState(GameState.playerXWins);
      }
      return;
    }
    
  }

  const ISdraw = box.every((bx) => bx != null);
  if (ISdraw) {
    setGameState(GameState.draw);
  }
}
export default function TicTacToe() {
  const [box, setBox] = useState(Array(9).fill(null));
  const [playerTurn, setPlayers] = useState(playerO);
  const [strikeClass, setStrike] = useState();
  const [gameState, setgameState] = useState(GameState.inProgress);

  const handleClicks = (index) => {
    if(gameState !== GameState.inProgress){
      return;
    }

    if (box[index] != null) {
      return;
    }
    const newbox = [...box];
    newbox[index] = playerTurn;
    setBox(newbox);
    if (playerTurn === playerO) {
      setPlayers(playerX);
    } else {
      setPlayers(playerO);
    }
  };

  useEffect(() => {
    checkWinner(box, setStrike, setgameState);
  }, [box]);

  const handleReset = () => {
    setgameState(GameState.inProgress)
    setBox(Array(9).fill(null));
    setPlayers(playerX)
    setStrike(null)
  };
  return (
    <div>
      <h1> Tic Tac Toe </h1>
      <h2> Current Player: {playerTurn}</h2>
      <GameOver gameState={gameState} />

      <Reset gameState = {gameState} onReset = {handleReset}/>
      <Board box={box} onBoxClick={handleClicks} strikeClass={strikeClass} />
    
      
    </div>
  );
}
