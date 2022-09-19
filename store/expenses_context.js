import React, {createContext, useReducer} from 'react';
const DummyExpenses = [
  {
    id: 'e1',
    description: 'A pair of shoes',
    amount: 59.99,
    date: new Date('2022-09-19'),
  },
  {
    id: 'e2',
    description: 'A pair of trousers',
    amount: 88.99,
    date: new Date('2022-09-15'),
  },
  {
    id: 'e3',
    description: 'Some Bananana',
    amount: 3.99,
    date: new Date('2022-01-19'),
  },
  {
    id: 'e4',
    description: 'A pair of book',
    amount: 9.99,
    date: new Date('2022-09-01'),
  },
];
export const ExpenseContext = createContext({
  expenses: [],
  addExpense: ({description, amount, date}) => {},
  deleteExpense: id => {},
  updateExpense: (id, {description, amount, dare}) => {},
});
const expensesReducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      const id = new Date().toString() + Math.random().toString();
      return [{...action.payload, id: id}, ...state];
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
  const [expensesState, dispatch] = useReducer(expensesReducer, DummyExpenses);
  const addExpense = expenseData => {
    dispatch({type: 'ADD', payload: expenseData});
  };
  const deleteExpense = id => {
    dispatch({type: 'DELETE', payload: id});
  };

  const updateExpense = (id, expenseData) => {
    dispatch({type: 'UPDATE', payload: {id: id, data: expenseData}});
  };
  const value = {
    expenses: expensesState,
    addExpense: addExpense,
    deleteExpense: deleteExpense,
    updateExpense: updateExpense,
  };
  return (
    <ExpenseContext.Provider value={value}>{children}</ExpenseContext.Provider>
  );
};
export default ExpenseContextProvider;
