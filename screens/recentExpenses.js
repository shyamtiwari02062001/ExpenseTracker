import React, {useContext, useEffect, useState} from 'react';
import ExpenseOutput from '../components/expenseOutput';
import {ExpenseContext} from '../store/expenses_context';
import {GetDayMinusDays} from '../util/date';
import {getExpense} from '../util/http';
const RecentExpense = () => {
  const [fetchedExpenses, setFetchedExpenses] = useState([]);
  useEffect(() => {
    async function getExpenses() {
      const expenses = await getExpense();
      setFetchedExpenses(expenses);
    }
    getExpenses();
  }, []);
  // const expenseCTX = useContext(ExpenseContext);
  const recentExpense = fetchedExpenses.filter(expenses => {
    const today = new Date();
    console.log(expenses.date);
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
