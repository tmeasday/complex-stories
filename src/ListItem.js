import React from 'react';

export default function ListItem({ title, checked }) {
  return (
    <li>
      <input type="radio" defaultChecked={checked} /> {title}
    </li>
  );
}
