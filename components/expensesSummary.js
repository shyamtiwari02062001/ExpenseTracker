import React from 'react';
import {View, Text} from 'react-native';

const ExpenseSummary = ({expenses}) => {
  return (
    <View>
      <Text>Last 7 days</Text>
      <Text>$1276</Text>
    </View>
  );
};
export default ExpenseSummary;
