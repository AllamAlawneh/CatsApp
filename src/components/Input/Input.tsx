import React from 'react';
import {TextInput, View, ViewStyle} from 'react-native';
import colors from '../../theme/colors';
import styles from './Styles';

interface InputProps {
  onChange: (val: string) => void;
  value: string;
  placeholder: string;
  containerStyle?: ViewStyle;
}

function Input({onChange, value, placeholder, containerStyle}: InputProps) {
  return (
    <View style={[styles.container, containerStyle]}>
      <TextInput
      placeholderTextColor={colors.grey}
      style={styles.inputText}
        placeholder={placeholder}
        value={value}
        onChangeText={onChange}
      />
    </View>
  );
}

export default Input;
