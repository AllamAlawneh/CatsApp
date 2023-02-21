import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../../theme/colors';

interface AddIconProps {
  onPress: () => void;
}

function AddIcon({onPress}: AddIconProps) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View pointerEvents="none">
        <Icon color={colors.primary} size={32} name="add" />
      </View>
    </TouchableOpacity>
  );
}

export default AddIcon;
