import React, {useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Input from './input';
import Button from '../ui/button';
import {getFormatedDate} from '../../util/date';
import {GlobalStyles} from '../../constants/styles';
const ExpenseForm = ({defaultValue, onCancel, onSubmit, submitButtonLabel}) => {
  const [input, setInput] = useState({
    amount: {
      value: defaultValue ? defaultValue.amount.toString() : '',
      isValid: true,
    },
    date: {
      value: defaultValue ? getFormatedDate(defaultValue.date) : '',
      isValid: true,
    },
    description: {
      value: defaultValue ? defaultValue.description : '',
      isValid: true,
    },
  });
  const inputChangeHandler = (inputIdentifier, value) => {
    setInput(current => {
      return {
        ...current,
        [inputIdentifier]: {value: value, isValid: true},
      };
    });
  };

  const submitHandler = () => {
    const expenseData = {
      amount: +input.amount.value,
      date: new Date(input.date.value),
      description: input.description.value,
    };
    const amounIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0;
    const dateIsValid = expenseData.date.toString() !== 'Invalid Date';
    const descriptionIsValid = expenseData.description.trim().length > 0;
    if (!amounIsValid || !dateIsValid || !descriptionIsValid) {
      //   Alert.alert('Invalid Input', 'Please check your input values');
      setInput(current => {
        return {
          amount: {value: current.amount.value, isValid: amounIsValid},
          date: {value: current.date.value, isValid: dateIsValid},
          description: {
            value: current.description.value,
            isValid: descriptionIsValid,
          },
        };
      });
      return;
    }
    onSubmit(expenseData);
  };
  const formIsInvalid =
    !input.amount.isValid || !input.date.isValid || !input.description.isValid;
  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your Expense</Text>
      <View style={styles.inputRow}>
        <Input
          label="Amount"
          invalid={!input.amount.isValid}
          textInputConfig={{
            keyboardType: 'decimal-pad',
            value: input.amount.value,
            onChangeText: inputChangeHandler.bind(this, 'amount'),
          }}
          style={styles.rowInput}
        />
        <Input
          label="Date"
          invalid={!input.date.isValid}
          textInputConfig={{
            placeholder: 'YYYY-MM-DD',
            value: input.date.value,
            maxLength: 10,
            onChangeText: inputChangeHandler.bind(this, 'date'),
          }}
          style={styles.rowInput}
        />
      </View>
      <Input
        label="description"
        invalid={!input.description.isValid}
        textInputConfig={{
          value: input.description.value,
          multiline: true,
          onChangeText: inputChangeHandler.bind(this, 'description'),
        }}
      />
      {formIsInvalid && (
        <Text style={styles.errorText}>
          {' '}
          Invalid Input - please check your enterd data
        </Text>
      )}
      <View style={styles.buttons}>
        <Button mode="flat" onPress={onCancel} style={styles.buttonStyle}>
          Cancel
        </Button>
        <Button style={styles.buttonStyle} onPress={submitHandler}>
          {submitButtonLabel}
        </Button>
      </View>
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
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonStyle: {
    minWidth: 120,
    marginHorizontal: 8,
  },
  errorText: {
    textAlign: 'center',
    color: GlobalStyles.colors.error500,
    margin: 8,
    fontSize: 20,
    fontWeight: 'bold',
  },
});
