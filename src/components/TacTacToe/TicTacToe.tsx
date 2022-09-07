import React, { useCallback, useState } from 'react';
import { Cell } from '../Cell/Cell';
import { Result } from '../Result';
import './TicTacToe.scss';

export const TicTacToe: React.FC = React.memo(
  () => {
    const [turn, setTurn] = useState('X');
    const [cells, setCells] = useState(Array(9).fill(''));
    const [winner, setWinner] = useState('');

    const handleTurn = useCallback(
      (turn: string) => {
        setTurn(turn);
    }, []);

    const handleCells = useCallback(
      (cells: string[]) => {
        setCells(cells);
    }, []);

    const handleWinner = useCallback(
      (winner: string) => {
        setWinner(winner);
    }, []);

    const handleReset = useCallback(
      () => {
        setTurn('X');
        setCells(Array(9).fill(''));
        setWinner('');
    }, []);

    return (
      <div className="tictactoe">
        <p className="tictactoe__turn">Turn: {turn}</p>

        <table className="tictactoe__grid">
          <tbody>
            <tr>
              <Cell
                num={0}
                turn={turn}
                handleTurn={handleTurn}
                cells={cells}
                handleCells={handleCells}
                handleWinner={handleWinner}
              />
              <Cell
                num={1}
                turn={turn}
                handleTurn={handleTurn}
                cells={cells}
                handleCells={handleCells}
                handleWinner={handleWinner}
              />
              <Cell
                num={2}
                turn={turn}
                handleTurn={handleTurn}
                cells={cells}
                handleCells={handleCells}
                handleWinner={handleWinner}
              />
            </tr>
            <tr>
              <Cell
                num={3}
                turn={turn}
                handleTurn={handleTurn}
                cells={cells}
                handleCells={handleCells}
                handleWinner={handleWinner}
              />
              <Cell
                num={4}
                turn={turn}
                handleTurn={handleTurn}
                cells={cells}
                handleCells={handleCells}
                handleWinner={handleWinner}
              />
              <Cell
                num={5}
                turn={turn}
                handleTurn={handleTurn}
                cells={cells}
                handleCells={handleCells}
                handleWinner={handleWinner}
              />
            </tr>
            <tr>
              <Cell
                num={6}
                turn={turn}
                handleTurn={handleTurn}
                cells={cells}
                handleCells={handleCells}
                handleWinner={handleWinner}
              />
              <Cell
                num={7}
                turn={turn}
                handleTurn={handleTurn}
                cells={cells}
                handleCells={handleCells}
                handleWinner={handleWinner}
              />
              <Cell
                num={8}
                turn={turn}
                handleTurn={handleTurn}
                cells={cells}
                handleCells={handleCells}
                handleWinner={handleWinner}
              />
            </tr>
          </tbody>
        </table>

        {winner && <Result winner={winner} handleReset={handleReset} />}
      </div>
    );
  },
);