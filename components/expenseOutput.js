import React from 'react';
import {FlatList, View, Text} from 'react-native';
import ExpenseList from './expensesLIst';
import ExpenseSummary from './expensesSummary';

const ExpenseOutput = ({expenses, expensePeriod}) => {
  return (
    <View>
      <ExpenseSummary periodName={expensePeriod} expenses={expenses} />
      <ExpenseList />
    </View>
  );
};

export default ExpenseOutput;
