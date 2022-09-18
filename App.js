import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ManageExpense from './screens/manageExpenses';
import RecentExpense from './screens/recentExpenses';
import AllExpense from './screens/allExpenses';
const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();
const ExpensesOverview = () => {
  return (
    <BottomTabs.Navigator>
      <BottomTabs.Screen name="RecentExpenses" component={RecentExpense} />
      <BottomTabs.Screen name="AllExpenses" component={AllExpense} />
    </BottomTabs.Navigator>
  );
};
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ExpenseOverview" component={ExpensesOverview} />
        <Stack.Screen name="ManageExpense" component={ManageExpense} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
