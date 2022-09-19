import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Pressable, View, Text, StyleSheet} from 'react-native';
import {GlobalStyles} from '../constants/styles';

const ExpenseItem = ({description, date, amount, id}) => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => {
        navigation.navigate('ManageExpense', {
          expenseId: id,
        });
      }}
      style={({pressed}) => pressed && styles.pressed}>
      <View style={styles.item}>
        <View>
          <Text style={[styles.textBase, styles.description]}>
            {description}
          </Text>
          <Text style={styles.textBase}>{date}</Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.amountText}>${amount.toFixed(2)}</Text>
        </View>
      </View>
    </Pressable>
  );
};
export default ExpenseItem;
const styles = StyleSheet.create({
  pressed: {
    opacity: 0.75,
  },
  item: {
    padding: 12,
    marginVertical: 8,
    backgroundColor: GlobalStyles.colors.primary500,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 6,
    elevation: 4,
  },
  textBase: {
    color: GlobalStyles.colors.primary50,
  },
  description: {
    fontSize: 16,
    marginBottom: 4,
    fontWeight: 'bold',
  },
  amountContainer: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: '#fff',
    justifyContent: 'center',
    borderRadius: 4,
    minWidth: 80,
    alignItems: 'center',
  },
  amountText: {
    color: GlobalStyles.colors.primary500,
  },
});
