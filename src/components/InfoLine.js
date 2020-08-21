import React from 'react';
import css from './infoLine.module.css';

function isPositiveOrNegative(value) {
  return value > 0 ? css.positive : value < 0 ? css.negative : 'zero';
}

export default function InfoLine({ description, value, children }) {
  return (
    <div>
      <span className={css.description}>{description.toUpperCase()}</span>
      <span className={`${css.value} ${isPositiveOrNegative(value)}`}>{children}</span>
    </div>
  )
}
