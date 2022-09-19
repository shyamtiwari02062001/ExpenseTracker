import React from 'react';
import {Text} from 'react-native';
import ExpenseOutput from '../components/expenseOutput';
const RecentExpense = () => {
  return <ExpenseOutput expensePeriod={'Last 7 days'} />;
};
export default RecentExpense;
