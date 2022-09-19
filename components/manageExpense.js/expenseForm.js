import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Input from './input';

const ExpenseForm = () => {
  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your Expense</Text>
      <View style={styles.inputRow}>
        <Input
          label="Amount"
          textInputConfig={{
            keyboardType: 'decimal-pad',
            onChangeText: val => {
              console.log(val);
            },
          }}
          style={styles.rowInput}
        />
        <Input
          label="Date"
          textInputConfig={{
            placeholder: 'YYYY-MM-DD',
            maxLength: 10,
            onChangeText: val => {
              console.log(val);
            },
          }}
          style={styles.rowInput}
        />
      </View>
      <Input
        label="description"
        textInputConfig={{
          multiline: true,
        }}
      />
    </View>
  );
};
export default ExpenseForm;
const styles = StyleSheet.create({
  form: {
    marginTop: 40,
  },
  inputRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowInput: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginVertical: 24,
  },
});
