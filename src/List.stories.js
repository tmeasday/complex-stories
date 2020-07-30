import React from 'react';

import List from './List';
import ListItem from './ListItem';
import { Unchecked } from './ListItem.stories';

export default {
  title: 'List',
  component: List,
};

const Template = ({ items, ...args }) => (
  <List>
    {items.map((item) => (
      <ListItem {...item} />
    ))}
  </List>
);

export const Empty = Template.bind({});
Empty.args = { items: [] };

export const OneItem = Template.bind({});
OneItem.args = { items: [Unchecked.args] };
