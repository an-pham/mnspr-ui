import React from 'react';

import Cell from '../components/Cell';

export default {
  title: 'Example/Cell',
  component: Cell,
};

const Template = (args) => <Cell {...args} />;

export const Main = Template.bind({});
Main.args = {
  value: 1,
  index: [0,0],
  neighbors: []
};
