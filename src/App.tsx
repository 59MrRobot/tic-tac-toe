import React from 'react';
import './App.scss';
import { TicTacToe } from './components/TacTacToe';

const App: React.FC = () => {
  return (
    <div className="app">
      <div className="app__wrapper">
        <h1 className="app__title">Tic Tac Toe</h1>

        <TicTacToe />
      </div>
    </div>
  );
}

export default App;
