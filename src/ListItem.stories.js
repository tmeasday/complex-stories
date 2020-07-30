import React from 'react';

import ListItem from './ListItem';

export default {
  title: 'ListItem',
  component: ListItem,
};

const Template = (args) => <ListItem {...args} />;

export const Checked = Template.bind({});
Checked.args = {
  title: 'Checked',
  checked: true,
};

export const Unchecked = Template.bind({});
Unchecked.args = {
  title: 'Unchecked',
  checked: false,
};
