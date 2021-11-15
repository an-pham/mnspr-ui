import React from 'react';

import Board from '../components/Board';

export default {
  title: 'Example/Board',
  component: Board,
};

const Template = (args) => <Board {...args} />;

export const Main = Template.bind({});
Main.args = {
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
  cols: 10
};
