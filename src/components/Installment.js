import React from 'react';
import css from './Installment.module.css';

export default function Installment({ period, children }) {
  return (
    <div className="col s6 m4 xl2">
      <div className={css.card + " card horizontal"}>
        <div className={css.period}>
          <span>{period}</span>
        </div>
        <div>
          {children}
        </div>
      </div>
    </div>
  )
}
