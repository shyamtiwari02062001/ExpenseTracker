import React from 'react';
import {FlatList} from 'react-native';
import {getFormatedDate} from '../util.js/date';
import ExpenseItem from './expenseItem';

const ExpenseList = ({expenses}) => {
  const RenderExpenseItem = itemData => {
    return (
      <ExpenseItem
        description={itemData.item.description}
        amount={itemData.item.amount}
        date={getFormatedDate(itemData.item.date)}
      />
    );
  };
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={expenses}
      renderItem={RenderExpenseItem}
    />
  );
};
export default ExpenseList;
