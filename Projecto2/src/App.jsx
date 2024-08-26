import { useState } from 'react'
import confetti from 'canvas-confetti'
import {Square} from './components/square'
import './App.css'

const TURNS = {X: "×", O: "o"}

const Winning_Status = {win: "X", draw: "Draw", continue: "Continue"}

// Condición de victoria
const winningConditions = [
  [0, 1, 2], // Horizontal
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6], // Vertical
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8], // Diagonal
  [2, 4, 6]
]

function App() {
  //1. Crear un estado para el tablero
  const [board, setBoard] = useState(() => {
    const boardFromLocalStorage = window.localStorage.getItem('board'); // Obtiene el tablero del Local Storage
    return boardFromLocalStorage ? JSON.parse(boardFromLocalStorage) : Array(9).fill(null); // Si hay un tablero en Local Storage, lo retorna, sino retorna un tablero vacío
  })
  //2. Crear un estado para el jugador actual
  const [currentPlayer, setCurrentPlayer] = useState(() => {
    const currentPlayerFromLocalStorage = window.localStorage.getItem('currentPlayer'); // Obtiene el jugador actual del Local Storage
    return currentPlayerFromLocalStorage ? JSON.parse(currentPlayerFromLocalStorage) : TURNS.X; // Si hay un jugador actual en Local Storage, lo retorna, sino retorna el jugador X
  })
  //3. Crear un estado para el ganador
  const [winner, setWinner] = useState(Winning_Status.continue)
  //4. Crear una función para actualizar el tablero
  const updateBoard = (index) => {
    // Si la casilla ya está ocupada o ya hay un ganador, no hacer nada
    if(board[index] != null || winner != Winning_Status.continue) return;
    // Actualizar el tablero
    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);
    // Cambiar de turno
    const newTurn = currentPlayer === TURNS.X ? TURNS.O : TURNS.X;
    setCurrentPlayer(newTurn);
    // Guarda Partida en Local Storage
    window.localStorage.setItem('board', JSON.stringify(newBoard)); // Guarda el tablero
    window.localStorage.setItem('currentPlayer', JSON.stringify(newTurn)); // Guarda el jugador actual
    // Verificar si hay un ganador
    const newWinner = checkWinner(newBoard);
    if(newWinner !== Winning_Status.continue) {
      setWinner(newWinner); 
      setCurrentPlayer(newWinner); 
      confetti(); // Lanza confetti
    }else if(newBoard.every(cell => cell)) {
      setWinner(Winning_Status.draw);
      setCurrentPlayer(Winning_Status.draw);
    }
  }
  //5. Crear una función para verificar si hay un ganador
  const checkWinner = (newBoard) => {
    for(let i = 0; i < winningConditions.length; i++) {
      const [a, b, c] = winningConditions[i];
      if(newBoard[a] && newBoard[a] === newBoard[b] && newBoard[a] === newBoard[c]) {
        return newBoard[a];
      }
    }
    return Winning_Status.continue;
  }
  //6. Crear una función para reiniciar el juego
  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setCurrentPlayer(TURNS.X);
    setWinner(Winning_Status.continue);
    window.localStorage.removeItem('board'); // Elimina el tablero del Local Storage
    window.localStorage.removeItem('currentPlayer'); // Elimina el jugador actual del Local Storage
  }




  return (
    <main>
      <h1>TaTeTi</h1>
      <section className='tablero'>
        {
          board.map((value, index) => {
            return(
              <Square key={index} index={index} updateBoard={updateBoard}>
                {board[index]}
              </Square>
            )
          })
        }
      </section>
      <h2>Turno de:</h2>
      <section className='turn'>
        <Square isSelected={currentPlayer === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={currentPlayer === TURNS.O}>{TURNS.O}</Square>
      </section>
      <section >
        {
          winner != Winning_Status.continue &&
          <section>
            <h2 className='winner-text'>
              {
                winner === Winning_Status.draw ? "Empate" : `El Ganador es: ${winner}`               
              }
            </h2>
          </section>
        }
      </section>
      <footer>
        <button onClick={resetGame}>Comenzar de Nuevo</button>
      </footer>
    </main>
  )
}

export default App
