import React, {useContext, useLayoutEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import ExpenseForm from '../components/manageExpense.js/expenseForm';
import Button from '../components/ui/button';
import IconButton from '../components/ui/iconbutton';
import {GlobalStyles} from '../constants/styles';
import {ExpenseContext} from '../store/expenses_context';
const ManageExpense = ({route, navigation}) => {
  const expenseId = route.params?.expenseId;
  const isEditing = !!expenseId;
  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Edit Expense' : 'Add Expense',
    });
  });
  const expenseCTX = useContext(ExpenseContext);
  return (
    <View style={styles.container}>
      <ExpenseForm />
      <View style={styles.buttons}>
        <Button
          mode="flat"
          onPress={() => {
            navigation.goBack();
          }}
          style={styles.buttonStyle}>
          Cancel
        </Button>
        <Button
          style={styles.buttonStyle}
          onPress={() => {
            navigation.goBack();
            if (isEditing) {
              expenseCTX.updateExpense(expenseId, {
                description: 'Test!!',
                amount: 19.09,
                date: new Date('2022-05-12'),
              });
            } else {
              expenseCTX.addExpense({
                description: 'Test',
                amount: 19.99,
                date: new Date('2022-05-22'),
              });
            }
          }}>
          {isEditing ? 'Update' : 'Add'}
        </Button>
      </View>
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
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonStyle: {
    minWidth: 120,
    marginHorizontal: 8,
  },
});
