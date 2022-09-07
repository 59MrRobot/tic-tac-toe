import React, { useCallback } from 'react';
import './Cell.scss'

interface Props {
  num: number;
  turn: string;
  handleTurn: (turn: string) => void;
  cells: string[];
  handleCells: (cells: string[]) => void;
  handleWinner: (winner: string) => void;
}

export const Cell: React.FC<Props> = React.memo(
  ({ num, turn, handleTurn, cells, handleCells, handleWinner }) => {
    const checkForWinner = useCallback(
      (squares: string[]) => {
        const combos: Combos = {
          across: [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
          ],
          down: [
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
          ],
          diagonals: [
            [0, 4, 8],
            [2, 4, 6],
          ],
        };

        for (let combo in combos) {
          combos[combo as keyof typeof combos].forEach((pattern) => {
            if (squares[pattern[0]] === '' ||
              squares[pattern[1]] === '' ||
              squares[pattern[2]] === '') {
                // do nothing
            } else if (squares[pattern[0]] === squares[pattern[1]] &&
              squares[pattern[1]] === squares[pattern[2]]) {
              handleWinner(squares[pattern[0]]);
            } else if (squares.every(turn => turn === 'X' || turn === 'O') &&
              squares[pattern[0]] !== squares[pattern[1]] &&
              squares[pattern[1]] !== squares[pattern[2]]) {
              handleWinner('draw');
            }
          });
        }
      }, [handleWinner]);
    
    const handleClick = () => {
      if (cells[num] !== '') {
        alert('Already played there');
        return;
      }

      let squares = [...cells];

      if (turn === 'X' ) {
        squares[num] = 'X';
        handleTurn('O');
      } else {
        squares[num] = 'O';
        handleTurn('X');
      }

      handleCells(squares);
      checkForWinner(squares);
    }

    return (
      <td className={`cell cell--${num}`} onClick={() => handleClick()}>{cells[num]}</td>
    );
  },
);