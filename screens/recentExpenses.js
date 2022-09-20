import React, {useContext, useEffect, useState} from 'react';
import ExpenseOutput from '../components/expenseOutput';
import {ExpenseContext} from '../store/expenses_context';
import {GetDayMinusDays} from '../util/date';
import {getExpense} from '../util/http';
const RecentExpense = () => {
  const expenseCTX = useContext(ExpenseContext);
  useEffect(() => {
    async function getExpenses() {
      const expenses = await getExpense();
      expenseCTX.setExpenses(expenses);
    }
    getExpenses();
  }, [expenseCTX]);
  const recentExpense = expenseCTX.expenses.filter(expenses => {
    const today = new Date();
    const date = GetDayMinusDays(today, 7);
    return expenses.date >= date && expenses.date <= today;
  });
  return (
    <ExpenseOutput
      expenses={recentExpense}
      expensePeriod={'Last 7 days'}
      fallbackText="No expenses registered in last 7 days"
    />
  );
};
export default RecentExpense;
