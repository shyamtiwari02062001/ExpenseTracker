import React, {useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Input from './input';

const ExpenseForm = () => {
  const [input, setInput] = useState({amount: '', date: '', description: ''});
  const inputChangeHandler = (inputIdentifier, value) => {
    setInput(current => {
      return {
        ...current,
        [inputIdentifier]: value,
      };
    });
  };
  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your Expense</Text>
      <View style={styles.inputRow}>
        <Input
          label="Amount"
          textInputConfig={{
            keyboardType: 'decimal-pad',
            value: input.amount,
            onChangeText: inputChangeHandler.bind(this, 'amount'),
          }}
          style={styles.rowInput}
        />
        <Input
          label="Date"
          textInputConfig={{
            placeholder: 'YYYY-MM-DD',
            value: input.date,
            maxLength: 10,
            onChangeText: inputChangeHandler.bind(this, 'date'),
          }}
          style={styles.rowInput}
        />
      </View>
      <Input
        label="description"
        textInputConfig={{
          value: input.description,
          multiline: true,
          onChangeText: inputChangeHandler.bind(this, 'description'),
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
