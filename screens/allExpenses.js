import React, {useContext} from 'react';
import ExpenseOutput from '../components/expenseOutput';
import {ExpenseContext} from '../store/expenses_context';
const AllExpense = () => {
  const expenseCTX = useContext(ExpenseContext);
  return (
    <ExpenseOutput
      expenses={expenseCTX.expenses}
      expensePeriod={'Total'}
      fallbackText="No expenses registered found !"
    />
  );
};
export default AllExpense;
