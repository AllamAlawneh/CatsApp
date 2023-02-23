import React from 'react';
import {View, TouchableOpacity, Text, ViewStyle} from 'react-native';
import styles from './Styles';

interface ButtonProps {
  onPress: () => void;
  title: string;
  containerStyle?: ViewStyle;
}

function Button({onPress, title, containerStyle}: ButtonProps) {
  return (
    <TouchableOpacity
      style={containerStyle}
      activeOpacity={1}
      onPress={onPress}>
      <View style={styles.container} pointerEvents="none">
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default Button;
