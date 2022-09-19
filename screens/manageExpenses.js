import React, {useLayoutEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import Button from '../components/ui/button';
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
          }}>
          {isEditing ? 'Update' : 'Add'}
        </Button>
      </View>
      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            onPress={() => {
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
