import React from 'react';
import {TextInput, Text, View} from 'react-native';

const Input = ({label, textInputConfig}) => {
  return (
    <View>
      <Text>{label}</Text>
      <TextInput {...textInputConfig} />
    </View>
  );
};
export default Input;
