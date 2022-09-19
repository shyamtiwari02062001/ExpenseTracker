import React, {useContext} from 'react';
import ExpenseOutput from '../components/expenseOutput';
import {ExpenseContext} from '../store/expenses_context';
import {GetDayMinusDays} from '../util.js/date';
const RecentExpense = () => {
  const expenseCTX = useContext(ExpenseContext);
  const recentExpense = expenseCTX.expenses.filter(expenses => {
    const today = new Date();
    const date = GetDayMinusDays(today, 7);
    return expenses.date > date;
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
