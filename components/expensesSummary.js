import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {GlobalStyles} from '../constants/styles';

const ExpenseSummary = ({periodName, expenses}) => {
  const expensesSum = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.period}>{periodName}</Text>
      <Text style={styles.sum}>${expensesSum.toFixed(2)}</Text>
    </View>
  );
};
export default ExpenseSummary;
const styles = StyleSheet.create({
  rootContainer: {
    padding: 8,
    backgroundColor: GlobalStyles.colors.primary50,
    borderRadius: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  period: {
    color: GlobalStyles.colors.primary400,
    fontSize: 20,
  },
  sum: {
    fontSize: 24,
    fontWeight: 'bold',
    color: GlobalStyles.colors.primary500,
  },
});
