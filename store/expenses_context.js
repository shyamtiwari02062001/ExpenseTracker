import React, {createContext, useReducer} from 'react';
export const ExpenseContext = createContext({
  expenses: [],
  addExpense: ({description, amount, date}) => {},
  setExpenses: expenses => {},
  deleteExpense: id => {},
  updateExpense: (id, {description, amount, dare}) => {},
});
const expensesReducer = (state, action) => {
  switch (action.type) {
    case 'SET':
      const inverted = action.payload.reverse();
      return inverted;
    case 'ADD':
      return [...action.payload, ...state];
    case 'UPDATE':
      const updatableExpenseIndex = state.findIndex(
        expense => expense.id === action.payload.id,
      );
      const updatableExpense = state[updatableExpenseIndex];
      const updatedItem = {...updatableExpense, ...action.payload.data};
      const updatedExpenses = [...state];
      updatedExpenses[updatableExpenseIndex] = updatedItem;
      return updatedExpenses;
    case 'DELETE':
      return state.filter(expense => expense.id !== action.payload);
    default:
      return state;
  }
};
const ExpenseContextProvider = ({children}) => {
  const [expensesState, dispatch] = useReducer(expensesReducer, []);
  const addExpense = expenseData => {
    dispatch({type: 'ADD', payload: expenseData});
  };
  const deleteExpense = id => {
    dispatch({type: 'DELETE', payload: id});
  };
  const setExpenses = expenses => {
    dispatch({type: 'SET', payload: expenses});
  };
  const updateExpense = (id, expenseData) => {
    dispatch({type: 'UPDATE', payload: {id: id, data: expenseData}});
  };
  const value = {
    expenses: expensesState,
    addExpense: addExpense,
    deleteExpense: deleteExpense,
    updateExpense: updateExpense,
    setExpenses: setExpenses,
  };
  return (
    <ExpenseContext.Provider value={value}>{children}</ExpenseContext.Provider>
  );
};
export default ExpenseContextProvider;
