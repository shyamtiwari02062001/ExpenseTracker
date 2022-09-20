import React, {useContext, useLayoutEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import ExpenseForm from '../components/manageExpense.js/expenseForm';
import IconButton from '../components/ui/iconbutton';
import {GlobalStyles} from '../constants/styles';
import {ExpenseContext} from '../store/expenses_context';
import {storeExpense, updateExpenses, deleteExpenses} from '../util/http';
import LoadingOverlay from '../components/ui/loadingOverlay';
const ManageExpense = ({route, navigation}) => {
  const [submitting, setSubmitting] = useState(false);
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
  const deleteExpenseHandler = async () => {
    setSubmitting(true);
    await deleteExpenses(expenseId);
    expenseCTX.deleteExpense(expenseId);
    navigation.goBack();
  };
  const confirmHandler = async expenseData => {
    setSubmitting(true);
    if (isEditing) {
      expenseCTX.updateExpense(expenseId, expenseData);
      await updateExpenses(expenseId, expenseData);
    } else {
      console.log(expenseData);
      const id = await storeExpense(expenseData);
      expenseCTX.addExpense({id: id, ...expenseData});
    }
    navigation.goBack();
  };
  const cancelHandler = () => {
    navigation.goBack();
  };
  if (submitting) {
    return <LoadingOverlay />;
  }
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
            onPress={deleteExpenseHandler}
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
