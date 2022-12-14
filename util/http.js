import axios from 'axios';

const backendURL = 'https://expensetracker-12422-default-rtdb.firebaseio.com';
export const storeExpense = async expenseData => {
  const response = await axios.post(backendURL + '/expenses.json', expenseData);
  const id = response.data.name;
  return id;
};
export const getExpense = async () => {
  const response = await axios.get(backendURL + '/expenses.json');
  const expenses = [];
  for (const key in response.data) {
    const expenseObj = {
      id: key,
      amount: response.data[key].amount,
      date: new Date(response.data[key].date),
      description: response.data[key].description,
    };
    expenses.push(expenseObj);
  }
  return expenses;
};
export const updateExpenses = (id, expenseData) => {
  return axios.put(backendURL + `/expenses/${id}.json`, expenseData);
};
export const deleteExpenses = id => {
  return axios.delete(backendURL + `/expenses/${id}.json`);
};
