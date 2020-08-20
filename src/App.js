import React, { useState, useEffect } from 'react';
import Input from './components/Input';
import Card from './components/Card';

export default function App() {
  const [capital, setCapital] = useState(100);
  const [interest, setInterest] = useState(1);
  const [period, setPeriod] = useState(2);
  const [periodList, setPeriodList] = useState([]);


  useEffect(() => {
    let periods = [];
    let previousAmount = capital;

    for (let i = 1; i <= period; i++) {
      const amount = previousAmount * (1 + interest / 100);
      const valuationMoney = amount - capital;
      const valuationPercentage = (amount / capital - 1) * 100;
      previousAmount = amount;

      periods = [...periods, { period: i, amount: amount.toFixed(2), valuationMoney: valuationMoney.toFixed(2), valuationPercentage: valuationPercentage.toFixed(2) }];

      setPeriodList([...periods]);
    }
  }, [capital, interest, period])

  const handleCapitalInput = (event) => {
    setCapital(event.target.value);
  }

  const handleInterestInput = (event) => {
    setInterest(event.target.value);
  }

  const handlePeriodInput = (event) => {
    setPeriod(event.target.value);
  }

  return (
    <div className="container">
      <h1 className="center">React - Juros Compostos</h1>
      <div className="row">
        <Input id="capital" description="Capital inicial" type="number" value={capital} onChange={handleCapitalInput} step={100} />
        <Input id="interest" description="Taxa de juros mensal" type="number" value={interest} onChange={handleInterestInput} step={0.1} />
        <Input id="months" description="Período (meses)" type="number" value={period} onChange={handlePeriodInput} step={1} />
      </div>
      <div className="row">
        {periodList.map(({ period, amount, valuationMoney, valuationPercentage }) => {
          return (
            <Card key={period} period={period} amount={amount} valuationMoney={valuationMoney} valuationPercentage={valuationPercentage} />
          );
        })}
      </div>
    </div>
  );
}
