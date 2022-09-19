import React from 'react';
import {FlatList, View, Text} from 'react-native';
import ExpenseList from './expensesLIst';
import ExpenseSummary from './expensesSummary';

const ExpenseOutput = ({expenses}) => {
  return (
    <View>
      <ExpenseSummary />
      <ExpenseList />
    </View>
  );
};

export default ExpenseOutput;
