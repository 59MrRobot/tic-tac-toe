import React from 'react';
import './Result.scss';

interface Props {
  winner: string;
  handleReset: () => void;
}

export const Result: React.FC<Props> = ({ winner,handleReset }) => {
  return (
    <div className="result">
      <div className="result__wrapper">
        <h2 className="result__winner">
          {winner !== 'draw'
            ? (`${winner} is the winner!`)
            : ('Draw!')
          }
        </h2>

        <button
          type="button"
          className="result__button"
          onClick={() => handleReset()}
        >
          Play Again
        </button>
      </div>
    </div>
  )
}