import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const IncomeExpense = () => {
  const { transactions } = useContext(GlobalContext);
  const income = transactions.reduce((accu, { amount }) => amount > 0 ? accu+=amount : accu, 0);
  const expense = transactions.reduce((accu, { amount }) => amount < 0 ? accu+=amount : accu, 0);

  return (
    <div className='income-expense-container'>
        <div className='income'>
            <h4>Income</h4>
            <p className='money plus'>+${income}</p>
        </div>
        <div className='expense'>
            <h4>Expense</h4>
            <p className='money minus'>-${Math.abs(expense)}</p>
        </div>
    </div>
  )
}
