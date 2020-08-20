import React from 'react';
import css from './cards.module.css';

export default function Card({ period, amount, valuationMoney, valuationPercentage }) {
  return (
    <div className="col s6 m4 xl2">
      <div className={css.card + " card horizontal"}>
        <div className={css.period}>
          <span>{period}</span>
        </div>
        <div>
          <div>
            <span>{amount}</span>
          </div>
          <div>
            <span>{valuationMoney}</span>
          </div>
          <div>
            <span>{valuationPercentage}</span>
          </div>

        </div>
      </div>
    </div>
  )
}
