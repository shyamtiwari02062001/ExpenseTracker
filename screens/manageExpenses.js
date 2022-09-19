import React, {useLayoutEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import IconButton from '../components/ui/iconbutton';
import {GlobalStyles} from '../constants/styles';
const ManageExpense = ({route, navigation}) => {
  const expenseId = route.params?.expenseId;
  const isEditing = !!expenseId;
  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Edit Expense' : 'Add Expense',
    });
  });

  return (
    <View style={styles.container}>
      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            onPress={() => {}}
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
