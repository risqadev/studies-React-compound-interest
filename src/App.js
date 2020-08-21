import React, { useState, useRef } from 'react';
import Form from './components/Form';
import Input from './components/Input';
import Installments from './components/Installments';
import Installment from './components/Installment';
import InfoLine from './components/InfoLine';
import { formatBRL, formatPercentage } from './helpers/formatter';

export default function App() {
  const [capital, setCapital] = useState(5900);
  const [interest, setInterest] = useState(0.8);
  const [period, setPeriod] = useState(12);

  const periodList = useRef([]);

  const calculatePeriods = () => {
    let periods = [];
    let previousAmount = capital;

    for (let i = 1; i <= period; i++) {
      const amount = previousAmount * (1 + interest / 100);
      const valuationMoney = amount - capital;
      const valuationPercentage = (amount / capital - 1);
      previousAmount = amount;

      periods = [...periods, {
        period: i,
        amount,
        valuationMoney,
        valuationPercentage
      }];

      periodList.current = [...periods];
    }
  }

  const handleCapitalInput = ({ target: { value } }) => {
    setCapital(value);
  }

  const handleInterestInput = ({ target: { value } }) => {
    setInterest(value);
  }

  const handlePeriodInput = ({ target: { value } }) => {
    setPeriod(value);
  }

  calculatePeriods();

  return (
    <div className="container">
      <h1 className="center">React - Juros Compostos</h1>
      <Form>
        <Input
          id="capital"
          description="Capital inicial"
          type="number"
          value={capital}
          minimumValue={1}
          step={100}
          onChange={handleCapitalInput}
        />
        <Input
          id="interest"
          description="Taxa de juros mensal (%)"
          type="number"
          value={interest}
          step={0.1}
          onChange={handleInterestInput}
        />
        <Input
          id="months"
          description="Período (meses)"
          type="number"
          value={period}
          minimumValue={1}
          step={1}
          onChange={handlePeriodInput}
        />
      </Form>
      <Installments>
        {periodList.current.map((
          { period, amount, valuationMoney, valuationPercentage }
        ) => {
          return (
            <Installment key={period} period={period} readOnly>
              <InfoLine description="Montante">
                {formatBRL(amount)}
              </InfoLine>
              <InfoLine description="Rendimento" value={valuationMoney}>
                {formatBRL(valuationMoney)}
              </InfoLine>
              <InfoLine description="" value={valuationPercentage}>
                {`(${formatPercentage(valuationPercentage)})`}
              </InfoLine>
            </Installment>
          );
        })}
      </Installments>
    </div>
  );
}
