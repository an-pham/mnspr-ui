import React from 'react';
import Board from './Board';
import { Layout } from './style';

function App() {
  return (
    <Layout className="App">
      <section className='game-board'>
        <Board {...defaultProps} />
      </section>
    </Layout>
  );
}

let defaultProps = {
  cells: [
    [0, 0, 0, 0, 0, 1, -1, 2, 1, 1],
    [0, 1, 1, 1, 0, 2, 2, 3, -1, 1],
    [0, 1, -1, 1, 0, 1, -1, 2, 1, 1],
    [0, 1, 1, 1, 0, 1, 1, 1, 0, 0],
    [0, 0, 1, 1, 1, 0, 0, 0, 0, 0],
    [0, 0, 1, -1, 1, 1, 1, 1, 0, 0],
    [0, 0, 1, 1, 1, 2, -1, 2, 0, 0],
    [0, 0, 0, 0, 0, 2, -1, 2, 1, 1],
    [0, 1, 1, 1, 1, 2, 2, 1, 1, -1],
    [0, 1, -1, 1, 1, -1, 1, 0, 1, 1]
  ],
  rows: 10,
  cols: 10,
  disabledAll: false
};

export default App
