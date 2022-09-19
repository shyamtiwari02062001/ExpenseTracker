import React from 'react';
import {View, StyleSheet} from 'react-native';
import {GlobalStyles} from '../constants/styles';
import ExpenseList from './expensesLIst';
import ExpenseSummary from './expensesSummary';
const DummyExpenses = [
  {
    id: 'e1',
    description: 'A pair of shoes',
    amount: 59.99,
    date: new Date('2022-09-19'),
  },
  {
    id: 'e2',
    description: 'A pair of trousers',
    amount: 88.99,
    date: new Date('2022-09-15'),
  },
  {
    id: 'e3',
    description: 'Some Bananana',
    amount: 3.99,
    date: new Date('2022-01-19'),
  },
  {
    id: 'e4',
    description: 'A pair of book',
    amount: 9.99,
    date: new Date('2022-09-01'),
  },
];
const ExpenseOutput = ({expenses, expensePeriod}) => {
  return (
    <View style={styles.container}>
      <ExpenseSummary periodName={expensePeriod} expenses={DummyExpenses} />
      <ExpenseList expenses={DummyExpenses} />
    </View>
  );
};

export default ExpenseOutput;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 0,
    backgroundColor: GlobalStyles.colors.primary700,
  },
});
