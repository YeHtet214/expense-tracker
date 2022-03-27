import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const balance = transactions.reduce((accu, { amount }) => accu += amount , 0)
  const sign = balance < 0 ? '-$' : '$';

  return (
    <>
        <h4>Balance</h4>
        <h1 className='balance'>{sign}{Math.abs(balance)}</h1>
    </>
  )
}
