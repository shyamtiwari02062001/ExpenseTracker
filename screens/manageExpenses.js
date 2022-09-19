import React, {useContext, useLayoutEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import ExpenseForm from '../components/manageExpense.js/expenseForm';
import IconButton from '../components/ui/iconbutton';
import {GlobalStyles} from '../constants/styles';
import {ExpenseContext} from '../store/expenses_context';
const ManageExpense = ({route, navigation}) => {
  const expenseId = route.params?.expenseId;
  const isEditing = !!expenseId;
  const expenseCTX = useContext(ExpenseContext);
  const selectedExpense = expenseCTX.expenses.find(
    expense => expense.id === expenseId,
  );
  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Edit Expense' : 'Add Expense',
    });
  });
  const confirmHandler = expenseData => {
    if (isEditing) {
      expenseCTX.updateExpense(expenseId, expenseData);
    } else {
      expenseCTX.addExpense(expenseData);
    }
    navigation.goBack();
  };
  const cancelHandler = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <ExpenseForm
        defaultValue={selectedExpense}
        onCancel={cancelHandler}
        onSubmit={confirmHandler}
        submitButtonLabel={isEditing ? 'Update' : 'Add'}
      />
      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            onPress={() => {
              expenseCTX.deleteExpense(expenseId);
              navigation.goBack();
            }}
            icon={require('../assets/bin.png')}
            size={24}
            color={GlobalStyles.colors.error500}
          />
        </View>
      )}
    </View>
  );
};
export default ManageExpense;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: 'center',
  },
});
