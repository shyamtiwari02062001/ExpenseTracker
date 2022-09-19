import React from 'react';
import {View, StyleSheet} from 'react-native';
import {GlobalStyles} from '../constants/styles';
import ExpenseList from './expensesLIst';
import ExpenseSummary from './expensesSummary';

const ExpenseOutput = ({expenses, expensePeriod}) => {
  return (
    <View style={styles.container}>
      <ExpenseSummary periodName={expensePeriod} expenses={expenses} />
      <ExpenseList expenses={expenses} />
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
