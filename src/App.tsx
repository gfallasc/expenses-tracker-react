import React from 'react';
import './App.css';
import { AppHeader } from './components/AppHeader';
import { AppContainer } from './components/AppContainer';
import { Balance } from './components/Balance';
import { IncomeExpense } from './components/IncomeExpense';
import { TransactionList } from './components/TransactionList';

export default () => {
  
  return (
    <div>
      <AppHeader />
      <AppContainer>
        <Balance />
        <IncomeExpense />
        <TransactionList />
      </AppContainer>
    </div>
  );
}