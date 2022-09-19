import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ManageExpense from './screens/manageExpenses';
import RecentExpense from './screens/recentExpenses';
import AllExpense from './screens/allExpenses';
import {GlobalStyles} from './constants/styles';
import {Image} from 'react-native';
import IconButton from './components/ui/iconbutton';
import ExpenseContextProvider from './store/expenses_context';
const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();
const ExpensesOverview = () => {
  return (
    <BottomTabs.Navigator
      screenOptions={({navigation}) => ({
        headerStyle: {backgroundColor: GlobalStyles.colors.primary500},
        headerTintColor: '#fff',
        tabBarStyle: {backgroundColor: GlobalStyles.colors.primary500},
        tabBarActiveTintColor: GlobalStyles.colors.accent500,
        headerRight: ({tintColor}) => {
          return (
            <IconButton
              icon={require('./assets/plus.png')}
              size={24}
              color={tintColor}
              onPress={({}) => {
                navigation.navigate('ManageExpense');
              }}
            />
          );
        },
      })}>
      <BottomTabs.Screen
        name="RecentExpenses"
        component={RecentExpense}
        options={{
          title: 'Recent Expenses',
          tabBarLabel: 'Recent',
          tabBarIcon: ({color, size}) => (
            <Image
              source={require('./assets/hourglass.png')}
              style={{tintColor: color, height: size, width: size}}
            />
          ),
        }}
      />
      <BottomTabs.Screen
        name="AllExpenses"
        component={AllExpense}
        options={{
          title: 'All Expenses',
          tabBarLabel: 'All',
          tabBarIcon: ({color, size}) => (
            <Image
              source={require('./assets/calendar.png')}
              style={{tintColor: color, height: size, width: size}}
            />
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
};
const App = () => {
  return (
    <ExpenseContextProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {backgroundColor: GlobalStyles.colors.primary500},
            headerTintColor: '#fff',
          }}>
          <Stack.Screen
            name="ExpenseOverview"
            component={ExpensesOverview}
            options={{headerShown: false}}
          />
          <Stack.Screen
            options={{presentation: 'modal'}}
            name="ManageExpense"
            component={ManageExpense}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ExpenseContextProvider>
  );
};
export default App;
