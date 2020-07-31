import React from 'react';
import PropTypes from 'prop-types';

export default function ListItem({ title, checked }) {
  return (
    <li>
      <input type="radio" checked={checked} /> {title}
    </li>
  );
}

ListItem.propTypes = {
  title: PropTypes.string.isRequired,
  checked: PropTypes.bool,
};
