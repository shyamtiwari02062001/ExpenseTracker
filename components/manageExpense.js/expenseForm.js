import React from 'react';
import {View} from 'react-native';
import Input from './input';

const ExpenseForm = () => {
  return (
    <View>
      <Input
        label="Amount"
        textInputConfig={{
          keyboardType: 'decimal-pad',
          onChangeText: val => {
            console.log(val);
          },
        }}
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
      />
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
