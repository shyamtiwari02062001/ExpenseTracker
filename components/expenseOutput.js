import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {GlobalStyles} from '../constants/styles';
import ExpenseList from './expensesLIst';
import ExpenseSummary from './expensesSummary';

const ExpenseOutput = ({expenses, expensePeriod, fallbackText}) => {
  let content = <Text style={styles.text}>{fallbackText}</Text>;
  if (expenses.length > 0) {
    content = <ExpenseList expenses={expenses} />;
  }
  return (
    <View style={styles.container}>
      <ExpenseSummary periodName={expensePeriod} expenses={expenses} />
      {content}
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
  text: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 32,
  },
});
