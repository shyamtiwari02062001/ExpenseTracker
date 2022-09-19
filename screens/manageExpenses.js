import React, {useLayoutEffect} from 'react';
import {Text} from 'react-native';
const ManageExpense = ({route, navigation}) => {
  const expenseId = route.params?.expenseId;
  const isEditing = !!expenseId;
  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Edit Expense' : 'Add Expense',
    });
  });
  return <Text>ManageExpense</Text>;
};
export default ManageExpense;
